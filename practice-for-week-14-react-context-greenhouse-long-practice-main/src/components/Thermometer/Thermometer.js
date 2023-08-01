import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import './Thermometer.css';

function Thermometer() {
  const { temperature, setTemperature } = useClimate();
  const [goalTemperature, setGoalTemperature] = useState(temperature)

  useEffect(() => {
    const timerId = setTimeout(()=> {
      if (temperature < goalTemperature) {
        setTemperature(prev => prev + 1);
      } else if (temperature > goalTemperature) {
        setTemperature(prev => prev - 1);
      }
    }, 1000)

    return () => clearTimeout(timerId);
  },[temperature, goalTemperature, setTemperature]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={goalTemperature}
        onAfterChange={(val) => {setGoalTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
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

export default Thermometer;