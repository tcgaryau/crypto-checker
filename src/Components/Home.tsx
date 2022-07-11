import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./Coin/Coin";
import Refresh from "../Images/refresh.png";
import { ICoin } from "../Interfaces/ICoin";

const Home = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    refreshPage();
  }, []);

  const filterCoins = coins.filter((coin: ICoin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="App">
      <div className="headerContainer">
        <h1>Welcome to Gary's CryptoChecker</h1>
        <div className="buttonContainer">
          <input
            placeholder="Search for a Coin"
            type="text"
            onChange={handleSearch}
          />
          <img onClick={refreshPage} src={Refresh}></img>
        </div>
      </div>
      <div className="coinContainer">
        {isLoading && <h1 className="loadingMsg">Data Loading...</h1>}
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
      </div>
    </div>
  );
};

export default Home;
