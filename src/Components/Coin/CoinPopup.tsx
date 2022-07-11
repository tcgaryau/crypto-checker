import Axios from "axios";
import { Popup } from "devextreme-react";
import { useState, useEffect } from "react";

interface ICoinPopupProps {
  currentCoinId: string;
  setCurrentCoinId: Function;
  isCoinPopupVisible: boolean;
  setIsCoinPopupVisible: Function;
}

const CoinPopup = (props: ICoinPopupProps) => {
  const [coin, setCoin] = useState<any>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    if (props.currentCoinId) {
      Axios.get(
        `https://api.coingecko.com/api/v3/coins/${props.currentCoinId}`
      ).then((response) => {
        setCoin(response.data);
        console.log(response.data);
      });
    }
  }, [props.currentCoinId]);

  const onHidingCoinPopup = () => {
    props.setCurrentCoinId(null);
    setCoin(null);
    props.setIsCoinPopupVisible(false);
  };

  const getDateString = (date: string) => {
    return new Date(date).toDateString();
  };
  return (
    <>
      {coin && (
        <Popup
          title={`${coin.name} (${coin.symbol.toUpperCase()})`}
          visible={props.isCoinPopupVisible}
          hideOnOutsideClick={true}
          onHiding={onHidingCoinPopup}
          showCloseButton={false}
          width={450}
          height={400}
        >
          <div className="row">
            <div className="col-2">
              <img
                src={coin.image.large}
                className="mb-2"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <p className="h3 col-10">{`${
              coin.name
            } (${coin.symbol.toUpperCase()})`}</p>
            <p className="h5 col-5">Current Price:</p>
            <p className="h5 col-7">
              $ {coin.market_data.current_price.cad.toLocaleString()}
            </p>
            <p className="h5 col-5">24hr High:</p>
            <p className="h5 col-7 green">
              $ {coin.market_data.high_24h.cad.toLocaleString()}
            </p>
            <p className="h5 col-5">24hr Low:</p>
            <p className="h5 col-7 red">
              $ {coin.market_data.low_24h.cad.toLocaleString()}
            </p>
            <p className="h5 col-5">Trading Volume:</p>
            <p className="h5 col-7">
              $ {coin.market_data.total_volume.cad.toLocaleString()}
            </p>
            <p className="h5 col-5">Market Cap:</p>
            <p className="h5 col-7">
              $ {coin.market_data.market_cap.cad.toLocaleString()}
            </p>
            <p className="h5 col-5">All Time High:</p>
            <p className="h5 col-3 green">
              $ {coin.market_data.ath.cad.toLocaleString()}
            </p>
            <p className="h5 col-5">All Time Low:</p>
            <p className="h5 col-3 red">
              $ {coin.market_data.atl.cad.toLocaleString()}
            </p>
          </div>
        </Popup>
      )}
    </>
  );
};

export default CoinPopup;
