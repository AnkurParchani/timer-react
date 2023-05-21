import React from "react";
import Input from "./Input";

export default function InputContainer() {
  return (
    <div className="container inputContainer">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <Input
            inputType="number"
            labelMessage="Total Time:"
            inputID="totalTime"
            inputPlaceholder="0"
            timeType="min"
            isRequired
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <Input
            inputType="number"
            labelMessage="Work Time:"
            inputID="workTime"
            inputPlaceholder="0"
            timeType="min"
            isRequired
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 ">
          <Input
            inputType="number"
            labelMessage="Rest Time:"
            inputID="restTime"
            inputPlaceholder="0"
            timeType="sec"
            isRequired
          />
        </div>
      </div>
    </div>
  );
}
