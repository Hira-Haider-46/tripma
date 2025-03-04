import Navbar from "./components/Navbar";
import SearchFlight from "./components/SearchFlight";
import Footer from "./components/Footer";
import Comments from "./components/Comments";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchFlight />
      <Comments />
      <Footer />
    </>
  );
};

export default App;