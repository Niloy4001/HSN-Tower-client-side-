import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <footer className="bg-[#1A3D7C] text-white pt-10 pb-6">
      <div className="w-[90%] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1 - About HSN Tower */}
        <div>
        <Link to={"/"} className="text-2xl font-bold items-center md:flex hidden"><img src={logo} alt=""  className="w-[60px] h-[60px]"/><span>H<span className="text-[#F8B400]">S</span>N To<span className="text-[#F8B400]">w</span>er</span></Link>
          <p className="mt-3 text-gray-300">
            Your premium residential space in Dhaka. Offering modern apartments
            with top-notch facilities and seamless rent management.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="flex justify-start md:justify-center">
         <div>
         <h3 className="text-xl font-semibold text-[#F8B400]">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link to="/apartment" className="hover:text-[#F8B400] transition">
                Apartments
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F8B400] transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-[#F8B400] transition">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:text-[#F8B400] transition">
                Dashboard
              </Link>
            </li>
          </ul>
         </div>
        </div>

        {/* Column 3 - Contact Info & Socials */}
        <div className="flex justify-start md:justify-end">
          <div>
          <h3 className="text-xl font-semibold text-[#F8B400]">Contact Us</h3>
          <p className="mt-3 text-gray-300">
            📍 Banani, Dhaka, Bangladesh <br />
            📞 +880 1234 567 890 <br />
            ✉️ info@hsntower.com
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#F8B400] transition text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-500 mt-6 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} HSN Tower. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
