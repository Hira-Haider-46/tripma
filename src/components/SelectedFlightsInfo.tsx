import flight_logo from "../assets/flight_logo.png";

const SelectedFlightsInfo: React.FC = () => {
  return (
    <>
      <div className="border rounded-lg border-gray-300 bg-white px-2 sm:px-5 mb-5 w-full lg:w-[95%] lg:mx-auto">
        <div className="w-full lg:w-[95%] lg:mx-auto py-3 flex items-center flex-row justify-between text-sm sm:text-base border-b border-gray-300">
          <div className="w-[15%] lg:w-[22%] sm:flex justify-center lg:justify-start">
            <img
              src={flight_logo}
              alt="flight_logo"
              className="w-8 sm:w-12 h-auto"
            />
          </div>
          <div className="w-[41%] lg:w-[38%] flex flex-col justify-center text-left">
            <p className="text-gray-800">Hawaiian Airlines</p>
            <p className="text-gray-500">FIG4312</p>
          </div>
          <div className="w-[41%] lg:w-[38%] flex flex-col justify-center text-right">
            <p className="text-gray-800">16h 45m (+1d)</p>
            <p className="text-gray-800">7:00 AM - 4:15 PM</p>
            <p className="text-gray-500">2h 45m in HNL</p>
          </div>
        </div>
      </div>
      <div className="text-gray-900 bg-white flex flex-col items-end w-full text-right text-sm/4 md:text-base/6 md:pr-5">
        <div className="flex flex-row w-full sm:w-1/2">
          <p className="w-2/3">Seat upgrade</p>
          <p className="w-1/3">$199</p>
        </div>
        <div className="flex flex-row w-full sm:w-1/2">
          <p className="w-2/3">Subtotal</p>
          <p className="w-1/3">$503</p>
        </div>
        <div className="flex flex-row w-full sm:w-1/2">
          <p className="w-2/3">Taxes and Fees</p>
          <p className="w-1/3">$121</p>
        </div>
        <div className="flex flex-row w-full sm:w-1/2">
          <p className="w-2/3">Total</p>
          <p className="w-1/3">$624</p>
        </div>
      </div>
      {/* <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2 md:w-1/3 mt-8 mb-7 mr-5">
        Save and Close
      </button> */}
      {/* <button className="block hover:text-indigo-500 hover:bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 bg-indigo-500 text-white border border-indigo-500 text-center w-full sm:w-1/2 mt-8 mb-7 md:mr-5">
        Passenger Information
      </button> */}
    </>
  );
};

export default SelectedFlightsInfo;