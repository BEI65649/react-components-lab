import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';


const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {

  return (
    <div className="weather">
    <h2>{day}</h2>
    <WeatherData day={day} conditions={conditions} time={time} />
    <WeatherIcon img={img} imgAlt={imgAlt} />
  </div>
);
};
export default WeatherForecast;