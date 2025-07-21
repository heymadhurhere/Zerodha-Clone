import React, { useState } from "react";


import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, maxQty) => {},
  closeSellWindow: () => {},
});


export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellStock, setSelectedSellStock] = useState({ uid: "", maxQty: 0 });

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid, maxQty) => {
    setIsSellWindowOpen(true);
    setSelectedSellStock({ uid, maxQty });
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellStock({ uid: "", maxQty: 0 });
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && (
        <SellActionWindow uid={selectedSellStock.uid} maxQty={selectedSellStock.maxQty} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
