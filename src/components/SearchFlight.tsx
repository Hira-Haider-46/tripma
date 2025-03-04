import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUsers } from "react-icons/fa";

const SearchFlight: React.FC = () => {
  return (
    <div className="relative lg:h-screen w-full px-6 pt-16 mb-15 lg:mb-0">
      <div className="absolute inset-0 bg-[url('/map_bg.png')] bg-cover bg-center opacity-25"></div>
      <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold bg-[url('/text_bg.png')] bg-clip-text text-transparent bg-center bg-cover w-4/5 md:w-2/4 text-center mx-auto mb-10 lg:h-52">
        It's more than just a trip
      </h1>
      <div className="relative w-full max-w-6xl mx-auto flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-0 text-gray-500 lg:shadow-lg">
        <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-4 py-3 lg:rounded-tl-sm lg:rounded-bl-sm bg-white rounded-sm lg:rounded-none">
          <FaPlaneDeparture className="absolute left-3 w-5 h-5" />
          <input
            placeholder="From where?"
            className="pl-7 pr-4 w-full outline-none"
          />
        </div>
        <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-4 py-3 bg-white rounded-sm lg:rounded-none">
          <FaPlaneArrival className="absolute left-3 w-5 h-5" />
          <input
            placeholder="To where?"
            className="pl-7 pr-4 w-full outline-none"
          />
        </div>
        <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-4 py-3 bg-white rounded-sm lg:rounded-none">
          <FaCalendarAlt className="absolute left-3 w-5 h-5" />
          <input
            type="text"
            placeholder="Depart - Return"
            className="pl-7 pr-4 w-full outline-none"
          />
        </div>
        <div className="relative flex items-center w-full lg:w-64 border border-gray-300 px-4 py-3 bg-white rounded-sm lg:rounded-none">
          <FaUsers className="absolute left-3 w-5 h-5" />
          <input
            placeholder="Passengers"
            className="pl-7 pr-4 w-full outline-none"
          />
        </div>
        <button className="border-1 border-indigo-500 w-full lg:w-32 bg-indigo-500 text-white rounded-sm px-6 py-3 cursor-pointer hover:scale-101">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFlight;