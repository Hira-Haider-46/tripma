import logo from "../assets/logo.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import apple from "../assets/app_store.png";
import google from "../assets/google_play.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full text-gray-500">
      <div className="w-full border-b-2 border-gray-300 flex flex-row px-20 py-10 text-base/10">
        <div className="w-1/5">
            <img src={logo} alt="logo" className="cursor-pointer w-35"/>
        </div>
        <div className="w-1/5 pt-2">
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
        <div className="w-1/5 pt-2">
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
        <div className="w-1/5 pt-2">
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
        <div className="w-1/5 pt-2">
            <h1 className="font-bold text-lg">Get the app</h1>
            <ul>
                <li>Tripma for Android</li>
                <li>Tripma for iOS</li>
                <li>Mobile site</li>
                <li className="my-3 cursor-pointer">
                    <img src={apple} alt="apple" />
                </li>
                <li className="cursor-pointer">
                    <img src={google} alt="google" />
                </li>
            </ul>
        </div>
      </div>
      <div className="py-5 px-20 flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4">
            <img src={twitter} alt="twitter" className="w-5 cursor-pointer"/>
            <img src={insta} alt="insta" className="w-5 cursor-pointer"/>
            <img src={fb} alt="fb" className="w-5 cursor-pointer"/>
        </div>
        <p>© 2025 Tripma incorporated</p>
      </div>
    </footer>
  );
};

export default Footer;