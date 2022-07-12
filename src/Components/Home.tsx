import "../App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import CoinsView from "./Coin/CoinsView";
import { ICoin } from "../Interfaces/ICoin";
import Refresh from "../Images/refresh.png";
import CoinPopup from "./Coin/CoinPopup";

const Home = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentCoinId, setCurrentCoinId] = useState<string>(null!);
  const [isCoinPopupVisible, setIsCoinPopupVisible] = useState<boolean>(false);

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
      <h1 className="text-center text-white">Gary's CryptoChecker</h1>
      <div className="row container">
        <div className="col-4 col-sm-4 col-md-3 offset-4">
          <input
            type="text"
            className="form-control bg-success"
            aria-describedby="coinSearch"
            placeholder="Search"
            onChange={handleSearch}
          />
        </div>
        <div className="col-1">
          <img
            onClick={refreshPage}
            src={Refresh}
            style={{ height: "45px", cursor: "pointer" }}
          ></img>
        </div>
      </div>

      <div>
        {isLoading && (
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {filterCoins && (
          <CoinsView
            filterCoins={filterCoins}
            setCurrentCoinId={setCurrentCoinId}
            setIsCoinPopupVisible={setIsCoinPopupVisible}
          />
        )}
      </div>
      <CoinPopup
        currentCoinId={currentCoinId}
        setCurrentCoinId={setCurrentCoinId}
        isCoinPopupVisible={isCoinPopupVisible}
        setIsCoinPopupVisible={setIsCoinPopupVisible}
      ></CoinPopup>
    </div>
  );
};

export default Home;
