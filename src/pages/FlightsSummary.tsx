import { X } from "lucide-react";
import flight_logo from "../assets/flight_logo.png";
import cc from "../assets/cc.png";
import map from "../assets/flight_map_2.png";
import card from "../assets/card_2.png";

const FlightsSummary: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-[64%] px-10 md:px-20 py-10">
        <div className="border border-[#007B65] flex flex-row justify-between items-center p-5 bg-[#EAFFFB] rounded-lg mb-8">
          <p className="text-[#007B65] text-sm">
            Your flight has been booked successfully! Your confirmation number
            is #381029404387
          </p>
          <span className="text-gray-400 cursor-pointer">
            <X size={18} />
          </span>
        </div>
        <h1 className="text-indigo-500 font-medium text-2xl mb-3">
          Bon voyage, Sophia!
        </h1>
        <h2 className="font-medium text-lg text-gray-500">
          Confirmation number: #381029404387
        </h2>
        <p className="text-gray-400 my-2">
          Thank you for booking your travel with Tripma! Below is a summary of
          your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your
          booking confirmation to your email address. You can also find this
          page again in{" "}
          <span className="text-indigo-500 cursor-pointer">My trips.</span>
        </p>
        <div>
          <h1 className="text-gray-500 font-medium text-2xl mt-8 mb-5">
            Flight summary
          </h1>
          <h2 className="font-medium text-lg text-gray-500 my-3">
            Departing February 25th, 2021
          </h2>
          <div className="flex flex-wrap lg:flex-row border border-gray-300 rounded-lg px-3 py-2 w-full mt-5">
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[8%] px-3 pb-3 pt-2 flex items-center">
              <img
                src={flight_logo}
                alt="flight_logo"
                className="w-15 h-auto"
              />
            </div>
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[23%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-left">
              <p className="text-gray-700">16h 45m</p>
              <p className="text-gray-500 text-sm">Hawaiian Airlines</p>
            </div>
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[24%] text-gray-700 px-3 pb-3 pt-2 text-center lg:text-left flex flex-col justify-center">
              <p>7:00AM - 4:15PM</p>
              <p className="text-gray-500 text-sm">value</p>
            </div>
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 sm:border-none md:w-1/5 lg:w-[23%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-right">
              <p className="text-gray-700">1 stop</p>
              <p className="text-gray-500 text-sm">2h 45m in HNL</p>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 lg:w-[22%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-right">
              <p className="text-gray-700">$624</p>
              <p className="text-gray-500 text-sm">round trip</p>
            </div>
          </div>
          <p className="text-gray-400 my-3">
            Seat 9F (economy, window), 1 checked bag
          </p>
          <h2 className="font-medium text-lg text-gray-500 mt-8 mb-3">
            Arriving March 21st, 2021
          </h2>
          <div className="flex flex-wrap lg:flex-row border border-gray-300 rounded-lg px-3 py-2 w-full mt-5">
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[8%] px-3 pb-3 pt-2 flex items-center">
              <img
                src={flight_logo}
                alt="flight_logo"
                className="w-15 h-auto"
              />
            </div>
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[23%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-left">
              <p className="text-gray-700">16h 45m</p>
              <p className="text-gray-500 text-sm">Hawaiian Airlines</p>
            </div>
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 md:border-none md:w-1/5 lg:w-[24%] text-gray-700 px-3 pb-3 pt-2 text-center lg:text-left flex flex-col justify-center">
              <p>7:00AM - 4:15PM</p>
              <p className="text-gray-500 text-sm">value</p>
            </div>
            <div className="w-1/2 sm:w-1/3 border-b border-gray-200 sm:border-none md:w-1/5 lg:w-[23%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-right">
              <p className="text-gray-700">1 stop</p>
              <p className="text-gray-500 text-sm">2h 45m in HNL</p>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 lg:w-[22%] flex flex-col justify-center px-3 pb-3 pt-2 text-center lg:text-right">
              <p className="text-gray-700">$624</p>
              <p className="text-gray-500 text-sm">round trip</p>
            </div>
          </div>
          <p className="text-gray-400 my-3">
            Seat 4F (business, window), 1 checked bag
          </p>
        </div>
        <div className="mt-8 mb-5">
          <h1 className="text-gray-500 font-medium text-2xl mb-3">
            Price breakdown
          </h1>
          <div className="text-gray-500 bg-white flex flex-col w-full md:w-3/5 text-base/6 md:text-base/9">
            <div className="flex flex-row w-full">
              <p className="w-1/2">Departing Flight</p>
              <p className="w-1/2 text-right">$199</p>
            </div>
            <div className="flex flex-row w-full">
              <p className="w-1/2">Arriving Flight</p>
              <p className="w-1/2 text-right">$503</p>
            </div>
            <div className="flex flex-row w-full">
              <p className="w-1/2">Baggage fees</p>
              <p className="w-1/2 text-right">$121</p>
            </div>
            <div className="flex flex-row w-full">
              <p className="w-1/2">Seat upgrade (business)</p>
              <p className="w-1/2 text-right">$624</p>
            </div>
            <div className="flex flex-row w-full">
              <p className="w-1/2">Subtotal</p>
              <p className="w-1/2 text-right">$624</p>
            </div>
            <div className="flex flex-row w-full">
              <p className="w-1/2">Taxes (9.4%)</p>
              <p className="w-1/2 text-right">$624</p>
            </div>
            <div className="flex flex-row w-full text-gray-700 font-medium border-t border-b border-gray-300 mt-2 py-1.5">
              <p className="w-1/2">Amount paid</p>
              <p className="w-1/2 text-right">$624</p>
            </div>
          </div>
        </div>
        <div className="my-8">
          <h1 className="text-gray-500 font-medium text-2xl mb-7">
            Payment method
          </h1>
          <img src={cc} alt="credit_card" />
        </div>
        <div className="my-8">
          <h1 className="text-gray-500 font-medium text-2xl">
            Share your travel itinerary
          </h1>
          <p className="text-gray-400 my-2">
            You can email your itinerary to anyone by entering their email
            address here.
          </p>
          <div className="w-full sm:w-4/6">
            <div className="flex flex-col gap-5 my-6 text-gray-500">
              <input
                type="text"
                placeholder="Email address"
                className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 w-full md:w-3/5 items-center my-10">
          <button className="block hover:text-indigo-500 hover:bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 bg-indigo-500 text-white border border-indigo-500 text-center w-full sm:w-1/2">
            Email itinerary
          </button>
          <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:border hover:border-indigo-500 text-center w-full sm:w-1/2">
            Add another
          </button>
        </div>
        <div className="my-8">
          <h1 className="text-gray-500 font-medium text-2xl my-5">
            Flight Route
          </h1>
          <img src={map} alt="map" className="w-full" />
        </div>
      </div>
      <div className="w-full lg:w-[36%] py-8 px-10 md:pl-10 lg:pr-15">
        <h1 className="text-gray-500 font-medium text-2xl mb-3">
          Shop <span className="text-indigo-500">hotels</span>
        </h1>
        <p className="text-gray-400">
          Tripma partners with thousands of hotels to get you the best deal.
          Save up to 30% when you add a hotel to your trip.
        </p>
        <div className="mt-4 flex flex-col">
          <div className="rounded-xl shadow-lg cursor-pointer hover:scale-99 duration-300 w-[96%] pb-3 my-3.5">
            <img
              src={card}
              alt="card"
              className="rounded-t-xl w-full h-45 sm:h-65 md:h-80 lg:h-60 object-cover"
            />
            <div className="flex justify-between items-center px-4 pt-4 font-semibold text-gray-500">
              <p>Ryokan Japan</p>
              <p>$439</p>
            </div>
            <p className="mt-1 text-sm text-gray-400 px-4">
              Enjoy views of the garden from your room
            </p>
          </div>
          <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/2 mx-auto my-5">
            Shop all hotels
          </button>
        </div>
        <h1 className="text-gray-500 font-medium text-2xl mt-6 mb-3">
          Find unique <span className="text-indigo-500">experiences</span>
        </h1>
        <p className="text-gray-400">
          Find events and authentic cultrual experiences available exclusively
          to Tripma users.
        </p>
        <div className="mt-4 flex flex-col">
          <div className="rounded-xl shadow-lg cursor-pointer hover:scale-99 duration-300 w-[96%] pb-3 my-3.5">
            <img
              src={card}
              alt="card"
              className="rounded-t-xl w-full h-45 sm:h-65 md:h-80 lg:h-60 object-cover"
            />
            <div className="flex justify-between items-center px-4 pt-4 font-semibold text-gray-500">
              <p>Ryokan Japan</p>
              <p>$439</p>
            </div>
            <p className="mt-1 text-sm text-gray-400 px-4">
              Enjoy views of the garden from your room
            </p>
          </div>
          <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/2 mx-auto my-5">
            View all experiences
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightsSummary;