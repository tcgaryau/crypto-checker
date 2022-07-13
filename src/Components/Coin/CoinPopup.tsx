import { Popup } from "devextreme-react";
import { useState, useEffect } from "react";
import { callAPI, numberWithCommas } from "../../Util/Util";

interface ICoinPopupProps {
  currentCoinId: string;
  setCurrentCoinId: (value: string) => void;
  isCoinPopupVisible: boolean;
  setIsCoinPopupVisible: (value: boolean) => void;
}

const CoinPopup = (props: ICoinPopupProps) => {
  const [coinDetails, setCoinDetails] = useState<any>(null);

  useEffect(() => {
    if (props.currentCoinId) {
      try {
        callAPI(
          `https://api.coingecko.com/api/v3/coins/${props.currentCoinId}`
        ).then((data) => {
          setCoinDetails(data);
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [props.currentCoinId]);

  const onHidingCoinPopup = () => {
    props.setCurrentCoinId("");
    setCoinDetails(null);
    props.setIsCoinPopupVisible(false);
  };

  return (
    <div className="coin-popup-wrapper">
      {coinDetails && (
        <Popup
          title={`${coinDetails.name} (${coinDetails.symbol.toUpperCase()})`}
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
                src={coinDetails.image.large}
                className="mb-2"
                style={{ width: "50px", height: "50px" }}
                alt={coinDetails.name}
              />
            </div>
            <p className="h3 col-10">{`${
              coinDetails.name
            } (${coinDetails.symbol.toUpperCase()})`}</p>
            <p className="h5 col-5">Current Price:</p>
            <p className="h5 col-7">
              $ {numberWithCommas(coinDetails.market_data.current_price.cad)}
            </p>
            <p className="h5 col-5">24hr High:</p>
            <p className="h5 col-7 green">
              $ {numberWithCommas(coinDetails.market_data.high_24h.cad)}
            </p>
            <p className="h5 col-5">24hr Low:</p>
            <p className="h5 col-7 red">
              $ {numberWithCommas(coinDetails.market_data.low_24h.cad)}
            </p>
            <p className="h5 col-5">Trading Volume:</p>
            <p className="h5 col-7">
              $ {numberWithCommas(coinDetails.market_data.total_volume.cad)}
            </p>
            <p className="h5 col-5">Market Cap:</p>
            <p className="h5 col-7">
              $ {numberWithCommas(coinDetails.market_data.market_cap.cad)}
            </p>
            <p className="h5 col-5">All Time High:</p>
            <p className="h5 col-7 green">
              $ {numberWithCommas(coinDetails.market_data.ath.cad)}
            </p>
            <p className="h5 col-5">All Time Low:</p>
            <p className="h5 col-7 red">
              $ {numberWithCommas(coinDetails.market_data.atl.cad)}
            </p>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default CoinPopup;
