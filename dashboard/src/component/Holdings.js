import React, { useEffect, useState } from "react";
import axios from "axios";
import {VerticalGraph} from "./VerticalGraph";
const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3002";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/allHoldings`)
      .then((res) => setAllHoldings(res.data));
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Stock Prices",
        data: allHoldings.map((stock) => stock.qty * stock.price),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  }

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allHoldings.map((stock, index) => {
            const currValue = stock.qty * stock.price;
            const isProfit = currValue - stock.qty * stock.avg >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{currValue.toFixed(2)}</td>
                <td className={profitClass}>
                  {(currValue - stock.qty * stock.avg).toFixed(2)}
                </td>
                <td className={profitClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
