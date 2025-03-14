import {FaArrowRight} from "react-icons/fa";
import card_5 from "../assets/card_4.png";
import card_6 from "../assets/card_5.png";
import card_7 from "../assets/card_6.png";

const PlacesCardsTemplate_1: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-start md:items-center mb-8 px-12 text-gray-500">
        <h1 className="font-semibold text-base md:text-2xl mb-4 md:mb-0">
          Find <span className="text-indigo-500">places to stay</span> in Japan
        </h1>
        <p className="flex items-center gap-2 text-base md:text-lg cursor-pointer text-gray-400">
          All <FaArrowRight />
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 text-gray-500 mb-15">
        {[
          {
            img: card_5,
            place: "Hotel Kaneyamaen and Bessho SASA",
            desc: "Located at the base of Mount Fuji, Hotel Kaneyamaen is a traitional japanese ryokan with a modern twist. Enjoy a private onsen bath and a private multi-course kaiseki dinner.",
          },
          {
            img: card_7,
            place: "HOTEL THE FLAG 大阪市",
            desc: "Make a stop in Osaka and stay at HOTEL THE FLAG, just a few minutes walk to experience the food culture surrounding Dontonbori. Just one minute away is the Shinsaibashi shopping street.",
          },
          {
            img: card_6,
            place: "9 Hours Shinjuku",
            desc: "Experience a truly unique stay in an authentic Japanese capsule hotel. 9 Hours Shinjuku is minutes from one of Japan’s busiest train stations. Just take the NEX train from Narita airport!",
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
              <p className="font-semibold text-indigo-500">{deal.place}</p>
              <p className="mb-5 mt-1 text-sm">{deal.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlacesCardsTemplate_1;