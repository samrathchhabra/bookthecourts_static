import React, { useRef } from "react";
import video from "../assets/home-video.webm";
import Navbar from "../components/Navbar";
import court from "../assets/book_the_court.png";
import drop from "../assets/drop-down.png";
import lockin from "../assets/lockin.png";
import about from "../assets/About-us.png";
import football from "../assets/football.png";
import basketball from "../assets/basketball.png";
import cricket from "../assets/cricket.png";
import table from "../assets/table_tennis.png";
import plaza from "../assets/plaza.png";
import asset from "../assets/per_asset.png";
import cricket_bg from "../assets/cricket-bg.png";
import quick from "../assets/quick.png";
import top_rated from "../assets/top_rated.png";
import weather from "../assets/weather.png";
import b_complex from "../assets/basket_complex.png";
import b_cricket from "../assets/cricket_abc.png";
import b_football from "../assets/b_football.png";
import heart from "../assets/heart.png";
import share from "../assets/share.png";
import go from "../assets/go.png";
import jacob from "../assets/jacob.png";
import ryan from "../assets/ryan.png";
import right from "../assets/ar-right.png";
import left from "../assets/ar-left.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import EventCards from "../Cards/EventCards";
import cardData from "../Data/CardData";

const LandingPage = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides on larger screens
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

  const testimonials = [
    {
      name: "Jacob",
      location: "Ontario, Canada",
      image: jacob,
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas.",
    },
    {
      name: "Ryan",
      location: "Ontario, Canada",
      image: ryan,
      feedback:
        "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas.",
    },
  ];

  return (
    <div className="landing-page custom-container ">
      <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen lg:h-[100vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 my-auto">
          <Navbar />

          <div className="flex flex-col justify-center items-center px-4 text-center text-black font-beVietnam mt-16 sm:mt-[10rem]">
            <div className="mb-4 sm:mb-8">
              <img src={court} alt="Court" className="w-80 sm:w-full" />
            </div>
            <h3 className="text-lg text-white font-beVietnam sm:text-2xl md:text-3xl font-semibold">
              World’s first AI-based facility management
              <br />
              software
            </h3>

            <div className="flex flex-col md:flex-row bg-white w-[60%] sm:w-[80%] md:w-[80%] p-4 rounded-[15px] justify-center mt-10 sm:mt-14">
              <div className="grid grid-col-1 items-center text-center sm:grid-cols-5 gap-6 text-sm sm:text-lg md:text-[20px] font-medium w-full">
                <div className="flex justify-center items-center gap-6">
                  Categories
                  <img src={drop} alt="" className="mt-1 flex items-center" />
                </div>
                <div className="hidden sm:flex justify-center items-center">
                  <div className="border-l border-gray-400 h-10"></div>
                </div>
                <div className="flex justify-center items-center gap-6">
                  Choose Sports
                  <img src={drop} alt="" className="mt-1 flex items-center" />
                </div>
                <div className="hidden sm:flex justify-center items-center">
                  <div className="border-l border-gray-400 h-10"></div>
                </div>
                <div className="flex justify-center items-center gap-6">
                  Enter Location
                  <img src={drop} alt="" className="mt-1 flex items-center" />
                </div>
              </div>
            </div>

            <button className="text-[19px] text-[#A2E000] font-[900] font-beVietnam flex justify-center items-center border-[1px] border-[#FFFFFF99] border-opacity-60 rounded-[15px] p-2 gap-4 mt-20">
              <img src={lockin} alt="" className="w-7 h-8" />
              <div className="mb-1 pr-4">Lock It In!</div>
            </button>
          </div>
        </div>
      </div>

      {/* About us */}
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          width: "100%",
        }}
      >
        <div className="flex flex-col justify-center items-center  px-8 sm:px-8 md:h-[80vh] pt-[2rem] pb-[2rem] ">
          <div className="text-center mt-2">
            <h2 className="uppercase text-white text-2xl sm:text-4xl font-bold leading-tight">
              Smarter <span className="text-[#A2DF00]">Scheduling</span>,
              Maximum <span className="text-[#A2DF00]">Efficiency</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-medium text-white mt-4 sm:mt-8 mb-4 sm:mb-8">
              AI-powered dynamic scheduling that adapts to your facility’s needs
              in real-time and Effortlessly manage court bookings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-14">
            <div className="flex flex-col gap-4 items-center">
              <div
                className="h-28 sm:h-28 rounded-[10px] flex justify-center items-center w-full p-4"
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  FOOTBALL
                </h2>
              </div>
              <img
                src={football}
                alt="Football"
                className="max-w-full h-auto"
              />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <img
                src={basketball}
                alt="Basketball"
                className="max-w-full h-auto"
              />
              <div
                className="h-[10.7rem]  rounded-[10px] flex justify-center items-center w-full p-4"
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  BASKET <br /> BALL
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div
                className=" h-28 sm:h-28 rounded-[10px] flex justify-center items-center w-full p-4"
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  CRICKET
                </h2>
              </div>
              <img src={cricket} alt="Cricket" className="max-w-full h-auto" />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <img
                src={table}
                alt="Table Tennis"
                className="max-w-full h-auto"
              />
              <div
                className="h-28 sm:h-28 rounded-[10px] flex justify-center items-center w-full p-4"
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                  TABLE <br /> TENNIS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Member Experience */}
      <div className="md:h-[60vh] min-h-full bg-black flex justify-center items-center py-10 pt-[10rem] ">
        <div className=" w-full max-w-8xl px-4 sm:px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 p-5 flex justify-center">
            <img
              src={plaza}
              alt=""
              className="w-full max-w-sm sm:max-w-md md:max-w-full h-auto"
            />
          </div>
          <div className="p-5 w-full md:w-1/2">
            <h2 className="uppercase text-center sm:text-left text-[42px] font-[700] text-white mb-4">
              <span className="text-[#A2DF00]">Personalized</span> Member <br />{" "}
              Experiences
            </h2>
            <p className="text-white text-center sm:text-left text-opacity-80 text-base sm:text-lg md:text-xl font-medium mb-6">
              AI will Engage and retain members with insights, activity
              tracking, and tailored recommendations by <br /> advanced
              analytics.
            </p>
            <img
              src={asset}
              alt=""
              className="w-full max-w-[100%] sm:max-w-full md:max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      {/* DATA DRIVEN DECISIONS AT YOUR FINGERTIPS */}
      <div
        style={{
          backgroundImage: `url(${cricket_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          Height: "80vh",
          width: "100%",
        }}
      >
        <div className="flex flex-col justify-center items-center py-[4rem] align-middle h-full px-4 sm:px-8 md:px-16 ">
          <div className="text-center mt-10 sm:mt-10 md:mt-10 ">
            <h2 className="uppercase text-[32px] sm:text-[42px] font-[700] text-white mb-[15px] font-beVietnam">
              <span className="text-[#A2DF00]">Data-Driven</span> Decisions at
              Your Fingertips
            </h2>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[18px] sm:text-[22px] font-[400] w-full mt-[2rem]">
              Unleash the power of dashboards—get actionable analytics
            </p>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[18px] sm:text-[22px] font-[400] w-full mb-[15px]">
              for members and clubs, from performance metrics to revenue
              insights.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center mt-10 sm:mt-16">
            <div className="w-1/2 sm:w-1/4 md:w-1/4">
              <img src={top_rated} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 sm:w-1/4 md:w-1/4">
              <img src={weather} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 sm:w-1/4 md:w-1/4">
              <img src={quick} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* SEAMLESS EVENT MANAGEMENT */}
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "max-content",
          width: "100%",
          padding: "2rem",
        }}
      >
        <div className="text-center">
          <h2 className="uppercase text-[32px] sm:text-[32px] md:text-[42px] font-[700] text-white mb-[15px] font-beVietnam mt-[5rem]">
            seamless
            <span className="text-[#A2DF00]"> event</span> management
          </h2>
          <p className="text-[#FFFFFFCC] text-opacity-80 text-[16px] sm:text-[18px] md:text-[22px] font-[400] w-full md:w-[80%] lg:w-[60%] mx-auto mt-[2rem]">
            Plan tournaments like a pro—AI-driven scheduling, team formation,
            and
          </p>
          <p className="text-[#FFFFFFCC] text-opacity-80 text-[16px] sm:text-[18px] md:text-[22px] font-[400] w-full md:w-[80%] lg:w-[60%] mx-auto mb-[15px]">
            live performance analytics for a next-level experience.
          </p>
        </div>

        <div className="parent-container flex flex-wrap gap-4 md:gap-6 lg:gap-12 px-4 md:px-[2rem]">
          {/* 1st row */}
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6 lg:gap-12 justify-center">
            {cardData.slice(0, 3).map((card, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <EventCards
                  image={card.image}
                  title={card.title}
                  location={card.location}
                  likes={card.likes}
                  shares={card.shares}
                />
              </div>
            ))}
          </div>
          {/* 2nd row */}
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6 lg:gap-12 justify-center mt-6 md:mt-12">
            {cardData.slice(3, 6).map((card, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <EventCards
                  image={card.image}
                  title={card.title}
                  location={card.location}
                  likes={card.likes}
                  shares={card.shares}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center align-middle mt-[4rem]">
          <div className="bg-black flex pt-1 pb-1 pl-4 pr-4 rounded-[2.5rem] gap-4 border-[1px] border-white border-opacity-30">
            <img src={lockin} alt="lockin" />
            <button className="text-[#A2E000] font-[900] text-[19px] text-center">
              Explore
            </button>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="bg-black p-10 md:px-12">
        <div className="text-center mb-10">
          <h2 className="uppercase text-[28px] sm:text-[32px] md:text-[42px] font-[700] text-white mb-[10px] font-beVietnam">
            our <span className="text-[#A2DF00]">Testimonials</span>
          </h2>
          <p className="text-[#FFFFFFCC] text-opacity-80 text-[16px] sm:text-[18px] md:text-[22px] font-[400] max-w-2xl mx-auto">
            Here are some of the testimonials from our users.
          </p>
        </div>

        <div className="w-full max-w-8xl mx-auto">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="flex flex-col sm:flex-row justify-center items-center p-6 rounded-lg text-white">
                  <div className="w-[60%] sm:w-[10rem] sm:h-[10rem] md:w-[12rem] md:h-[12rem] overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-8 text-center sm:text-left">
                    <h4 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-[12px] sm:text-[14px] font-[400] text-[#9C9C9C]">
                      {testimonial.location}
                    </p>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[300] mt-2 max-w-md">
                      {testimonial.feedback}
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
      <Footer />
    </div>
  );
};

export default LandingPage;
