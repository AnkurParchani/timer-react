import React from "react";

export default function Input({
  inputID,
  labelMessage,
  inputType,
  inputPlaceholder,
  isRequired,
  timeType,
}) {
  return (
    <div className="seperateInput">
      <label htmlFor={inputID}>{labelMessage}</label>
      <input
        type={inputType}
        id={inputID}
        placeholder={inputPlaceholder}
        required={isRequired}
        step="any"
      ></input>
      <span> {timeType}</span>
    </div>
  );
}
