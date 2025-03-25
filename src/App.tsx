import Navbar from "./components/Navbar";
import FlightsSummary from "./pages/FlightsSummary";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <FlightsSummary />
      <Footer />
    </>
  );
};

export default App;