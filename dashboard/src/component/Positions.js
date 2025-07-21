import React, { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("API URL:", apiUrl); // Debug log
    setLoading(true);
    axios
      .get(`${apiUrl}/allPositions`)
      .then((res) => setAllPositions(res.data));
  }, []);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          {allPositions.map((position, index) => {
            const currValue = position.qty * position.price;
            const isProfit = currValue - position.qty * position.avg >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = position.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{position.product}</td>
                <td>{position.name}</td>
                <td>{position.qty}</td>
                <td>{position.avg.toFixed(2)}</td>
                <td>{position.price.toFixed(2)}</td>
                <td className={profitClass}>
                  {(currValue - position.qty * position.avg).toFixed(2)}
                </td>
                <td className={dayClass}>{position.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
