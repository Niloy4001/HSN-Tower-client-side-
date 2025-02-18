import { FaShieldAlt, FaBuilding, FaCreditCard, FaMapMarkerAlt, FaDumbbell, FaParking } from "react-icons/fa";

export default function WhyHSNTower() {
  return (
    <section className="py-16 bg-[#F4F6F9]">
    <div className=" mx-auto text-center w-[90%]">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-6">
        Why Choose <span className="text-[#F8B400]">HSN Tower?</span>
      </h2>
      <p className="text-[#2C3E50] text-lg mb-10">
        Experience luxury, security, and convenience with our premium apartment features.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Security */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaShieldAlt className="text-[#1A3D7C] text-4xl mb-3" />
          <h3 className="text-xl font-semibold text-[#2C3E50]">24/7 Security</h3>
          <p className="text-[#6C757D] mt-2">Secure your family with top-tier security services.</p>
        </div>

        {/* Smart Apartments */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaBuilding className="text-[#1A3D7C] text-4xl mb-3" />
          <h3 className="text-xl font-semibold text-[#2C3E50]">Modern Smart Apartments</h3>
          <p className="text-[#6C757D] mt-2">Equipped with the latest smart home features.</p>
        </div>

        {/* Easy Rent Payment */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaCreditCard className="text-[#1A3D7C] text-4xl mb-3" />
          <h3 className="text-xl font-semibold text-[#2C3E50]">Easy Rent Payment</h3>
          <p className="text-[#6C757D] mt-2">Hassle-free online rent payment system.</p>
        </div>

        {/* Prime Location */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaMapMarkerAlt className="text-[#1A3D7C] text-4xl mb-3" />
          <h3 className="text-xl font-semibold text-[#2C3E50]">Prime Location</h3>
          <p className="text-[#6C757D] mt-2">Situated in the heart of Dhaka for ultimate convenience.</p>
        </div>

        {/* Gym & Fitness */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaDumbbell className="text-[#1A3D7C] text-4xl mb-3" />
          <h3 className="text-xl font-semibold text-[#2C3E50]">Gym & Fitness</h3>
          <p className="text-[#6C757D] mt-2">Stay fit with our premium gym facilities.</p>
        </div>

        {/* Parking & Community Hall */}
        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <FaParking className="text-[#1A3D7C] text-4xl mb-3" />
          <h3 className="text-xl font-semibold text-[#2C3E50]">Parking & Community Hall</h3>
          <p className="text-[#6C757D] mt-2">Spacious parking and a modern event hall.</p>
        </div>
      </div>
    </div>
  </section>
  )
}
