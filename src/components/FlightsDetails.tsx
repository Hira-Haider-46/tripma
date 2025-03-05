import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import flight_logo from "../assets/flight_logo.png";
import map from "../assets/map.png";
import buy from "../assets/buy.png";

interface PriceData {
  dates: string[];
  prices: {
    date: string;
    values: number[];
  }[];
}

interface ChartData {
  date: string;
  price: number;
}

const priceData: PriceData = {
  dates: ["2/12", "2/13", "2/14", "2/15", "2/16"],
  prices: [
    { date: "3/7", values: [837, 592, 592, 1308, 837] },
    { date: "3/8", values: [837, 592, 592, 1308, 837] },
    { date: "3/9", values: [624, 592, 592, 592, 592] },
    { date: "3/10", values: [1308, 624, 624, 837, 837] },
    { date: "3/11", values: [592, 624, 1308, 837, 624] },
  ],
};

const chartData: ChartData[] = [
  { date: "2/10", price: 700 },
  { date: "2/11", price: 800 },
  { date: "2/12", price: 950 },
  { date: "2/13", price: 870 },
  { date: "2/14", price: 620 },
  { date: "2/15", price: 750 },
  { date: "2/16", price: 690 },
];

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
        <img src={map} alt="map" className="hidden md:block" />
      </div>
      <div className="w-full lg:w-2/5 mt-10 lg:mt-0">
        <div className="lg:pl-15 lg:mt-33">
          <h2 className="text-base font-semibold text-gray-500 mb-4">
            Price grid <span className="text-gray-400">(flexible dates)</span>
          </h2>
          <div className="overflow-x-auto rounded-md border border-gray-300">
            <table className="w-full text-gray-500">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-r border-gray-300"></th>
                  {priceData.dates.map((date, index) => (
                    <th
                      key={index}
                      className={`px-4 py-2 border-b border-gray-300 ${
                        index === priceData.dates.length - 1 ? "" : "border-r"
                      }`}
                    >
                      {date}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {priceData.prices.map((row, rowIndex) => (
                  <tr key={rowIndex} className="text-center">
                    <td
                      className={`px-4 py-2 font-semibold border-r border-gray-300 ${
                        rowIndex === priceData.prices.length - 1
                          ? ""
                          : "border-b"
                      }`}
                    >
                      {row.date}
                    </td>
                    {row.values.map((price, colIndex) => (
                      <td
                        key={colIndex}
                        className={`px-4 py-2 ${
                          rowIndex === priceData.prices.length - 1
                            ? ""
                            : "border-b"
                        } ${
                          colIndex === row.values.length - 1 ? "" : "border-r"
                        } border-gray-300`}
                      >
                        ${price}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="lg:pl-15">
          <h2 className="text-base font-semibold text-gray-500 mt-8">
            Price history
          </h2>
          <div className="w-full overflow-x-auto">
            <div className="ml-[-5.5%] mt-4 min-w-[400px]">
              <ResponsiveContainer width="100%" height={230}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="1 1" />
                  <XAxis dataKey="date" fontSize={14} />
                  <YAxis fontSize={14} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#6366F1"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="lg:pl-16 pr-3">
            <div className="mt-6 mb-2 flex flex-row items-center gap-5 text-gray-500">
                <p className="font-medium text-lg">Price rating</p>
                <img src={buy} alt="buy" />
            </div>
            <p className="text-gray-500 my-2">We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.</p>
            <p className="text-gray-400">Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.</p>
        </div>
      </div>
    </div>
  );
};

export default FlightsDetails;