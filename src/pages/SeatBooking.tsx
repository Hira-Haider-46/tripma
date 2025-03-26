import { FaArrowRight } from "react-icons/fa6";

const SeatBooking: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2"></div>
      <div className="w-full md:w-1/2">
        <div className="bg-[#27273f] text-white flex flex-col md:flex-row items-center">
          <div className="flex flex-row p-5 w-full md:w-2/4 items-center justify-between">
            <div className="w-[40%] pl-3">
              <p className="font-medium text-2xl mb-1">SFO</p>
              <p className="text-sm">California, US</p>
            </div>
            <FaArrowRight className="w-[10%] text-white text-2xl"/>
            <div className="w-[45%] pl-6">
              <p className="font-medium text-2xl mb-1">NRT</p>
              <p className="text-sm">Tokyo, Japan</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 px-5 py-6 bg-[#605dec]">
            <p>Feb 25 | 7:00AM</p>
            <p className="text-sm mt-1">Departing</p>
          </div>
          <div className="w-full md:w-1/4 px-5 py-6">
            <p>Mar 21 | 12:15PM</p>
            <p className="text-xs mt-1">Arriving</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatBooking;
