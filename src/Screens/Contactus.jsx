import { Navbar } from "../components/common/Navbar";
import Footer from "../components/core/LandingPage/Footer";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import React from "react";

function Contactus() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar isHome={true} />

      {/* Hero Banner */}
      <div className="relative w-full pt-20 pb-12 overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            We're here to help
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            Get in Touch
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Have a question about a property? Our team is ready to assist you
            every step of the way.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left — Contact Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300 border border-blue-50">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaPhone className="text-blue-600 text-lg" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:+917071488745"
                  className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
                >
                  +91 70714 88745
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Tap to call directly
                </p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300 border border-green-50">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FaWhatsapp className="text-green-600 text-lg" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/917071488745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors"
                >
                  +91 70714 88745
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  Chat with us on WhatsApp
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300 border border-indigo-50">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <FaEnvelope className="text-indigo-600 text-lg" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:shukla7071@gmail.com"
                  className="text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors break-all"
                >
                  shukla7071@gmail.com
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-md p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaClock className="text-white text-base" />
                </div>
                <p className="font-bold text-lg">Business Hours</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-blue-100 text-sm font-medium">
                    Monday – Saturday
                  </span>
                  <span className="text-white font-bold text-sm">
                    9:00 AM – 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3">
                  <span className="text-blue-100 text-sm font-medium">
                    Sunday
                  </span>
                  <span className="text-red-300 font-bold text-sm">Closed</span>
                </div>
                <p className="text-blue-200 text-xs text-center mt-2">
                  All timings in IST (Indian Standard Time)
                </p>
              </div>

              {/* Social Icons */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { Icon: FaFacebookF, hover: "hover:bg-blue-500", href: "#" },
                    { Icon: FaTwitter, hover: "hover:bg-sky-400", href: "#" },
                    { Icon: FaInstagram, hover: "hover:bg-pink-500", href: "#" },
                    { Icon: FaLinkedinIn, hover: "hover:bg-blue-700", href: "#" },
                  ].map(({ Icon, hover, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className={`w-9 h-9 rounded-full bg-white/20 flex items-center justify-center ${hover} transition-colors duration-200`}
                    >
                      <Icon className="text-white text-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-gray-800">
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Fill in the form below and we'll get back to you shortly.
              </p>
            </div>
            <ContactForm isModal={false} />
          </div>
        </div>

        {/* Bottom Quick Contact Bar */}
        <div className="mt-10 bg-white rounded-2xl shadow-md px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-100">
          <p className="text-gray-600 font-medium text-sm">
            🏠 Looking for your dream property? Our experts are just a call away.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="tel:+917071488745"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <FaPhone className="text-xs" /> Call Now
            </a>
            <a
              href="https://wa.me/917071488745"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <FaWhatsapp className="text-sm" /> WhatsApp
            </a>
            <a
              href="mailto:shukla7071@gmail.com"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <FaEnvelope className="text-xs" /> Email Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contactus;
