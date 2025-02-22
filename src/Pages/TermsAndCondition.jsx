import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsAndCondition = () => {
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="pl-[15%] pr-[15%] mx-auto mt-[2rem] mb-[2rem] font-beVietnam">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>

        <h2 className="text-xl font-bold mt-4 mb-4">Introduction</h2>
        <p className="text-black/50 font-[500]">
          Welcome to the Royal Badminton Club. By accessing or using our website
          and services, you agree to comply with and be bound by the following
          terms and conditions.
        </p>

        <h2 className="text-xl font-bold mt-4">Booking Rules</h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            <strong>Slot Reservation:</strong> Slots can be reserved on an
            hourly basis. (No 30-minute slots)
          </li>
          <li>Reservations can be made through our online booking system.</li>
          <li>
            <strong>Slot Availability:</strong> First-come, first-served basis.
          </li>
          <li>
            The club reserves the right to cancel or modify reservations due to
            unforeseen circumstances.
          </li>
          <li>
            <strong>Payment:</strong> Payments must be made at the time of
            booking.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">
          Cancellations and Refunds
        </h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            Members may cancel reservations up to 48 hours in advance without
            penalty.
          </li>
          <li>Cancellations within 48 hours may be subject to a fee.</li>
          <li>Refunds will be processed as per the club’s refund policy.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">Court Rental</h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            Court rental fee must be paid at least 48 hours before booking.
          </li>
          <li>
            All booking cancellations and refunds require 48 hours' notice.
          </li>
          <li>Only proper badminton shoes are allowed on courts.</li>
          <li>Maximum of 6 people per court.</li>
          <li>Non-club coaches or multi-shuttle training are not allowed.</li>
          <li>No food or drinks allowed on courts.</li>
          <li>Lost and found items are kept for 2 weeks.</li>
          <li>Smoking, e-cigarettes, and pets are not allowed in the club.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">
          Private Lessons & Team Training
        </h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>All courses are non-transferable and non-refundable.</li>
          <li>48 hours’ notice required for cancellation.</li>
          <li>Missed lessons will still be deducted.</li>
          <li>
            Team training packages must be used within the designated time.
          </li>
          <li>
            Team training discount applies only for full semester purchases.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">Code of Conduct</h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            Members must behave respectfully and sportsmanlike at all times.
          </li>
          <li>
            Harassment, abuse, or unsportsmanlike conduct may result in
            suspension or termination.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">Liability</h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            The club is not responsible for personal injury, loss, or property
            damage.
          </li>
          <li>Members participate at their own risk.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">Privacy Policy</h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>
            The club protects member privacy and does not share personal
            information without consent.
          </li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">Amendments</h2>
        <ul className="list-disc pl-6 text-black/50 font-[500]">
          <li>The club reserves the right to amend these terms at any time.</li>
          <li>Members will be notified via email or website announcements.</li>
        </ul>

        <h2 className="text-xl font-bold mt-4 mb-4">Contact Information</h2>
        <p>
          Email:{" "}
          <span className="text-blue-600">samrath@Bookthecourts.com</span>{" "}
        </p>
        <p>
          Phone: <span className="text-blue-600">+1 905-960-4881</span>{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndCondition;
