import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { getCountries, getCountryCallingCode } from "libphonenumber-js/max";
import { ChevronDown, Contact, LocateIcon, Mail } from "lucide-react";
import Footer from "../components/Footer";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
// Get all countries and their data
const getFlagEmoji = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};
const countries = getCountries()
  .map((country) => ({
    code: `+${getCountryCallingCode(country)}`,
    name:
      new Intl.DisplayNames(["en"], { type: "region" }).of(country) || country,
    id: country,
    flag: getFlagEmoji(country),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    comments: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((c) => c.id === "US") || countries[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      ...formData,
      phoneWithCode: `${selectedCountry.code}${formData.phone}`,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (e) => {
    const country =
      countries.find((c) => c.id === e.target.value) || countries[0];
    setSelectedCountry(country);
  };

  return (
    <div className="">
      <div className="bg-black">
        <Navbar />
      </div>

      <div className="bg-[#FFFFFF]">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 mt-[2rem]">
          Contact Information
        </h1>
        <div className=" w-full justify-center flex">
          <div className="md:flex max-w-7xl md:justify-between w-full p-8 md:gap-4 flex-wrap flex gap-4">
            <div className="flex items-center gap-4 p-6 bg-[#F9F9F6] flex-1">
              <div className="p-3 rounded-full bg-gradient-to-r from-[#006177] via-[#269089] to-[#7ABC82]">
                <Mail className="text-white" />
              </div>
              <div className="flex flex-col gap-2 text-[#71788A] font-beVietnam font-[500]">
                <p className="text-gray-800 font-semibold text-lg">
                  Email Address
                </p>
                <p className="text-gray-600">samrath@Bookthecourts.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-[#F9F9F6] flex-1">
              <div className="p-3 rounded-full bg-gradient-to-r from-[#006177] via-[#269089] to-[#7ABC82]">
                <Phone className="text-white" />
              </div>
              <div className="flex flex-col gap-2 text-[#71788A] font-beVietnam font-[500]">
                <p className="text-gray-800 font-semibold text-lg">
                  Phone Number
                </p>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-[#F9F9F6] flex-1">
              <div className="p-3 rounded-full bg-gradient-to-r from-[#006177] via-[#269089] to-[#7ABC82]">
                <MapPin className="text-white" />
              </div>
              <div className="flex flex-col gap-2 text-[#71788A] font-beVietnam font-[500]">
                <p className="text-gray-800 font-semibold text-lg">Address</p>
                <p className="text-gray-600">123 Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full mx-auto px-8   mt-[4rem] p-8 bg-[#F9F9F6] flex flex-col justify-center align-middle">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 mt-[2rem]">
          Reach out to us and let's smash your inquiries
        </h1>
        <div className="w-full justify-center flex ">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-[#FFFFFF] max-w-7xl p-8 "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3 rounded-md shadow-sm focus:outline-none   bg-[#FAFAFA]"
                  placeholder="Enter First Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#FAFAFA]"
                  placeholder="Enter Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-3  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#FAFAFA]"
                  placeholder="Enter Email Address"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 md:flex gap-2 flex flex-col ">
                  <div className="md:w-1/3 w-full">
                    <select
                      value={selectedCountry.id}
                      onChange={handleCountryChange}
                      className="block w-full px-3 py-3 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-black appearance-none pr-8 relative"
                    >
                      {countries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name} <ChevronDown />
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">
                        {selectedCountry.code}
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-12 pr-3 py-3  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#FAFAFA] placeholder:pl-2"
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-3  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#FAFAFA]"
                placeholder="Enter Subject"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Comments <span className="text-red-500">*</span>
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full px-3 py-3  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-[#FAFAFA]"
                placeholder="Enter Comments"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                *Only 10000 characters are allowed!
              </p>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactus;
