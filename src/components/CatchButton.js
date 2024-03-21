import React from "react";

const CatchButton = ({ Catch, NewEncounter }) => {
  return (
    <div className="buttons">
      <button onClick={Catch}>Catch</button>
    </div>
  );
};

export default CatchButton;
