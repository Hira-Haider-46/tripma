import { FaArrowRight } from "react-icons/fa";
import card_1 from "../assets/card_1.png";
import card_2 from "../assets/card_2.png";
import card_3 from "../assets/card_3.png";

const FlightDeals: React.FC = () => {
  return (
    <div className="px-6 md:px-10 py-6 text-gray-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="font-semibold text-2xl mb-4 md:mb-0">
          Find your next adventure with these{" "}
          <span className="text-indigo-500">flight deals</span>
        </h1>
        <p className="flex items-center gap-2 text-lg cursor-pointer text-gray-400 hover:text-indigo-500 transition">
          All <FaArrowRight />
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: card_1, place: "The Bund", location: "Shanghai", price: "$598", desc: "China's most international city" },
          { img: card_2, place: "Sydney Opera House", location: "Sydney", price: "$981", desc: "Take a stroll along the famous harbor" },
          { img: card_3, place: "Kōdaiji Temple", location: "Kyoto", price: "$633", desc: "Step back in time in the Gion district" }
        ].map((deal, index) => (
          <div 
            key={index} 
            className="rounded-xl shadow-lg cursor-pointer hover:scale-101 transition-transform duration-300 ease-in-out w-[80%] sm:w-[85%] lg:w-[95%] mx-auto"
          >
            <img src={deal.img} alt={deal.place} className="rounded-t-xl w-full h-48 object-cover xl:h-auto" />
            <div className="flex justify-between items-center px-4 pt-4 font-semibold">
              <p>{deal.place}, <span className="text-indigo-500">{deal.location}</span></p>
              <p>{deal.price}</p>
            </div>
            <p className="ml-4 mb-5 mt-1 text-sm">{deal.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightDeals;