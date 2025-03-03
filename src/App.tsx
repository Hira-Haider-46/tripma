import Navbar from "./components/Navbar";
import SearchFlight from "./components/SearchFlight";
import SignIn from "./components/SignUp";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchFlight />
      <SignIn />
    </>
  );
};

export default App;
