import React, { useState } from "react";
import Navbar from "../components/Navbar";
import hero_1 from "../assets/business/hero-1.png";
import hero_2 from "../assets/business/hero-2.png";
import about from "../assets/About-us.png";
import lockin from "../assets/lockin.png";
import field from "../assets/business/court.png";
import trophy from "../assets/business/trophy.png";
import icon from "../assets/business/icon.png";
import tennis from "../assets/business/tennis.png";
import explore from "../assets/business/explore.png";
import tick from "../assets/business/tick.png";
import court from "../assets/book_the_court.png";
import image1 from "../assets/business/img-1.png";
import cricket_bg from "../assets/cricket-bg.png";
import image2 from "../assets/business/img-2.png";
import plaza from "../assets/plaza.png";
import asset from "../assets/per_asset.png";
import open from "../assets/business/open.png";
import safer from "../assets/business/Safer.png";
import cloud from "../assets/business/cloud.png";
import faster from "../assets/business/Faster.png";
import toast from "react-hot-toast";
import Footer from "../components/Footer";
import location from "../assets/business/location.png";
import mobile from "../assets/business/mobile.png";
import mail from "../assets/business/mail.png";
import contact_name from "../assets/business/contact_name.png";
import contact_mail from "../assets/business/contact_mail.png";
import contact_messege from "../assets/business/contact_messege.png";
import contact_pen from "../assets/business/contact_pen.png";
import contact_phone from "../assets/business/contact_phone.png";
import t_ball from "../assets/business/t-ball.png";
import t_bat from "../assets/business/b-bat.png";
import facilities from "../assets/business/facilities.jpeg";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";

