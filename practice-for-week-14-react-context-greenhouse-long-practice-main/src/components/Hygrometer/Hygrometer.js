import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from 'react';
import ReactSlider from "react-slider";
import "./Hygrometer.css";

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [goalHumidity, setGoalHumidity] = useState(humidity);

  useEffect(() => {
    const timerId = setTimeout(()=> {
      if (humidity < goalHumidity) {
        setHumidity(prev => prev + 2);
      } else if (humidity > goalHumidity) {
        setHumidity(prev => prev - 2);
      }
    }, 1000)

    return () => clearTimeout(timerId);
  },[humidity, goalHumidity, setHumidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={goalHumidity}
        onAfterChange={(val) => {setGoalHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;