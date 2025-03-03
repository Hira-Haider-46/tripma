import { X } from "lucide-react";

interface SignUpProps {
  signUp: boolean;
  setSignUp: (value: boolean) => void;
}

const SignUp: React.FC<SignUpProps> = ({ signUp, setSignUp }) => {

  return (
    <div className={`${signUp ? "block" : "hidden"} fixed inset-5 md:inset-20 flex items-center justify-center z-50`}>
      <div className="relative w-full md:w-[75%] lg:w-[40%] py-6 px-8 bg-white rounded-md shadow-xl text-gray-500 border border-gray-300">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">Sign up for Tripma</h2>
          <button className="text-gray-400 cursor-pointer" onClick={() => setSignUp(false)}>
            <X size={24} />
          </button>
        </div>

        <p className="text-sm mt-2">
          Tripma is totally free to use. Sign up using your email or phone number below.
        </p>

        <div className="mt-4">
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full py-2 px-4 border border-gray-300 rounded-sm outline-none"
          />
        </div>
        <div className="mt-3">
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 px-4 border border-gray-300 rounded-sm outline-none"
          />
        </div>

        <div className="mt-4 flex items-center">
          <input type="checkbox" id="terms" className="mr-2 cursor-pointer" />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            I agree to the{" "}
            <span className="text-indigo-500">terms and conditions</span>
          </label>
        </div>
        <div className="mt-2 flex items-center">
          <input type="checkbox" id="alerts" className="mr-2 cursor-pointer" />
          <label htmlFor="alerts" className="text-gray-600 text-sm">
            Send me the latest deal alerts
          </label>
        </div>

        <button className="w-full bg-indigo-500 text-white font-semibold py-2.75 rounded-md mt-4 hover:scale-101 cursor-pointer">
          Create Account
        </button>

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
    </div>
  );
};

export default SignUp;