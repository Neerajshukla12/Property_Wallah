import React from "react";
import { useNavigate } from "react-router";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start bg-[#151c22] overflow-hidden  w-full ">
      <div className="md:flex md:justify-around justify-between gap-4 w-full p-8">
        <div className="flex flex-row flex-wrap gap-4 md:w-[60%] justify-between">
          <div className="flex flex-col gap-4">
            <div className="text-white font-bold text-lg mb-2">Property Wallah</div>
            <div className="text-white font-medium text-base">Mobile Apps</div>
            <div className="text-white font-medium text-base">Our Services</div>
            <div className="text-white font-medium text-base">Post your Property</div>
            <div className="text-white font-medium text-base">Builders in India</div>
            <div className="text-white font-medium text-base">Articles</div>
            <div className="text-white font-medium text-base">Customer Service</div>
            <div className="text-white font-medium text-base">Sitemap</div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-white font-bold text-lg mb-2">Company</div>
            <div className="text-white font-medium text-base cursor-pointer" onClick={() => navigate("/info/about-us")}>
              About us
            </div>
            <div className="text-white font-medium text-base cursor-pointer" onClick={() => navigate("/contact-us")}>
              Contact us
            </div>
            <div className="text-white font-medium text-base">Careers with us</div>
            <div className="text-white font-medium text-base">Terms & Conditions</div>
            <div className="text-white font-medium text-base">Request Info</div>
            <div className="text-white font-medium text-base">Feedback</div>
            <div className="text-white font-medium text-base">Report a problem</div>
            <div className="text-white font-medium text-base">Testimonials</div>
            <div className="text-white font-medium text-base">Privacy Policy</div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-white font-bold text-lg mb-2">Our Partners</div>
            <div className="flex flex-col gap-4">
              <a href="https://www.vigya.in/" target="_blank" className="text-white font-medium text-base">
                Vigya.in - For IT Services And Solutions
              </a>
              <a href="https://www.aanganconnect.in/" target="_blank" className="text-white font-medium text-base">
                Aangan Connect - For Your Smart Society
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:w-[40%] ">
          <div className="text-white font-bold text-lg mb-2">Contact Us</div>
          <a href="tel:+917071488745" className="text-white font-medium text-base hover:text-blue-400 transition-colors">
            +91 70714 88745
          </a>
          <p className="text-white font-normal text-sm opacity-70 mt-1">Monday - Saturday (9:00 AM to 7:00 PM IST)</p>
          <a href="mailto:shukla7071@gmail.com" className="text-white font-normal text-sm mt-3 hover:text-blue-400 transition-colors">
            Email - shukla7071@gmail.com
          </a>
          <div className="text-white font-bold text-lg mt-6">Connect with us</div>

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/PropertyWallah/" target="_blank" className="text-white text-3xl">
              <Facebook />
            </a>
            <a href="https://www.youtube.com/user/PropertyWallahindia" target="_blank" className="text-white text-3xl">
              <YouTube />
            </a>
            <a href="https://twitter.com/PropertyWallahIndia" target="_blank" className="text-white text-3xl">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/PropertyWallahindia/" target="_blank" className="text-white text-3xl">
              <Instagram />
            </a>
          </div>

          <div className="text-white text-xs opacity-50 mt-4">
            *Usage of propertywallah.org to upload content showing area in non standard units or which enables targeting by religion/community/caste/race is prohibited. Please report inappropriate content by writing to us at <span className="text-blue-500 font-medium">report abuse</span>
          </div>

          <p className="text-white font-medium text-base mt-4">
            All trademarks are the property of their respective owners.
          </p>

          <p className="text-white font-medium text-base mt-4">
            All rights reserved - Vigya.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
