import React from "react";
import "./Coin.css";
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
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            <img src={props.icon} />
            <h1 className="coinName">{props.coinName}</h1>
            <p className="coinSymbol">{props.coinSymbol}</p>
            <p className="coinPrice">$ {props.price.toFixed(2)}</p>
            {props.priceChange < 0 ? (
              <p className="priceChange red">{props.priceChange.toFixed(2)}%</p>
            ) : (
              <p className="priceChange green">
                {props.priceChange.toFixed(2)}%
              </p>
            )}
            <p className="coinVolume">$ {props.marketCap.toLocaleString()}</p>
            <button
              onClick={() => {
                navigate(`/CoinPage/${props.id}`);
              }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
