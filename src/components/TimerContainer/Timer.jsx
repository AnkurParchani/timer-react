import React, { useEffect, useRef, useState } from "react";
import Button from "../InputTimerForm/Button";
import InputForm from "../InputTimerForm/InputForm";

export default function Timer({ totalLaps, workTime, restTime }) {
  const [count, setCount] = useState(5); // Giving the starting time
  const [isPause, setIsPause] = useState(false);
  const [reset, setReset] = useState(false);
  const [status, setStatus] = useState("Starting in");
  const [laps, setLaps] = useState(totalLaps);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  // Making the count timer
  useEffect(() => {
    // If the timer is not paused, setInterval will run
    if (!isPause) {
      timerRef.current = setInterval(() => {
        setCount((prevValue) => prevValue - 1);
      }, 1000);
    }

    // If the code ignores the If block that means isPause is true
    return () => clearInterval(timerRef.current);
  }, [isPause]); // Change only when isPause is changed

  // Making switch for multiple conditions
  // Change audioRef.current.src = "path to different beep file names"
  useEffect(() => {
    switch (count) {
      case 0:
        if (laps === 0) {
          if (!audioRef.current.paused) {
            audioRef.current.pause();
          }
          audioRef.current.src = "/media/beep-01a.mp3";
          audioRef.current.play();

          clearInterval(timerRef.current);
          setStatus("DONE!");
          setLaps(-1);
        } else if (laps % 2 === 1 && laps > -1) {
          setCount(workTime * 60);
          setLaps(laps - 1);
          setStatus("Work Time");
        } else if (laps % 2 === 0 && laps > -1) {
          setCount(restTime);
          setLaps(laps - 1);
          setStatus("Rest Time");
        }
        break;

      case 2:
        if (laps % 2 === 0 && laps > 0 && audioRef.current.paused) {
          audioRef.current.src = "/media/restAlarm.mp4";
          audioRef.current.play();
        }
        break;

      case 3:
        if (laps % 2 === 1 && laps > -1 && audioRef.current.paused) {
          audioRef.current.src = "/media/workAlarm.mp4";
          audioRef.current.play();
        }
        break;

      default:
        break;
    }
  }, [count, laps]);

  // If user clicks on Reset button
  function handleReset() {
    clearInterval(timerRef.current);
    setReset(true);
  }

  // If user clicks on Restart button
  function handleRestart() {
    clearInterval(timerRef.current);
    setCount(5);
    setStatus("Starting in");
    setLaps(totalLaps);
    setIsPause(true);
  }

  // Returning from Timer
  return reset ? (
    <InputForm />
  ) : (
    <div>
      <h1 className="statusLine">{status}</h1>
      <h1 className="timer">{String(count).padStart(2, "0")}</h1>
      <div className="actionButtons">
        <Button
          fontAwesomeBtnClass={
            isPause ? "fa-solid fa-play" : "fa-solid fa-pause"
          }
          onClick={() => setIsPause(!isPause)}
          btnClass={count === 0 ? "hidden" : "actionButton timerPausePlayBtn"}
        />
        <Button
          fontAwesomeBtnClass="fa-solid fa-rotate-left"
          onClick={handleRestart}
          btnClass="actionButton"
        />
        <Button
          fontAwesomeBtnClass="fa-solid fa-power-off"
          onClick={handleReset}
          btnClass="actionButton"
        />
      </div>
      <audio ref={audioRef} src="/media/beep-01a.mp3" />
    </div>
  );
}
