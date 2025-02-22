import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import go from "../assets/go.png";
import heart from "../assets/heart.png";
import share from "../assets/share.png";
const EventCards = ({ image, title, location, likes, shares }) => {
  return (
    <div className="flex-1 bg-inherit p-4">
      <div className="w-full">
        <img src={image} alt={title} className="w-full mb-[15px]" />
      </div>
      <div>
        <h3 className="text-[14px] sm:text-[16px] font-[600] font-beVietnam text-white">
          {title}
        </h3>
        <p className="text-[#98989A] font-[400]">{location}</p>
      </div>
      {/* Likes, Shares, and Book Now Button */}
      <div className="flex flex-wrap sm:flex-nowrap justify-between mt-4  sm:gap-6">
        {/* Likes & Shares */}
        <div className="flex gap-4 w-auto sm:gap-[1.5rem]">
          {/* Likes */}

          <div className="flex bg-[#262626] px-3 sm:px-4 py-2 rounded-2xl gap-2 justify-center items-center border border-opacity-10 border-white">
            <img src={heart} alt="likes" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-[#98989A] text-xs sm:text-sm">{likes}</p>
          </div>
          {/* Shares */}

          <div className="flex bg-[#262626] -ml-2 px-3 sm:px-4 py-2 rounded-2xl gap-2 justify-center items-center border border-opacity-10 border-white">
            <img src={share} alt="shares" className="w-4 h-4 sm:w-5 sm:h-5" />
            <p className="text-[#98989A] text-xs sm:text-sm">{shares}</p>
          </div>
        </div>

        {/* Book Now Button */}

        <div className="flex text-white w-auto sm:w-[40%] px-4  bg-[#262626]    rounded-xl justify-center items-center gap-2 border border-opacity-10 border-white">
          <button className="sm:text-[14px] text-xs">Book Now</button>
          <div>
            <img src={go} alt="go" className=" sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
EventCards.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  shares: PropTypes.number.isRequired,
};

export default EventCards;
