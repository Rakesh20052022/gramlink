import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import { MdPhone,MdEmail,MdLocationPin, MdOutlineSupportAgent } from "react-icons/md";

const Help = () => {
  return (
    <>

      <div className="animate-slideUp">


      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="bg-amber-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* ===== LEFT SIDE (FORM) ===== */}
          <div className="bg-[#ffffff] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ddba8c]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ddba8c]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ddba8c]"
              ></textarea>

              <button className="w-full bg-[#b76e79] text-white py-3 rounded-lg font-semibold hover:bg-[#a05a63] transition">
                Send Message
              </button>
            </form>
          </div>

          {/* ===== RIGHT SIDE (INFO) ===== */}
          <div className="flex flex-col justify-center space-y-6">

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <MdLocationPin size={19} />
                 Address
              </h3>
              <p className="text-gray-500 mt-1">
                Haur, West Bengal, India, Purba Medinipur - 721131
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <MdPhone size={18} />
                 Phone
              </h3>
              <p className="text-gray-500 mt-1">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <MdEmail size={17} />
                 Email
              </h3>
              <p className="text-gray-500 mt-1">
                support@yourbrand.com
              </p>
            </div>

            <div className="bg-[#ffffff] p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <MdOutlineSupportAgent size={19} />
                Support
              </h3>
              <p className="text-gray-500 mt-1">
                24/7 Customer Support Available
              </p>
            </div>

          </div>

        </div>
      </section>
      </div>

      {/* ===== MAP SECTION ===== */}
      {/* <section className="px-6 md:px-20 pb-16 bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14758.758039330753!2d87.64295387240024!3d22.36534967287465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b1aa1d3967a7%3A0xd5dc2baa4e3e8b36!2sHaur%2C%20West%20Bengal%20721131!5e0!3m2!1sen!2sin!4v1776851896176!5m2!1sen!2sin"
              className="w-full h-[350px] border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
};

export default Help;