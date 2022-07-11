import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./Coin/Coin";
import { ICoin } from "../Interfaces/ICoin";
import Refresh from "../Images/refresh.png";

const Home = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    refreshPage();
  }, []);

  const filterCoins = coins.filter((coin: ICoin) => {
    return (
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const refreshPage = () => {
    setIsLoading(true);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      setIsLoading(false);
      setCoins(response.data);
    });
  };

  return (
    <div className="container">
      <h1 className="text-center text-white">
        Welcome to Gary Au's CryptoChecker
      </h1>
      <div className="row">
        <div className="col-2 offset-md-4">
          <input
            type="text"
            className="form-control bg-success"
            aria-describedby="coinSearch"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
        <div className="col-1 order-5">
          <img
            onClick={refreshPage}
            src={Refresh}
            style={{ height: "45px", cursor: "pointer" }}
          ></img>
        </div>
      </div>

      <div className="coinContainer">
        {isLoading && (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {filterCoins && (
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
              {filterCoins.map((coin: ICoin) => {
                return (
                  <Coin
                    key={coin.id}
                    id={coin.id}
                    icon={coin.image}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    price={coin.current_price}
                    marketCap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
