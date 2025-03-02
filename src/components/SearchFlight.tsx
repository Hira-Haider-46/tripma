import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const SearchFlight: React.FC = () => {
  return (
    <div className="relative h-screen w-full pt-25 px-25">
      <div className="absolute inset-0 bg-[url('/map_bg.png')] bg-cover bg-center opacity-25"></div>
      <h1 className="relative text-8xl font-bold bg-[url('/text_bg.png')] bg-clip-text text-transparent bg-center bg-cover w-2/3 text-center h-60 mx-auto mb-8">
        It's more than just a trip
      </h1>
      <div className="relative bg-white w-full shadow-lg flex items-center">
        <div className="border border-gray-300 relative flex items-center w-64 rounded-tl-sm rounded-bl-sm text-gray-500">
          <FaPlaneDeparture className="absolute left-3 text-gray-500 w-10" />
          <input
            placeholder="From where?"
            className="pl-13 pr-4 py-3 w-full outline-none"
          />
        </div>
        <div className="border border-gray-300 relative flex items-center w-64 text-gray-500">
          <FaPlaneArrival className="absolute left-3 text-gray-500 w-10" />
          <input
            placeholder="To where?"
            className="pl-13 pr-4 py-3 w-full outline-none"
          />
        </div>
        <div className="border border-gray-300 relative flex items-center w-64 text-gray-500">
          <FaCalendarAlt className="absolute left-3 text-gray-500 w-10" />
          <input
            type="text"
            className="pl-13 pr-4 py-3 w-full outline-none"
            placeholder="Depart - Return"
          />
        </div>
        <div className="border border-gray-300 relative flex items-center w-64 text-gray-500">
          <FaUsers className="absolute left-3 text-gray-500 w-10" />
          <input
            placeholder="Passengers"
            className="pl-13 pr-4 py-3 w-full outline-none"
          />
        </div>
        <button className="border-1 border-indigo-500 w-32 bg-indigo-500 text-white rounded-sm p-3 cursor-pointer hover:scale-101">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFlight;