import * as React from "react";
const Person = ({ picture, text }) => {
  return (
    <div className="avatar">
      <img className="imgSize" src={picture} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default Person;
