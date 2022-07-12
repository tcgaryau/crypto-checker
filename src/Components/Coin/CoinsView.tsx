import React from "react";
import { ICoin } from "../../Interfaces/ICoin";

interface ICoinProps {
  filterCoins: ICoin[];
  setCurrentCoinId: Function;
  setIsCoinPopupVisible: Function;
}
const CoinsView = (props: ICoinProps) => {
  const handleClick = (id: string) => {
    props.setCurrentCoinId(id);
    props.setIsCoinPopupVisible(true);
  };

  return (
    <div className="table-wrapper table-sm-responsive">
      <table className="table table-sm table-dark table-hover table-borderless">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>CAD</th>
            <th>Change</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {props.filterCoins.map((coin: ICoin) => {
            return (
              <tr
                key={coin.id}
                onClick={() => {
                  handleClick(coin.id);
                }}
                style={{ cursor: "pointer" }}
              >
                <td>
                  <img
                    src={coin.image}
                    style={{ height: "50px", width: "50px" }}
                    alt=""
                  />
                </td>
                <td>{`${coin.name} (${coin.symbol.toUpperCase()})`}</td>
                <td>$ {coin.current_price.toFixed(2)}</td>
                {coin.price_change_percentage_24h < 0 ? (
                  <td className="red">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                ) : (
                  <td className="green">
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                )}
                <td>{coin.market_cap.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoinsView;
