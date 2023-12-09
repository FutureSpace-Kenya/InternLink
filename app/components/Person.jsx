import React from "react";

const Person = ({ imageUrl, name, profession }) => {
  return (
    // add tailwind classes here with the following content : img, name, profession and person
    <div className="person">
      <img className="img" src="imageUrl" alt="name" />
      <h4 className="name">{name}</h4>
      <h4 className="profession">{profession}</h4>
    </div>
  );
};

export default Person;
