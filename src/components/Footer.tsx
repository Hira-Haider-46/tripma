import logo from "../assets/logo.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import apple from "../assets/app_store.png";
import google from "../assets/google_play.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full text-gray-500">
      <div className="border-b border-gray-300 flex flex-col lg:flex-row px-6 md:px-20 py-10 text-sm/8 space-y-6 md:space-y-0 text-center lg:text-left sm:text-sm/10">
        <div className="w-full lg:w-1/5 text-center">
          <img src={logo} alt="logo" className="cursor-pointer w-32 mx-auto md:mb-2 lg:mx-0" />
        </div>
        <div className="w-full lg:w-1/5">
          <h1 className="font-bold text-lg">About</h1>
          <ul>
            <li>About Tripma</li>
            <li>How it works</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Forum</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5">
          <h1 className="font-bold text-lg">Partner with us</h1>
          <ul>
            <li>Partnership programs</li>
            <li>Affiliate program</li>
            <li>Connectivity partners</li>
            <li>Promotions and events</li>
            <li>Integrations</li>
            <li>Community</li>
            <li>Loyalty program</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5">
          <h1 className="font-bold text-lg">Support</h1>
          <ul>
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Trust and safety</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/5">
          <h1 className="font-bold text-lg">Get the app</h1>
          <ul>
            <li>Tripma for Android</li>
            <li>Tripma for iOS</li>
            <li>Mobile site</li>
            <li className="my-3 cursor-pointer flex justify-center lg:justify-start">
              <img src={apple} alt="apple" className="w-32" />
            </li>
            <li className="cursor-pointer flex justify-center lg:justify-start">
              <img src={google} alt="google" className="w-32" />
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-center">
        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          <img src={twitter} alt="twitter" className="w-5 cursor-pointer" />
          <img src={insta} alt="insta" className="w-5 cursor-pointer" />
          <img src={fb} alt="fb" className="w-5 cursor-pointer" />
        </div>
        <p>© 2025 Tripma Incorporated</p>
      </div>
    </footer>
  );
};

export default Footer;
