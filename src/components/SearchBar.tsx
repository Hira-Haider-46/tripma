import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const SearchBar: React.FC = () => {
  return (
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
  );
};

export default SearchBar;