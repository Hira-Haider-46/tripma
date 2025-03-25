import { CreditCard, Apple, Bitcoin, Wallet } from "lucide-react";
import { SiPaypal } from "react-icons/si";
import SelectedFlightsInfo from "../components/SelectedFlightsInfo";

const PaymentMethod: React.FC = () => {
  return (
    <div className="px-15 py-10 w-full flex flex-col md:flex-row justify-between gap-5">
      <div className="w-full md:w-3/5 sm:p-3 md:pr-10">
        <h1 className="text-indigo-500 font-medium text-2xl mb-3">
          Payment method
        </h1>
        <p className="text-gray-400 text-base">
          Select a payment method below. Tripma processes your payment securely
          with end-to-end encryption.
        </p>
        <div className="w-full mx-auto sm:mx-0 border border-indigo-500 rounded-sm mt-5 flex flex-col sm:flex-row">
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200 text-xs md:text-base border-b border-indigo-500 sm:border-none">
            <CreditCard size={15}/>
            <span>Credit Card</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200 text-xs md:text-base border-b border-indigo-500 sm:border-none">
            <Wallet size={15} />
            <span>Google Pay</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200 text-xs md:text-base border-b border-indigo-500 sm:border-none">
            <Apple size={15} />
            <span>Apple Pay</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200 text-xs md:text-base border-b border-indigo-500 sm:border-none">
            <SiPaypal size={15} />
            <span>PayPal</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200 text-xs md:text-base">
            <Bitcoin size={15} />
            <span>Crypto</span>
          </div>
        </div>
        <form className="text-gray-500 w-full">
          <h2 className="font-medium text-lg mt-7">
            Credit card details
          </h2>
          <div className="flex items-center mt-6 mb-7">
            <input
              type="checkbox"
              name="chkbox"
              id="chkbox"
              className="mr-2 cursor-pointer h-4 w-4"
            />
            <label htmlFor="chkbox" className="cursor-pointer">
              Billing address is same as Passenger 1
            </label>
          </div>
          <div className="flex flex-col gap-5 w-full sm:w-3/5">
            <input
              type="text"
              placeholder="Name on card"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <input
              type="text"
              placeholder="Card number"
              className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
            />
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Expiration date"
                  className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
                />
                <p className="text-xs mt-1 text-gray-500">MM/YY</p>
              </div>
              <input
                type="text"
                placeholder="CCV"
                className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none max-h-11"
              />
            </div>
          </div>
          <h2 className="text-gray-500 font-medium text-lg mt-6 mb-3">
            Create an account
          </h2>
          <p className="text-gray-400 text-base">
            Tripma is free to use as a guest, but if you create an account
            today, you can save and view flights, manage your trips, earn
            rewards, and more.
          </p>
          <div className="flex items-center mt-6 mb-7">
            <input
              type="checkbox"
              name="chkbox2"
              id="chkbox2"
              className="mr-2 cursor-pointer h-4 w-4"
            />
            <label htmlFor="chkbox2" className="cursor-pointer">
              Save card and create account for later
            </label>
          </div>
          <div className="w-full sm:w-3/5">
            <div className="flex flex-col gap-5 my-6">
              <input
                type="text"
                placeholder="Email address or phone number"
                className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-400 px-3 py-2 rounded-sm outline-none"
              />
            </div>
            <div className="relative flex py-3 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="flex items-center justify-center w-full border border-gray-300 py-2.5 rounded-sm cursor-pointer hover:scale-101">
                <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <button className="flex items-center justify-center w-full border border-gray-300 py-2.5 rounded-sm cursor-pointer hover:scale-101">
                <img src="/apple.png" alt="Apple" className="w-5 h-5 mr-2" />
                Continue with Apple
              </button>
              <button className="flex items-center justify-center w-full border border-gray-300 py-2.5 rounded-sm cursor-pointer hover:scale-101">
                <img src="/fb.png" alt="Facebook" className="w-5 h-5 mr-2" />
                Continue with Facebook
              </button>
            </div>
          </div>
          <h2 className="text-gray-500 font-medium text-lg mb-4 mt-8">
            Cancellation policy
          </h2>
          <p className="text-gray-400 text-base">
            This flight has a flexible cancellation policy. If you cancel or
            change your flight up to 30 days before the departure date, you are
            eligible for a free refund. All flights booked on Tripma are backed
            by our satisfaction guarantee, however cancellation policies vary by
            airline. See the{" "}
            <span className="text-indigo-500 cursor-pointer">
              full cancellation policy
            </span>{" "}
            for this flight.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-3/5 items-center my-10">
            <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2">
              Back to seat select
            </button>
            <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2">
              Confirm and pay
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-2/5 md:pt-30 flex flex-col items-center sm:items-end">
        <SelectedFlightsInfo />
        <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2 lg:w-1/3 my-12 md:mr-6">
          Confirm and Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;