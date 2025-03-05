import React, { useRef } from "react";
import arrow from "../assets/Arrow_4.png";
import newsletter_pic from "../assets/newsletter_pic.png";
import article1 from "../assets/article_1.png";
import article2 from "../assets/article_2.png";
import article3 from "../assets/article_3.png";
import avatar1 from "../assets/avatar.png";
import footerlogo from "../assets/nav_logo.png";
import { Facebook, Linkedin, Instagram } from "lucide-react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 2 slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Dummy data for articles (replace with API data if needed)

  return (
    <div className=" flex flex-col">
      {/* Footer */}
      <footer className="bg-[#f2f2f2] py-8 px-4 md:px-8">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row mt-10 items-center md:items-start md:justify-between gap-6 md:gap-8">
          {/* Footer Logo */}
          <div className="w-[32rem] h-[6rem] flex justify-center md:justify-start bg-black rounded-md">
            <img
              src={footerlogo}
              alt="Book The Court"
              className="w-full p-2 rounded-md"
            />
          </div>

          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 text-center md:text-left">
            {/* Help Centre */}
            <div>
              <h3 className="font-bold text-lg">Help Centre</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="/faqs" className="hover:text-gray-600">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/termsandcondition" className="hover:text-gray-600">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacypolicy" className="hover:text-gray-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/contactus" className="hover:text-gray-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold text-lg">Connect With Us</h3>
              <div className="flex mt-4 space-x-4 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/profile.php?id=61554832212303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#262626] rounded-full text-white hover:bg-[#4267B2] transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/bookthecourts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#262626] rounded-full text-white hover:bg-[#0077B5] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="http://instagram.com/bookthecourts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#262626] rounded-full text-white hover:bg-[#E1306C] transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Book The Court. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
