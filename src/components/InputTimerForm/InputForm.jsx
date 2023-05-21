import React, { useState } from "react";
import InputContainer from "./InputContainer";
import Button from "./Button";
import Timer from "../TimerContainer/Timer";

export default function InputForm() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [data, setData] = useState({
    totalLaps: null,
    workTime: null,
    restTime: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const [totalTime, workTime, restTime] = e.target;

    // Values are stored inside .value
    const totalWorkSeconds = totalTime.value * 60;
    const workLaps = Math.floor(totalWorkSeconds / (workTime.value * 60));

    setData((prevValue) => {
      return {
        ...prevValue,
        workTime: workTime.value,
        restTime: restTime.value,
        totalLaps: workLaps + (workLaps - 1), // Sending work laps and work - 1 = Rest laps
      };
    });
    setIsPlaying(true);
  }

  return isPlaying ? (
    <Timer
      totalLaps={data.totalLaps}
      workTime={data.workTime}
      restTime={data.restTime}
    />
  ) : (
    <form className="inputForm" onSubmit={(e) => handleSubmit(e)}>
      <InputContainer />
      <Button
        btnClass="actionButton actionButtons inputPausePlayBtn"
        fontAwesomeBtnClass="fa-solid fa-play"
      />
    </form>
  );
}
