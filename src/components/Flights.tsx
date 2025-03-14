import flight_logo from "../assets/flight_logo.png";

const Flights: React.FC = () => {
  return (
    <>
      <div className="text-gray-500 mt-8">
        <p className="font-semibold">
          Choose a <span className="text-indigo-500">departing</span> flight
        </p>
        <div className="border border-gray-300 pb-4 px-3 my-4 rounded-md max-h-[450px] overflow-y-auto pt-2">
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
                  className="w-15 h-auto"
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
      <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 float-right mt-5 mb-7">
        Show all flights
      </button>
    </>
  );
};

export default Flights;