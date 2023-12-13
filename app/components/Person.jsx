import React from "react";
import { imageUrl } from "../assets/images/";

const Person = ({ imageUrl, name, profession }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-24 h-24 rounded-full" src={imageUrl} alt={name} />
      <h4 className="text-lg font-semibold">{name}</h4>
      <h4 className="text-gray-500">{profession}</h4>
    </div>
  );
};

export default Person;
