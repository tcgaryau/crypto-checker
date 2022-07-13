import Marquee from "react-fast-marquee";
import NewsIcon from "../../Images/news-icon.png";

interface ITickerFeedProps {
  feed: any;
  getRss: () => Promise<void>;
}
const TickerFeed = (props: ITickerFeedProps) => {
  return (
    <>
      {props.feed && (
        <Marquee
          direction="left"
          speed={50}
          gradient={false}
          pauseOnHover={true}
          pauseOnClick={true}
          onCycleComplete={props.getRss}
        >
          {props.feed &&
            props.feed.map((items: any, index: number) => (
              <>
                <img src={NewsIcon} alt="" style={{ width: "45px" }}></img>
                <a
                  key={items.title}
                  id={index.toString()}
                  href={items.link || ""}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fs-4 text-warning text-decoration-none me-5"
                >
                  {items.title}
                </a>
              </>
            ))}
        </Marquee>
      )}
    </>
  );
};

export default TickerFeed;
