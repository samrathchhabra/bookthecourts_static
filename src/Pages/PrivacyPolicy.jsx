import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="pl-[15%] pr-[15%]  mx-auto mt-[2rem] text-justify mb-[2rem]">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-black/50 font-[500]">
          At Royal Badminton Club, we are committed to protecting the privacy
          and confidentiality of our website visitors and members. This Privacy
          Policy outlines how we collect, use, disclose, and safeguard your
          personal information when you visit our website or engage with our
          services.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            Personal information collected when you visit our website, register
            for membership, book courts or training sessions, or communicate
            with us.
          </li>
          <li>
            Includes but is not limited to name, contact details, payment
            information, and any other information you voluntarily provide.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>Provide and personalize our services.</li>
          <li>Process bookings and payments.</li>
          <li>
            Communicate with you about your bookings, membership, or inquiries.
          </li>
          <li>Improve our website, services, and customer experience.</li>
          <li>Comply with legal and regulatory requirements.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">Photographs and Videos</h2>
        <p className="text-black/50 font-[500]">
          By participating in activities at Royal Badminton Club, you consent to
          the use of your photographs and videos for promotional purposes. We
          may use these images and videos on our website, social media channels,
          marketing materials, and other promotional activities.
        </p>
        <p className="text-black/50 font-[500]">
          If you have any concerns about the use of your images or videos,
          please contact our management team.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          Security of Your Information
        </h2>
        <p className="text-black/50 font-[500]">
          We take reasonable precautions to protect your personal information
          from unauthorized access, use, or disclosure. However, please be aware
          that no method of transmission over the internet or electronic storage
          is 100% secure.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          Handling of Personal Data Complaints
        </h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            Complaints will be acknowledged upon receipt and responded to within
            30 days.
          </li>
          <li>
            Verification of complaint authenticity and contact details will be
            conducted.
          </li>
          <li>Additional information may be requested if required.</li>
          <li>
            Potential solutions such as procedures for access, correction, or
            other remedies will be suggested.
          </li>
          <li>
            If unresolved within 30 days, you may escalate the matter to an
            external dispute resolution scheme.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us</h2>
        <p className="text-black/50 font-[500]">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at{" "}
          <a href="mailto:samrath@Bookthecourts.com" className="text-blue-600">
            samrath@Bookthecourts.com
          </a>
          .
        </p>
        <p className="text-black/50 font-[500]">
          Any legal notices should be mailed to: 40 Holtby Ave, Unit 6,
          Brampton, ON, L6X 2M1.
        </p>

        <h2 className="text-2xl font-bold mt-6">
          Changes to this Privacy Policy
        </h2>
        <p className="text-black/50 font-[500]">
          We reserve the right to update or modify this Privacy Policy at any
          time without prior notice. Changes will be effective immediately upon
          posting on our website.
        </p>
        <p className="text-black/50 font-[500]">
          By using our website or engaging with our services, you consent to the
          terms of this Privacy Policy.
        </p>
        <p className="mt-4 text-gray-500">Last updated: 03rd February, 2024</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
