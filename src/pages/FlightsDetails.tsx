import SearchBar from "../components/SearchBar";
import Flights from "../components/Flights";
// import PriceGrid from "./PriceGrid";
// import PriceGraph from "./PriceGraph";
import SelectedFlightsInfo from "../components/SelectedFlightsInfo";
import map from "../assets/map.png";
import PlaceCardsTemplate_1 from "../components/PlaceCardsTemplate_1";
import PlaceCardsTemplate_2 from "../components/PlaceCardsTemplate_2";

const FlightsDetails: React.FC = () => {
  return (
    <>
      <div className="p-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5">
          <SearchBar />
          <div className="my-5 text-sm w-[80%] text-gray-700 flex flex-wrap gap-4 sm:grid sm:grid-cols-2 md:flex md:flex-row lg:flex-nowrap">
            {["Max Price", "Shops", "Times", "Airlines", "Seat class"].map(
              (label, index) => (
                <div
                  key={index}
                  className="w-full w-[48%] md:w-[18.5%] border border-gray-300 text-center py-2 rounded-sm"
                >
                  <select className="border-none outline-none w-[85%] bg-transparent">
                    <option value="">{label}</option>
                  </select>
                </div>
              )
            )}
          </div>
          <Flights />
          <img src={map} alt="map" className="hidden md:block w-full" />
        </div>
        <div className="lg:w-2/5 mt-10 lg:mt-0">
          <div className="lg:pl-15 lg:mt-33 text-gray-500 flex flex-col items-end">
            <SelectedFlightsInfo />
            {/* <PriceGrid /> */}
          </div>
          {/* <PriceGraph /> */}
        </div>
      </div>
      <PlaceCardsTemplate_1 />
      <PlaceCardsTemplate_2 />
    </>
  );
};

export default FlightsDetails;