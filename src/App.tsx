import Navbar from "./components/Navbar";
import PassengerInfo from "./pages/PassengerInfo";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <PassengerInfo />
      <Footer />
    </>
  );
};

export default App;