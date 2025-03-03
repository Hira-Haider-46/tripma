import Navbar from "./components/Navbar";
import SearchFlight from "./components/SearchFlight";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchFlight />
      <Footer />
    </>
  );
};

export default App;