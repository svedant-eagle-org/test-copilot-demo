import { useState } from "react";
import "./CountDownTimer.css";

const CountDownTimer = () => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(1);
  const [hours, setHours] = useState(1);

  const setTime = (e, id) => {
    if (id === "seconds") {
      console.log(e.target.value);
      setSeconds(e.target.value);
    } else if (id === "minutes") {
      setHours(e.target.value);
    } else if (id === "hours") {
      setMinutes(e.target.value);
    }
  };

  const startTimers = (e) => {
    let timerSeconds = setInterval(() => {
      setSeconds((value) => {
        return value - 1;
      });
    }, 1000);
    let timerMinutes = setInterval(() => {
      setMinutes((value) => {
        return value - 1;
      });
    }, 1000 * 60);
    let timerHours = setInterval(() => {
      setHours((value) => {
        return value - 1;
      });
    }, 1000 * 60 * 60);
  };

  return (
    <div className="main">
      <div class="countdowntimer">Count Down Timer</div>
      <div class="labels">
        <label for="" class="hours">
          Hours
        </label>
        <label for="" class="minutes">
          Minutes
        </label>
        <label for="" class="seconds">
          Seconds
        </label>
      </div>
      <div class="inputs">
        <input
          id="hours"
          type="number"
          class="inputClass hours"
          value={hours}
          onChange={(e) => setTime(e, "hours")}
        />
        <input
          id="minutes"
          type="number"
          class="inputClass minutes"
          value={minutes}
          onChange={(e) => setTime(e, "minutes")}
        />
        <input
          id="seconds"
          type="number"
          class="inputClass seconds"
          value={seconds}
          onChange={(e) => setTime(e, "seconds")}
        />
      </div>
      <div class="buttonClass">
        <button onClick={(e) => startTimers(e)}>Start</button>
        <button>Pause</button>
        <button>Reset</button>
      </div>
    </div>
  );
};
export default CountDownTimer;
