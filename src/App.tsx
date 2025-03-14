import Navbar from "./components/Navbar";
import FlightsDetails from "./pages/FlightsDetails";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <FlightsDetails />
      <Footer />
    </>
  );
};

export default App;