import { FaArrowRight } from "react-icons/fa";
import card_1 from "../assets/card_1.png";
import card_2 from "../assets/card_2.png";
import card_3 from "../assets/card_3.png";
import card_4 from "../assets/card_7.png";
import card_5 from "../assets/card_4.png";
import card_6 from "../assets/card_5.png";
import card_7 from "../assets/card_6.png";

const FlightDeals: React.FC = () => {
  return (
    <div className="px-6 md:px-10 py-6 text-gray-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="font-semibold text-2xl mb-4 md:mb-0">
          Find your next adventure with these{" "}
          <span className="text-indigo-500">flight deals</span>
        </h1>
        <p className="flex items-center gap-2 text-lg cursor-pointer text-gray-400">
          All <FaArrowRight />
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            img: card_1,
            place: "The Bund",
            location: "Shanghai",
            price: "$598",
            desc: "China's most international city",
          },
          {
            img: card_2,
            place: "Sydney Opera House",
            location: "Sydney",
            price: "$981",
            desc: "Take a stroll along the famous harbor",
          },
          {
            img: card_3,
            place: "Kōdaiji Temple",
            location: "Kyoto",
            price: "$633",
            desc: "Step back in time in the Gion district",
          },
        ].map((deal, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg cursor-pointer hover:scale-99 duration-500 w-[80%] sm:w-[85%] lg:w-[95%] mx-auto"
          >
            <img
              src={deal.img}
              alt={deal.place}
              className="rounded-t-xl w-full h-48 object-cover xl:h-auto"
            />
            <div className="flex justify-between items-center px-4 pt-4 font-semibold">
              <p>
                {deal.place},{" "}
                <span className="text-indigo-500">{deal.location}</span>
              </p>
              <p>{deal.price}</p>
            </div>
            <p className="ml-4 mb-5 mt-1 text-sm">{deal.desc}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl shadow-lg cursor-pointer hover:scale-99 duration-500 w-[80%] mx-auto md:w-full my-10 pb-4.5">
        <img
          src={card_4}
          alt='card_4'
          className="rounded-t-xl w-full h-48 object-cover xl:h-auto"
        />
        <div className="flex justify-between items-center px-4 pt-4 font-semibold">
          <p>
          Tsavo East National Park, <span className="text-indigo-500">Kenya</span>
          </p>
          <p>$1,248</p>
        </div>
        <p className="ml-4 mt-1 text-sm">Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="font-semibold text-2xl mb-4 md:mb-0">
            Explore unique{" "}
              <span className="text-cyan-400">places to stay</span>
            </h1>
            <p className="flex items-center gap-2 text-lg cursor-pointer text-gray-400">
              All <FaArrowRight />
            </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            img: card_5,
            place: "Stay among the atolls in",
            location: "Maldives",
            desc: "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
          },
          {
            img: card_7,
            place: "Experience the Ourika Valley in",
            location: "Morocco",
            desc: "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
          },
          {
            img: card_6,
            place: "Live traditionally in",
            location: "Mongolia",
            desc: "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
          },
        ].map((deal, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg cursor-pointer hover:scale-99 duration-500 w-[80%] sm:w-[85%] lg:w-[95%] mx-auto"
          >
            <img
              src={deal.img}
              alt={deal.place}
              className="rounded-t-xl w-full h-48 object-cover xl:h-auto"
            />
            <div className="px-5 pt-4">
              <p className="font-semibold">
                {deal.place},{" "}
                <span className="text-cyan-400">{deal.location}</span>
              </p>
              <p className="mb-5 mt-1 text-sm">{deal.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="block text-white bg-indigo-500 px-6 py-3 rounded-md cursor-pointer duration-300 hover:scale-101 text-center w-1/2 md:w-1/3 lg:w-1/5 mx-auto mt-10 mb-5">Explore more stays</button>
    </div>
  );
};

export default FlightDeals;