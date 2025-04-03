import { FaArrowRight } from "react-icons/fa6";
import b_seats from "../assets/b_seats.png";
import e_seats from "../assets/e_seats.png";
import circle from "../assets/circle.png";
import tick from "../assets/tick.png";

const SeatBooking: React.FC = () => {
  return (
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
        <div className="border-l border-b w-full flex flex-col md:flex-row border-gray-400 text-gray-500 text-sm">
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
                  <img src={circle} alt="circle" className="h-3 mr-2.5" />
                  Built-in entertainment system
                </li>
                <li className="flex items-center">
                  <img src={circle} alt="circle" className="h-3 mr-2.5" />
                  Complimentary snacks and drinks
                </li>
                <li className="flex items-center">
                  <img src={circle} alt="circle" className="h-3 mr-2.5" />
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
      </div>
    </div>
  );
};

export default SeatBooking;
