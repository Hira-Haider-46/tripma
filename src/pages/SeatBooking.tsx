import { FaArrowRight } from "react-icons/fa6";
import b_seats from "../assets/b_seats.png";
import e_seats from "../assets/e_seats.png";
import circle from "../assets/circle.png";
import tick from "../assets/tick.png";

const SeatBooking: React.FC = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-[45%]"></div>
        <div className="w-full md:w-[55%]">
          <div className="bg-[#27273f] text-white flex flex-col text-center md:text-left md:flex-row md:items-center overflow-hidden">
            <div className="flex flex-row py-3 px-5 w-full md:w-2/4 items-center justify-between">
              <div className="w-[40%] pl-3">
                <p className="font-medium text-xl mb-1">SFO</p>
                <p className="text-sm text-gray-300">California, US</p>
              </div>
              <FaArrowRight className="w-[10%] text-white text-2xl" />
              <div className="w-[45%] sm:pl-6">
                <p className="font-medium text-xl mb-1">NRT</p>
                <p className="text-sm text-gray-300">Tokyo, Japan</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-5 py-4 bg-[#605dec]">
              <p className="font-semibold">Feb 25 | 7:00 AM</p>
              <p className="text-sm mt-1 text-gray-200">Departing</p>
            </div>
            <div className="w-full md:w-1/4 px-5 py-4">
              <p className="font-semibold">Mar 21 | 12:15 PM</p>
              <p className="text-sm mt-1 text-gray-400">Arriving</p>
            </div>
          </div>
          <div className="border-l border-b w-full flex flex-col lg:flex-row border-gray-300 text-gray-500 text-sm">
            <div className="w-full lg:w-1/2 p-5 text-center md:text-left">
              <img
                src={e_seats}
                alt="e_seats"
                className="mx-auto lg:mx-0 w-full max-w-xs"
              />
              <div className="px-5">
                <div className="flex flex-row justify-between items-center my-2.5 w-full lg:w-2/3">
                  <h2 className="text-lg font-medium">Economy</h2>
                  <p className="py-1 px-4 border text-white bg-indigo-500 rounded-md">
                    Selected
                  </p>
                </div>
                <p className="my-2 text-gray-400">
                  Rest and recharge during your flight with extended leg room,
                  personalized service, and a multi-course meal service.
                </p>
                <ul className="pl-2 my-3 leading-8">
                  <li className="flex items-center">
                    <img src={circle} alt="circle" className="h-2.5 mr-2.5" />
                    Built-in entertainment system
                  </li>
                  <li className="flex items-center">
                    <img src={circle} alt="circle" className="h-2.5 mr-2.5" />
                    Complimentary snacks and drinks
                  </li>
                  <li className="flex items-center">
                    <img src={circle} alt="circle" className="h-2.5 mr-2.5" />
                    One free carry-on and personal item
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-5 text-center md:text-left">
              <img
                src={b_seats}
                alt="b_seats"
                className="mx-auto lg:mx-0 w-full max-w-xs"
              />
              <div className="pl-5 pr-3">
                <div className="flex flex-row justify-between items-center my-2.5 w-full lg:w-[87%]">
                  <h2 className="text-lg font-medium">Business class</h2>
                  <p className="py-1 px-4 border text-white bg-[#6ad6c0] rounded-md">
                    Selected
                  </p>
                </div>
                <p className="my-2 text-gray-400">
                  Rest and recharge during your flight with extended leg room,
                  personalized service, and a multi-course meal service.
                </p>
                <ul className="pl-2 my-3 leading-8">
                  <li className="flex items-center">
                    <img src={tick} alt="tick" className="h-3 mr-2.5" />
                    Extended leg room
                  </li>
                  <li className="flex items-center">
                    <img src={tick} alt="tick" className="h-3 mr-2.5" />
                    First two checked bags free
                  </li>
                  <li className="flex items-center">
                    <img src={tick} alt="tick" className="h-3 mr-2.5" />
                    Priority boarding
                  </li>
                  <li className="flex items-center">
                    <img src={tick} alt="tick" className="h-3 mr-2.5" />
                    Personalized service
                  </li>
                  <li className="flex items-center">
                    <img src={tick} alt="tick" className="h-3 mr-2.5" />
                    Enhanced food and drink service
                  </li>
                  <li className="flex items-center">
                    <img src={tick} alt="tick" className="h-3 mr-2.5" />
                    Seats that recline 40% more than economy
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-l border-gray-300 flex flex-wrap lg:flex-row">
            <div className="w-1/2 lg:w-[25%] py-5 px-7 text-center lg:text-left">
              <p className="text-gray-400 text-sm">Passenger 1</p>
              <p className="text-gray-500 font-medium mt-1 text-lg">
                Sofia Knowles
              </p>
            </div>
            <div className="w-1/2 lg:w-[25%] py-5 px-7 text-center lg:text-left">
              <p className="text-gray-400 text-sm">Seat number</p>
              <p className="text-gray-500 font-medium mt-1 text-lg">9F</p>
            </div>
            <div className="w-full lg:w-[50%] flex-col flex sm:flex-row p-5 justify-between items-center">
              <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full md:w-[50%]">
                Save and close
              </button>
              <button className="block hover:text-indigo-500 hover:bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 bg-indigo-500 text-white border border-indigo-500 text-center w-full md:w-[45%] mt-5 sm:mt-0 sm:ml-5">
                Next Flight
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-[80%] sm:w-[65%] md:w-[55%] lg:w-[35%] bg-white border border-gray-300 rounded-xl shadow-lg p-7 text-center">
          <h2 className="text-xl font-semibold mb-3 text-left text-gray-500">Upgrade Seat</h2>
          <p className="text-gray-400 mb-5 text-left">
            Upgrade your seat for only <span className="font-semibold">$199</span> and enjoy 45% more legroom,
            plus seats that recline 40% more than economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button className="w-full sm:w-auto px-6 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white transition cursor-pointer">
              Cancel
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-indigo-500 text-white rounded-md border border-indigo-500 hover:bg-white hover:text-indigo-500 transition cursor-pointer">
              Upgrade for $199
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SeatBooking;