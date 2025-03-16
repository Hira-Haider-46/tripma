import SelectedFlightsInfo from "../components/SelectedFlightsInfo";
import bag from "../assets/bag.png";

const PassengerInfo: React.FC = () => {
  return (
    <div className="px-15 py-10 w-full flex flex-col md:flex-row gap-5">
      <div className="w-full md:w-3/5 sm:p-3">
        <h1 className="text-indigo-500 font-medium text-2xl mb-3">
          Passenger Information
        </h1>
        <p className="text-gray-400 text-base">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </p>
        <form className="text-gray-500 w-full md:w-[86%]">
          <h2 className="text-gray-500 font-medium text-lg my-5">
            Passenger 1 (Adult)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <input
              type="text"
              placeholder="First name*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Middle"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Last name*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Suffix"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none max-h-11"
            />
            <div>
              <input
                type="text"
                placeholder="Date of birth*"
                className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
              />
              <p className="text-xs mt-1 text-gray-500">MM/DD/YY</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
            <input
              type="text"
              placeholder="Email address*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Phone number*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Redress number"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Known traveller number*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
          </div>
          <h2 className="text-gray-500 font-medium text-lg my-4">
            Emergency contact information
          </h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="chkbox"
              id="chkbox"
              className="mr-2 cursor-pointer h-4 w-4"
            />
            <label htmlFor="chkbox" className="cursor-pointer">
              Same as Passenger 1
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
            <input
              type="text"
              placeholder="Email address*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Phone number*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Redress number"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Known traveller number*"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
          </div>
          <h2 className="text-gray-500 font-medium text-lg mb-4 mt-8">
            Bag information
          </h2>
          <p className="text-gray-400 text-base">
            Each passenger is allowed one free carry-on bag and one personal
            item. First checked bag for each passenger is also free. Second bag
            check fees are waived for loyalty program members. See the{" "}
            <span className="text-indigo-500 cursor-pointer">
              full bag policy.
            </span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6 text-lg">
            <div>
              <p className="font-medium text-gray-400 mt-2 mb-3">Passenger 1</p>
              <p>First Last</p>
            </div>
            <div>
              <p className="font-medium text-gray-400 mt-2 mb-3">
                Checked bags
              </p>
              <div className="flex flex-row items-center justify-between w-30">
                <button className="text-2xl outline-none border-none px-2.5 cursor-pointer rounded-sm bg-gray-100 text-indigo-600">
                  –
                </button>
                <p>1</p>
                <button className="text-2xl outline-none border-none px-2.5 cursor-pointer rounded-sm bg-gray-100 text-indigo-600">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-4/5 items-center mt-10">
            <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2 lg:w-1/3">
              Save and Close
            </button>
            <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2 lg:w-1/3">
              Select seats
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-2/5 md:pt-42 flex flex-col items-center sm:items-end justify-between">
        <SelectedFlightsInfo />
        <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2 lg:w-1/3 my-12">
          Select seats
        </button>
        <img src={bag} alt="bag" className="mt-10 mb-5" />
      </div>
    </div>
  );
};

export default PassengerInfo;