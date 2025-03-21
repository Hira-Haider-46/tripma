import Navbar from "./components/Navbar";
import PaymentMethod from "./pages/PaymentMethod";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <PaymentMethod />
      <Footer />
    </>
  );
};

export default App;