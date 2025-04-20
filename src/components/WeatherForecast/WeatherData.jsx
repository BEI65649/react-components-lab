

const WeatherData = ({day, conditions, time}) => {

return (
<div className="weather-data">
  <h2>Day:{day}</h2>
  <p><span>conditions: </span>{conditions}</p>
  <p><span>time: </span>{time}</p>
</div>

);
};
export default WeatherData;