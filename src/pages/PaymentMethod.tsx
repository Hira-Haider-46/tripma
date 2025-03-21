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
        <div className="border border-indigo-500 rounded-sm mt-5 flex flex-wrap md:flex-nowrap">
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200">
            <CreditCard size={15} />
            <span>Credit Card</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200">
            <Wallet size={15} />
            <span>Google Pay</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200">
            <Apple size={15} />
            <span>Apple Pay</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200">
            <SiPaypal size={15} />
            <span>PayPal</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-2 p-3 text-center rounded-sm cursor-pointer text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200">
            <Bitcoin size={15} />
            <span>Crypto</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 md:pt-35 flex flex-col items-center sm:items-end justify-between">
        <SelectedFlightsInfo />
        <button className="block text-indigo-500 bg-white px-5 py-2.5 rounded-md cursor-pointer duration-300 hover:scale-101 hover:bg-indigo-500 hover:text-white border border-indigo-500 text-center w-full sm:w-1/2 lg:w-1/3 my-12 mr-6">
          Confirm and Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
