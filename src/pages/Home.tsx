import Comments from "../components/Comments";
import FlightDeals from "../components/FlightDeals";
import SearchFlight from "../components/SearchFlight";

const Home: React.FC = () => {
  return (
    <>
      <SearchFlight />
      <FlightDeals />
      <Comments />
    </>
  );
};

export default Home;