import Navbar from "./components/Navbar";
import SearchFlight from "./components/SearchFlight";
import FlightDeals from "./components/FlightDeals";
import Comments from "./components/Comments";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchFlight />
      <FlightDeals />
      <Comments />
      <Footer />
    </>
  );
};

export default App;