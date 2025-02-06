// Card.js
import React from "react";

const Card = ({ image, title, description, buttonText, titleImg }) => {
  return (
    <div
      className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden h-80 w-full"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between ">
        <div className="flex p-4 flex-col justify-center items-center text-center flex-1">
          {/* <h2 className="text-white text-lg font-bold">{title}</h2> */}
          <img
            src={titleImg}
            alt={title}
            className="h-auto w-2/5 max-w-[70%]"
          />
          <p className="mt-1 text-lg w-[70%] md:w-[60%] md:text-xl text-white font-[400] ">
            {description}
          </p>
        </div>
        <button className="bg-black uppercase text-white h-20 hover:scale-110 w-full  hover:text-xl font-semibold py-2 px-4  hover:bg-[#0d52ff] transition-all  ">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
