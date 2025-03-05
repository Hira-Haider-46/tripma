import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUsers } from "react-icons/fa";
import flight_logo from "../assets/flight_logo.png";

const FlightsDetails: React.FC = () => {
  return (
    <div className="p-10 flex flex-col lg:flex-row">
      <div className="w-full lg:w-3/5">
        <div className="w-full mx-auto flex flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-0 text-gray-500 lg:shadow-xs text-sm">
          <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-3 py-2.5 lg:rounded-tl-sm lg:rounded-bl-sm bg-white rounded-sm lg:rounded-none">
            <FaPlaneDeparture className="absolute left-2.75 w-3.5 h-3.5" />
            <input
              placeholder="From where?"
              className="pl-7 pr-4 w-full outline-none"
            />
          </div>
          <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-3 py-2.5 bg-white rounded-sm lg:rounded-none">
            <FaPlaneArrival className="absolute left-2.75 w-3.5 h-3.5" />
            <input
              placeholder="To where?"
              className="pl-7 pr-4 w-full outline-none"
            />
          </div>
          <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-3 py-2.5 bg-white rounded-sm lg:rounded-none">
            <FaCalendarAlt className="absolute left-2.75 w-3.5 h-3.5" />
            <input
              type="text"
              placeholder="Depart - Return"
              className="pl-7 pr-4 w-full outline-none"
            />
          </div>
          <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-3 py-2.5 bg-white rounded-sm lg:rounded-none">
            <FaUsers className="absolute left-2.75 w-3.5 h-3.5" />
            <input
              placeholder="Passengers"
              className="pl-7 pr-4 w-full outline-none"
            />
          </div>
          <button className="border-1 border-indigo-500 w-full lg:w-32 bg-indigo-500 text-white rounded-sm px-6 py-2.5 cursor-pointer hover:scale-101">
            Search
          </button>
        </div>
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
        <div className="text-gray-500 mt-8">
          <p className="font-semibold">
            Choose a <span className="text-indigo-500">departing</span> flight
          </p>
          <div className="border border-gray-300 pb-4 px-3 my-4 rounded-md max-h-[400px] overflow-y-auto pt-2">
            {[
              {
                logo: flight_logo,
                duration: "16h 45m",
                airline: "Hawaiian Airlines",
                time: "7:00AM - 4:15PM",
                stops: "1 stop",
                layover: "2h 45m in HNL",
                price: "$624",
                tripType: "round trip",
              },
              {
                logo: flight_logo,
                duration: "16h 45m",
                airline: "Hawaiian Airlines",
                time: "7:00AM - 4:15PM",
                stops: "1 stop",
                layover: "2h 45m in HNL",
                price: "$624",
                tripType: "round trip",
              },
              {
                logo: flight_logo,
                duration: "16h 45m",
                airline: "Hawaiian Airlines",
                time: "7:00AM - 4:15PM",
                stops: "1 stop",
                layover: "2h 45m in HNL",
                price: "$624",
                tripType: "round trip",
              },
              {
                logo: flight_logo,
                duration: "16h 45m",
                airline: "Hawaiian Airlines",
                time: "7:00AM - 4:15PM",
                stops: "1 stop",
                layover: "2h 45m in HNL",
                price: "$624",
                tripType: "round trip",
              },
              {
                logo: flight_logo,
                duration: "16h 45m",
                airline: "Hawaiian Airlines",
                time: "7:00AM - 4:15PM",
                stops: "1 stop",
                layover: "2h 45m in HNL",
                price: "$624",
                tripType: "round trip",
              },
              {
                logo: flight_logo,
                duration: "14h 30m",
                airline: "American Airlines",
                time: "8:30AM - 10:00PM",
                stops: "Non-stop",
                layover: "-",
                price: "$720",
                tripType: "round trip",
              },
            ].map((flight, index) => (
              <div
                key={index}
                className="flex flex-wrap lg:flex-row border-b border-gray-300 cursor-pointer hover:bg-gray-100 duration-300 transition-all px-3 pb-3 pt-2"
              >
                <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[8%] p-3 flex items-center">
                  <img
                    src={flight.logo}
                    alt="flight_logo"
                    className="w-10 h-10"
                  />
                </div>
                <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[23%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-left">
                  <p className="text-gray-700">{flight.duration}</p>
                  <p className="text-gray-500 text-sm">{flight.airline}</p>
                </div>
                <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[23%] text-gray-700 px-3 pb-3 pt-2 text-center lg:text-left">
                  <p>{flight.time}</p>
                </div>
                <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[23%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-right">
                  <p className="text-gray-700">{flight.stops}</p>
                  <p className="text-gray-500 text-sm">{flight.layover}</p>
                </div>
                <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[23%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-right">
                  <p className="text-gray-700">{flight.price}</p>
                  <p className="text-gray-500 text-sm">{flight.tripType}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsDetails;