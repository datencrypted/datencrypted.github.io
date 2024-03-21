import React from "react";

const Buttons = ({ Catch, NewEncounter }) => {
  return (
    <div className="buttons">
      <button onClick={Catch}>Catch</button>
      <button onClick={NewEncounter}>New Encounter</button>
    </div>
  );
};

export default Buttons;
