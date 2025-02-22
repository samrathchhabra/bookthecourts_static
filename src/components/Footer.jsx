import React, { useRef } from "react";
import arrow from "../assets/Arrow_4.png";
import newsletter_pic from "../assets/newsletter_pic.png";
import article1 from "../assets/article_1.png";
import article2 from "../assets/article_2.png";
import article3 from "../assets/article_3.png";
import avatar1 from "../assets/avatar.png";
import right from "../assets/ar-right.png";
import left from "../assets/ar-left.png";
import footer_logo from "../assets/footer_logo.png";

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
  const articles = [
    {
      img: article1,
      avatar: avatar1,
      author: "Jake Will.",
      date: "04 June 2023",
      title:
        "5 Exercises Basketball Players Should Be Using To Develop Strength",
      description:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
    },
    {
      img: article2,
      avatar: avatar1,
      author: "Jake Will.",
      date: "04 June 2023",
      title:
        "5 Exercises Basketball Players Should Be Using To Develop Strength",
      description:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
    },
    {
      img: article3,
      avatar: avatar1,
      author: "Jake Will.",
      date: "04 June 2023",
      title:
        "5 Exercises Basketball Players Should Be Using To Develop Strength",
      description:
        "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
    },
  ];

  return (
    <>
      <div className="bg-black md:p-10 ">
        {/* newsletter */}
        <div className="flex justify-center">
          <div className="w-[90%] max-w-8xl bg-white rounded-[10px] flex flex-col md:flex-row justify-between items-center mt-[4rem]">
            <div className="w-full md:w-1/2 flex flex-col justify-between md:ml-10 gap-5 text-center md:text-left">
              <h2 className="uppercase text-[36px] md:text-[48px] lg:text-[58px] font-[900] bg-gradient-to-b from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text">
                Subscribe to our <br /> newsletter
              </h2>
              <div className="flex w-full max-w-md p-4 mb-6 md:p-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow pt-4 pb-4 pl-4 border-[#262626] border-[1px] rounded-tl-[8px] rounded-bl-[8px] text-[16px]"
                />
                <button className="bg-[#262626] flex items-center justify-center px-4 py-4 rounded-tr-[8px] rounded-br-[8px]">
                  <img src={arrow} alt="Send" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-[60%] md:mb-0 flex justify-center mt-8 md:mt-0 ">
              <img
                src={newsletter_pic}
                alt="Newsletter"
                className="max-w-[80%] md:max-w-full"
              />
            </div>
          </div>
        </div>

        {/* ARTICLES */}
        <div className="text-center mt-[5rem] px-4">
          {/* Title */}
          <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px] font-beVietnam">
            our <span className="text-[#A2DF00]">articles</span>
          </h2>
          <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mt-[2rem]">
            View the articles curated by our users.
          </p>
        </div>
        <div className="mt-[2rem] max-w-7xl mx-auto">
          <Slider ref={sliderRef} {...settings}>
            {articles.map((article, index) => (
              <div key={index} className="p-4">
                <div className="flex flex-col w-full gap-2 p-1 rounded-lg shadow-lg">
                  {/* Article Image */}
                  <img
                    src={article.img}
                    alt="Article"
                    className="w-full rounded-lg"
                  />

                  {/* Avatar & Author */}
                  <div className="flex gap-4 font-beVietnam mt-[15px] items-center">
                    <img
                      src={article.avatar}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-white text-[16px]">{article.author}</p>
                  </div>

                  {/* Date */}
                  <div className="text-white text-[12px] mt-[10px]">
                    {article.date}
                  </div>

                  {/* Title & Description */}
                  <div className="text-white mt-[10px]">
                    <h3 className="text-[19px] font-[500] mb-[10px]">
                      {article.title}
                    </h3>
                    <p className="text-[#B5B5B5] text-[12px] text-justify">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="bg-inherit border border-[#A2DF00] font-beVietnam text-lg p-3 rounded-md text-[#A2DF00]"
          >
            <img src={left} alt="Previous" className="w-full h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#A2DF00] font-beVietnam text-lg p-3 rounded-md"
          >
            <img src={right} alt="Next" className="w-full h-4" />
          </button>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#f2f2f2] py-8 px-4 md:px-8 ">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row mt-10 items-center md:items-start md:justify-between gap-6 md:gap-8">
          {/* Section 1 - Footer Logo */}
          <div className="w-[24rem] h-[6rem] flex justify-center md:justify-start">
            <img src={footer_logo} alt="Footer Logo" className="w-full" />
          </div>

          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-6 text-center md:text-left">
            {/* Section 2 - Home */}
            <div>
              <h3 className="font-bold text-lg">Home</h3>
              <ul className="mt-2 space-y-1">
                <li>Courtsite Platform</li>
                <li>Courtsite For Business</li>
              </ul>
            </div>

            {/* Section 3 - About Us */}
            <div>
              <h3 className="font-bold text-lg">About Us</h3>
              <ul className="mt-2 space-y-1">
                <li>About Us</li>
                <li>Our Blog</li>
                <li>Like Courtsite?</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Section 4 - Help Centre */}
            <div>
              <h3 className="font-bold text-lg">Help Centre</h3>
              <ul className="mt-2 space-y-1">
                <Link to={"/faqs"}>
                  <li>FAQs</li>
                </Link>
                <Link to={"/termsandcondition"}>
                  <li>Terms and Conditions</li>
                </Link>

                <Link to={"/privacypolicy"}>
                  <li>Privacy Policy</li>
                </Link>

                <li>Contact Us</li>
              </ul>
            </div>

            {/* Section 5 - Our Partner Centres */}
            <div>
              <h3 className="font-bold text-lg">Our Partner Centres</h3>
              <ul className="mt-2 space-y-1">
                <li>Forum Optimum Badminton Centre</li>
                <li>X Park PJ South</li>
                <li>Sportizza - Home of Sports Petaling Jaya</li>
                <li>and more</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
