import '../css/WeatherCard.css';

const WeatherCard = ({ weather }) => {
  
  const formatDate = () => {
    const options = { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute:'2-digit' 
    };
    return new Date().toLocaleDateString('en-US', options);
  };

  return (
    <div className="weather-card glass-effect">
        <h2 className="city-name">
            {weather.name}, <span className="country">{weather.sys.country}</span>
        </h2>
        
        <p className="date-time">{formatDate()}</p>
        
        <div className="temp-box">
            <h1>{Math.round(weather.main.temp)}°C</h1>
        </div>

        <h3 className="description">{weather.weather[0].main}</h3>

        <div className="details-row">
            
            {/* Clouds */}
            <div className="detail-item">
                <i className='bx bx-cloud'></i>
                <span>Clouds</span>
                <span>{weather.clouds.all}%</span>
            </div>
            
            {/* Wind */}
            <div className="detail-item">
                <i className='bx bx-wind'></i>
                <span>Wind</span>
                <span>{weather.wind.speed} m/s</span>
            </div>
            
            {/* Visibility */}
            <div className="detail-item">
                <i className='bx bx-show'></i>
                <span>Visibility</span>
                <span>{weather.visibility} m</span>
            </div>
        </div>
    </div>
  );
};

export default WeatherCard;