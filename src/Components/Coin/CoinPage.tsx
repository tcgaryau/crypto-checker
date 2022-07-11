import Axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CoinPage = () => {
  let { id } = useParams();
  const [coin, setCoin] = useState<any>(null);
  // coin start has to be null first to give time to fetch API data

  useEffect(() => {
    console.log(id);
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
        setCoin(response.data);
      }
    );
  }, []);

  // if statement to check if data has reached, only then render the component
  if (coin) {
    return (
      <div className="container mt-5">
        <div className="card text-white">
          <h5 className="card-header bg-dark text-center">{coin.name} (CAD)</h5>
          <div className="card-body">
            <div className="text-center">
              <img
                src={coin.image.large}
                className="mb-2"
                style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className="row g-1 text-left">
              <div className="col-2 offset-4">
                <p className="h4">Symbol:</p>
              </div>
              <div className="col-2">
                <p className="h4">{coin.symbol}</p>
              </div>
              <div className="col-2 offset-4">
                <p className="h4">Current Price:</p>
              </div>
              <div className="col-2">
                <p className="h4">
                  $ {coin.market_data.current_price.cad.toLocaleString()}
                </p>
              </div>
              <div className="col-2 offset-4">
                <p className="h4">Market Cap:</p>
              </div>
              <div className="col-2">
                <p className="h4">
                  $ {coin.market_data.market_cap.cad.toLocaleString()}
                </p>
              </div>
              <div className="col-2 offset-4">
                <p className="h4">Trading Volume:</p>
              </div>
              <div className="col-2">
                <p className="h4">
                  $ {coin.market_data.total_volume.cad.toLocaleString()}
                </p>
              </div>
              <div className="col-2 offset-4">
                <p className="h4">24hr High:</p>
              </div>
              <div className="col-2">
                <p className="h4 green">
                  $ {coin.market_data.high_24h.cad.toLocaleString()}
                </p>
              </div>
              <div className="col-2 offset-4">
                <p className="h4">24hr Low:</p>
              </div>
              <div className="col-2">
                <p className="h4 red">
                  $ {coin.market_data.low_24h.cad.toLocaleString()}
                </p>
              </div>
              <Link to={"/crypto-checker"} className="btn btn-success col-1 offset-4">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CoinPage;
