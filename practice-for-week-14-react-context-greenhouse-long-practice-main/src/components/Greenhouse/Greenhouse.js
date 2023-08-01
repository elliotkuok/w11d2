import { useTheme } from '../../context/ThemeContext';
import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName } = useTheme()
  // let theme;
  // if (themeName === "day") {
  //   theme = dayImage;
  // } else if (themeName === 'night') {
  //   theme = nightImage;
  // }

  return (
    <section>
      <div>
        {themeName === "day" && <img src={dayImage} alt="DayImage" />}
        {themeName === "night" && <img src={nightImage} alt="NightImage" />}
      </div>
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;

