import React from "react";
import InputForm from "./InputTimerForm/InputForm";
import Heading from "./Heading";

export default function App() {
  const requestWakeLock = async () => {
    try {
      // Starting wakeLock for the first time
      wakeLock = await navigator.wakeLock.request("screen");

      // Checking if the user has left the page and returned again, then starting wakelock again
      document.addEventListener("visibilitychange", async () => {
        if (document.visibilityState === "visible" && wakeLock.released) {
          wakeLock = await navigator.wakeLock.request("screen");
        }
      });
    } catch (err) {
      console.error(`${err.name}, ${err.message}`);
    }
  };
  requestWakeLock();

  return (
    <div>
      <Heading />
      <InputForm />
    </div>
  );
}