const Business = () => {
  const [openSections, setOpenSections] = useState([false, false]);
  const [phoneNumber, setPhoneNumber] = useState({
    number: "",
    countryCode: "",
    countryName: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    isChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneNumber = (e, value, name) => {
    // console.log(value?.dialCode);
    const countryCode = value?.dialCode;
    const number = e;
    const countryName = value.name;
    setPhoneNumber({
      number: number,
      countryCode: countryCode,
      countryName: countryName,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Check if any required field is empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("All fields are required");
      return; // Stop execution if there's an error
    }

    if (!formData.isChecked) {
      toast.error("You must agree to the terms before submitting.");
      return; // Stop execution if there's an error
    }

    const serviceId = "service_3aui85v";
    const templateId = "template_xm8gkfl";
    const publicKey = "LQzQ5Wq6NWU_oVEUC";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_country: phoneNumber.countryName,
      phone_number: phoneNumber.number,
      subject: formData.subject,
      message: formData.message,
      to_name: "DatacoveAI",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        toast.success("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          isChecked: false,
        });
      })
      .catch((error) => {
        console.error("Error sending email", error);
        toast.error("Failed to send the message. Please try again.");
      });
  };

  const toggleSection = (index) => {
    setOpenSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[index] = !newSections[index];
      return newSections;
    });
  };

  return (
    <div className="custom-container">
      <div className="bg-black">
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* hero */}
        <div className="flex flex-col md:flex-row w-full h-auto gap-5">
          {/* Left Image */}
          <div className="w-full md:w-1/3 flex-1 justify-center items-center">
            <img
              src={hero_2}
              alt=""
              className="w-full h-[18vh] md:h-auto object-cover object-top"
            />
          </div>

          {/* Middle Colored Section (Auto-adjusting width) */}
          <div className="w-full md:w-1/3 flex-1 flex-col items-center bg-[#A2DF00] ">
            <div className="flex flex-col justify-center items-center h-full ">
              {/* Image Section */}
              <div className="flex justify-center mb-8 w-3/4 md:w-2/3">
                <img src={court} alt="" className="w-full" />
              </div>

              {/* Heading */}
              <div className="">
                <h2 className="text-2xl md:text-5xl lf:text-8xl  font-bold text-center mb-6">
                  CUSTOMISED <br /> USER PRICING
                </h2>
              </div>

              {/* Description */}

              <p className="text-lg md:text-xl font-semibold text-[#494949] text-center w-3/4 md:w-2/3">
                You can now create Custom Pricing <br /> for your preferred or
                special customers!
              </p>

              {/* Button Section */}
              <div className="flex justify-center items-center mt-2 md:mt-16 mb-10">
                <div className="bg-black flex px-6 py-2 rounded-full gap-4 border border-white border-opacity-30">
                  <img src={lockin} alt="" />
                  <button className="text-[#A2E000] font-bold text-xl text-center">
                    Book A Call
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/3 flex-1 justify-center items-center">
            <img
              src={hero_1}
              alt=""
              className="w-full h-[18vh] md:h-auto object-cover "
            />
          </div>
        </div>
        {/* sale */}
        <div className="h-14 bg-[#A2DF00] flex mt-[4rem] overflow-hidden">
          <div className="flex justify-between w-full text-base md:text-lg lg:text-xl px-4 py-2 font-semibold animate-marquee space-x-[20rem] md:space-x-6 whitespace-nowrap">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex justify-center items-center min-w-[250px]"
              >
                <h2 className="text-center">
                  Exclusive Offers up to $500 Discount till 31st December.
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* what we offer */}
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "max-content",
        }}
        className="h-[80vh]"
      >
        <div className="p-8 md:p-18">
          {/* Heading Section */}
          <div className="text-white text-[14px] font-[700]">WHAT WE OFFER</div>
          <div className="flex flex-col lg:flex-row justify-between mt-[2rem]">
            <div>
              <h2 className="uppercase text-white text-[28px] lg:text-[42px] font-[700]">
                our{" "}
                <span className="text-[#A2DF00]">
                  top <br /> membership <br />
                </span>{" "}
                service for you
              </h2>
            </div>
            <div className="w-full lg:w-[60%] flex justify-center lg:justify-start items-center mt-4 lg:mt-0">
              <p className="text-[#D4D4D4] lg:w-[80%] text-opacity-60 text-center lg:text-left">
                Book The Court is a comprehensive platform for court
                reservations and club management, designed to help you operate
                your club effortlessly and with confidence.
              </p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-col sm:flex-row mt-[4rem] w-full gap-8 sm:gap-4 justify-between">
            {/* Card 1 */}
            <div className="flex flex-col gap-4 sm:gap-8 items-center sm:items-start mb-4">
              <div className="w-full flex justify-center sm:justify-start">
                <img
                  src={tennis}
                  alt=""
                  className="w-16 h-16 sm:w-auto sm:h-auto"
                />
              </div>
              <h3 className="uppercase text-[#CDCFCC] font-[600] text-center text-BarlowCondensed sm:text-left">
                Advanced Features
              </h3>
              <div className="flex gap-2 text-[#CDCFCC] items-center">
                EXPLORE{" "}
                <div className="flex justify-center items-center">
                  <img src={explore} alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:flex justify-center items-center">
              <div className="border-[.1px] h-[95%] border-[#CDCFCC] border-opacity-60"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 sm:gap-8 items-center sm:items-start mb-4">
              <div className="w-full flex justify-center sm:justify-start">
                <img
                  src={trophy}
                  alt=""
                  className="w-16 h-16 sm:w-auto sm:h-auto"
                />
              </div>
              <h3 className="uppercase text-[#CDCFCC] font-[600] text-center sm:text-left">
                Top tournaments
              </h3>
              <div className="flex gap-2 text-[#CDCFCC] items-center">
                EXPLORE{" "}
                <div className="flex justify-center items-center">
                  <img src={explore} alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:flex justify-center items-center">
              <div className="border-[.1px] h-[95%] border-[#CDCFCC] border-opacity-60"></div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 sm:gap-8 items-center sm:items-start mb-4">
              <div className="w-full flex justify-center sm:justify-start">
                <img
                  src={field}
                  alt=""
                  className="w-16 h-16 sm:w-auto sm:h-auto"
                />
              </div>
              <h3 className="uppercase text-[#CDCFCC] font-[600] text-center sm:text-left">
                Lockers & showers
              </h3>
              <div className="flex gap-2 text-[#CDCFCC] items-center">
                EXPLORE{" "}
                <div className="flex justify-center items-center">
                  <img src={explore} alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:flex justify-center items-center">
              <div className="border-[.1px] h-[95%] border-[#CDCFCC] border-opacity-60"></div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-4 sm:gap-8 items-center sm:items-start">
              <div className="w-full flex justify-center sm:justify-start">
                <img
                  src={icon}
                  alt=""
                  className="w-16 h-16 sm:w-auto sm:h-auto"
                />
              </div>
              <h3 className="uppercase text-[#CDCFCC] font-[600] text-center sm:text-left">
                Expert supervision
              </h3>
              <div className="flex gap-2 text-[#CDCFCC] items-center">
                EXPLORE{" "}
                <div className="flex justify-center items-center">
                  <img src={explore} alt="" className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BOOK COURTS */}
      <div className="bg-black h-max-content flex">
        <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 lg:p-0 my-[2rem]">
          <div className="w-full lg:w-[45%] xl:w-[40%] 2xl:w-[50%] h-[400px] lg:h-[700px] bg-[#A2DF00] flex justify-center items-center mb-8 lg:mb-0">
            <div className="lg:-ml-18 flex items-center">
              <img
                src={image2}
                alt=""
                className="w-[14rem] h-[20rem] object-cover object-center lg:w-[20rem] lg:h-[40rem]"
              />
              <img
                src={image1}
                alt=""
                className="w-[10rem] h-[14rem] lg:w-[20rem] lg:h-[40rem] md:hidden block -ml-6"
              />
            </div>
          </div>

          <div className="p-4 lg:-ml-[25rem] xl:-ml-[15rem] 2xl:-ml-[9rem] hidden md:block mb-8 lg:mb-0">
            <img
              src={image1}
              alt=""
              className="w-[10rem] h-[15rem] lg:w-[20rem] lg:h-[30rem]"
            />
          </div>

          <div className="w-full lg:w-[40%] text-center lg:text-left ml:0 md:ml-[6rem]">
            <h2 className="uppercase text-white text-[28px] lg:text-[42px] font-[600]">
              let players <br /> effortlessly{" "}
              <span className="text-[#A2DF00]">
                book <br /> courts <br />
              </span>{" "}
            </h2>
            <div className="mt-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <img src={tick} alt="" className="w-4 h-8" />

                <p className="text-white">Simple Mobile Bookings</p>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div>
                  <img src={tick} alt="" className="w-4 h-8" />
                </div>

                <p className="text-white">Get Paid Faster</p>
              </div>
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div>
                  <img src={tick} alt="" className="w-4 h-8" />
                </div>

                <p className="text-white">Optimize Court Usage</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start items-center mt-4">
              <div className="bg-black flex p-2 rounded-[1rem] gap-2 border-[1px] border-white border-opacity-30">
                <div>
                  <img src={lockin} alt="" className="w-6 h-8" />
                </div>
                <button className="text-[#A2E000] font-[900] text-[12px] text-center">
                  Book A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Member experience */}
      <div className="h-auto min-h-full bg-[#070707] flex justify-center items-center py-10 sm:py-10 md:py-10 lg:py-10  ">
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
      {/* OUR Features */}
      <div
        className="w-full h-auto flex flex-col align-middle"
        style={{
          background:
            "radial-gradient(50% 72.36% at 0% 0%, #1E1E1E 0%, #121212 100%)",
        }}
      >
        {/* Heading Section */}
        <div className="text-center pt-8 md:pt-12 lg:pt-16">
          <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4 md:mb-6 font-beVietnam">
            our
            <span className="text-[#A2DF00]"> features</span>
          </h2>
          <p className="text-[#FFFFFFCC] text-opacity-80 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto mt-4 md:mt-6">
            Explore our exclusive features that help you run your club smoothly.
          </p>
        </div>

        {/* Features Section */}
        <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto mt-10 mb-28 md:mt-14 lg:mt-20 gap-10 flex flex-col">
          {/* 1st Feature */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-white">
                01
              </h2>
              <h2 className="text-white opacity-80 text-lg sm:text-xl md:text-2xl ml-6 md:ml-24 lg:ml-24 lg:text-[36px] font-medium">
                Program and Event Management
              </h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className={`cursor-pointer w-6 h-6 sm:w-10 sm:h-10 transform transition-transform duration-300 ${
                  openSections[0] ? "-rotate-45" : ""
                }`}
                onClick={() => toggleSection(0)} // Toggle the 1st section
              />
            </div>
          </div>
          {openSections[0] && (
            <div className="mt-4 md:mt-6 flex">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
          <hr
            className={`opacity-20 mt-4 ${openSections[0] ? "mt-6" : "mt-4"}`}
          />

          {/* Repeat the above structure for other features (2nd, 3rd, 4th) */}
          {/* 2nd Feature */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-white">
                02
              </h2>
              <h2 className="text-white opacity-80 text-lg sm:text-xl md:text-2xl ml-6 md:ml-24 lg:ml-24 lg:text-[36px] font-medium">
                Membership Management
              </h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className={`cursor-pointer w-6 h-6 sm:w-10 sm:h-10 transform transition-transform duration-300 ${
                  openSections[1] ? "-rotate-45" : ""
                }`}
                onClick={() => toggleSection(1)} // Toggle the 2nd section
              />
            </div>
          </div>
          {openSections[1] && (
            <div className="mt-4 md:mt-6 flex">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
          <hr
            className={`opacity-20 mt-4 ${openSections[1] ? "mt-6" : "mt-4"}`}
          />

          {/* 3rd Feature */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-white">
                03
              </h2>
              <h2 className="text-white opacity-80 text-lg sm:text-xl md:text-2xl ml-6 md:ml-24 lg:ml-24 lg:text-[36px] font-medium">
                Court Reservation and Scheduling
              </h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className={`cursor-pointer w-6 h-6 sm:w-10 sm:h-10 transform transition-transform duration-300 ${
                  openSections[2] ? "-rotate-45" : ""
                }`}
                onClick={() => toggleSection(2)} // Toggle the 3rd section
              />
            </div>
          </div>
          {openSections[2] && (
            <div className="mt-4 md:mt-6 flex">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
          <hr
            className={`opacity-20 mt-4 ${openSections[2] ? "mt-6" : "mt-4"}`}
          />

          {/* 4th Feature */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-white">
                04
              </h2>
              <h2 className="text-white opacity-80 text-lg sm:text-xl md:text-2xl ml-6 md:ml-24 lg:ml-24 lg:text-[36px] font-medium">
                Pro and Lesson Management
              </h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className={`cursor-pointer w-6 h-6 sm:w-10 sm:h-10 transform transition-transform duration-300 ${
                  openSections[3] ? "-rotate-45" : ""
                }`}
                onClick={() => toggleSection(3)} // Toggle the 4th section
              />
            </div>
          </div>
          {openSections[3] && (
            <div className="mt-4 md:mt-6 flex">
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-[18px] font-semibold text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80 text-xs sm:text-sm md:text-base">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* WHY CHOOSE US */}
      <div
        style={{
          backgroundImage: `url(${cricket_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "80vh",
          height: "max-content",
          width: "100%",
        }}
      >
        <div className="flex flex-col justify-center items-center align-middle h-full px-4 sm:px-8 md:px-16">
          <div className="text-center mt-10 sm:mt-10 md:mt-10 ">
            <h2 className="uppercase text-[32px] sm:text-[42px] font-[700] text-white mb-[15px] font-beVietnam">
              why choose <span className="text-[#A2DF00]">us ?</span>
            </h2>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[18px] sm:text-[22px] font-[400] w-full mt-[2rem]">
              Dive Into our exclusive features and join with us and <br />{" "}
              elevate your sporting experience
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center items-center mt-10 sm:mt-16">
            <div className="w-1/2 sm:w-1/4 md:w-1/4">
              <img src={safer} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 sm:w-1/4 md:w-1/4">
              <img src={cloud} alt="" className="w-full h-auto" />
            </div>
            <div className="w-1/2 sm:w-1/4 md:w-1/4">
              <img src={faster} alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      {/* GET IN TOUCH */}
      <div className="bg-black h-max-content">
        <div className="p-6 md:p-12 lg:p-16 flex flex-col mx-4">
          <div className="uppercase text-white text-[14px] font-[700] mb-4">
            contact us
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            <div className=" w-full lg:w-1/2 ">
              <h2 className="uppercase text-[28px] sm:text-[36px] lg:text-[42px] font-[700] text-white mb-6 font-beVietnam">
                get in touch with <br />
                <span className="text-[#A2DF00]">us ?</span>
              </h2>
              <p className="text-[#FFFFFFCC] text-opacity-80 text-[16px] sm:text-[18px] lg:text-[22px] font-[400] w-full lg:w-[80%] mb-8">
                Have questions? Get in touch with us and our team will answer
                your queries within 48 hours.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <img src={location} alt="" />
                <p className="text-white text-[14px] sm:text-[16px] ">
                  11792 London Rd, Derby, OH 43117, US
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <img src={mobile} alt="" />
                <p className="text-white text-[14px] sm:text-[16px]">
                  +1 940 365 46 73
                </p>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <div className="-ml-[5px]">
                  <img src={mail} alt="" />
                </div>
                <p className="text-white text-[14px] sm:text-[16px] ">
                  info@bookthecourt.com
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[40%] flex flex-col gap-10">
              <form onSubmit={onSubmit}>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4">
                      <img src={contact_name} alt="" />
                      <label className="text-white font-[400] text-[14px] sm:text-[16px]">
                        Name
                      </label>
                    </div>
                    <input
                      type="text"
                      name="name" // ✅ Add name attribute
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-b border-opacity-30 border-white text-white w-full py-2 focus:border-none focus:outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4">
                      <img src={contact_mail} alt="" />
                      <label className="text-white font-[400] text-[14px] sm:text-[16px]">
                        Email
                      </label>
                    </div>
                    <input
                      type="text"
                      name="email" // ✅ Add name attribute
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-b border-opacity-30 border-white text-white w-full py-2 focus:border-none focus:outline-none"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 mb-12">
                  <div className="w-full md:w-1/2">
                    <div className="flex gap-1 flex-col">
                      <div className="flex gap-6">
                        <img src={contact_phone} alt="" />
                        <label className="font-beVietnam text-[16px] flex flex-col text-white">
                          Phone:
                        </label>
                      </div>

                      <PhoneInput
                        country={"ca"}
                        value={phoneNumber.number}
                        onChange={handlePhoneNumber}
                        inputProps={{ required: true, name: "phoneNumber" }}
                        containerStyle={{
                          color: "white",
                          marginBottom: "10px",
                          marginTop: "5px",
                          zIndex: "50",
                        }}
                        inputStyle={{
                          backgroundColor: "black",
                          border: "none",
                          borderBottomColor: "grey",
                          color: "white",
                          width: "95%",
                        }}
                        buttonStyle={{
                          backgroundColor: "inherit",
                        }}
                        dropdownStyle={{
                          backgroundColor: "inherit",
                          border: "none",
                          color: "white",
                          maxHeight: "40px", // Adjust this to fit one row
                          overflowY: "auto", // Enable scrolling if more options exist
                        }}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-4">
                      <img src={contact_messege} alt="" />
                      <label className="text-white font-[400] text-[14px] sm:text-[16px]">
                        Subject
                      </label>
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-transparent border-b border-opacity-30 border-white text-white w-full py-2 focus:border-none focus:outline-none"
                      placeholder="Enter your subject"
                    />
                  </div>
                </div>

                <div className="mt-4 ">
                  <div className="flex items-center gap-4 ">
                    <img src={contact_pen} alt="" />
                    <label className="text-white font-[400] text-[16px]">
                      How can we help you? Feel free to get in touch!
                    </label>
                  </div>
                  <textarea
                    className="bg-transparent border-b border-opacity-30 border-white text-white w-full py-2 focus:border-none focus:outline-none"
                    rows="4"
                    name="message"
                    onChange={handleChange}
                    value={formData.message}
                  />
                </div>

                {/* Button and aggree */}
                <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-2 gap-6 w-full">
                  <div className="bg-black flex items-center justify-center p-1 sm:p-1 rounded-2xl gap-2 border border-white border-opacity-30 w-full sm:w-auto">
                    <img src={lockin} alt="" />
                    <button className="text-[#A2E000] font-bold text-[12px] sm:text-[14px] md:text-[16px] text-center">
                      Get In Touch
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-white text-[12px] sm:text-[14px] md:text-[16px] w-full sm:w-auto text-center md:text-left">
                    <input
                      type="checkbox"
                      name="isChecked"
                      checked={formData.isChecked}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="leading-tight">
                      I agree that my data is
                      <a href="#" className="underline ml-1">
                        collected and stored
                      </a>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* OUR FACILITIES */}
      <div
        className="flex justify-center items-center relative w-full min-h-[70vh] py-10 px-4 md:px-8"
        style={{
          backgroundImage: `url(${facilities})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Image & Green Box Container */}
        <div className="relative w-full max-w-8xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side (Image & Green Box) */}
          <div className="relative w-full md:w-2/3 ">
            <img
              src={t_ball}
              alt="Tennis Ball"
              className="w-full md:w-full max-w-[350px]"
            />
            <div className="absolute bg-[#AFD639] w-[90%] max-w-[24rem] h-auto p-6 sm:p-10 flex flex-col gap-4 left-1/2 md:left-1/3 transform -translate-x-1/2 bottom-[-1.5rem] sm:bottom-[-4rem] md:bottom-[-4rem] shadow-lg">
              {/* Tennis Icon */}
              <div>
                <img src={t_bat} alt="" />
              </div>
              {/* Text Content */}
              <p className="text-black text-sm sm:text-base">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia. Quia voluptas sit
                aspernatur aut odit aut fugit.
              </p>
              {/* Arrow Icon */}
              <span className="text-black text-lg">→</span>
            </div>
          </div>

          {/* Right Side  */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="uppercase text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white mb-4 mt-4 font-beVietnam">
              our <span className="text-[#A2DF00]">facilities</span>
            </h2>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[16px] mt-6 sm:text-[20px] md:text-[22px] font-normal w-full sm:w-[90%] md:w-[80%] mx-auto md:mx-0">
              Explore the sporting facilities we provide and enhance your
              sporting experience with us.
            </p>
            <div className="text-[#898989] text-[22px] sm:text-[30px] md:text-[37px] uppercase mt-6 font-semibold cursor-pointer">
              <p className="hover:text-white transition-all duration-300">
                tennis
              </p>
              <p className="hover:text-white transition-all duration-300">
                football
              </p>
              <p className="hover:text-white transition-all duration-300">
                badminton
              </p>
              <p className="hover:text-white transition-all duration-300">
                cricket
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Business;
