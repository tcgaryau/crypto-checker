import React from "react";
import { useNavigate } from "react-router-dom";

interface ICoinProps {
  icon: string;
  coinName: string;
  coinSymbol: string;
  price: number;
  marketCap: number;
  priceChange: number;
  id: string;
}
const Coin = (props: ICoinProps) => {
  let navigate = useNavigate();
  return (
    <>
      <tr>
        <td>
          <img src={props.icon} style={{ height: "50px", width: "50px" }} />
        </td>
        <td>{props.coinName}</td>
        <td>{props.coinSymbol.toUpperCase()}</td>
        <td>$ {props.price.toFixed(2)}</td>
        {props.priceChange < 0 ? (
          <td className="red">{props.priceChange.toFixed(2)}%</td>
        ) : (
          <td className="green">{props.priceChange.toFixed(2)}%</td>
        )}
        <td>{props.marketCap.toLocaleString()}</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => {
              navigate(`/CoinPage/${props.id}`);
            }}
          >
            More Info
          </button>
        </td>
      </tr>
    </>
  );
};

export default Coin;
