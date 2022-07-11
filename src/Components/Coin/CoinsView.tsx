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
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Symbol</th>
            <th>CAD</th>
            <th>Change</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {props.filterCoins.map((coin: ICoin) => {
            return (
              <tr key={coin.id}>
                <td>
                  <img
                    src={coin.image}
                    style={{ height: "50px", width: "50px" }}
                    alt=""
                  />
                </td>
                <td>{coin.name}</td>
                <td>{coin.symbol.toUpperCase()}</td>
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
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => {
                      handleClick(coin.id);
                    }}
                  >
                    More Info
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CoinsView;
