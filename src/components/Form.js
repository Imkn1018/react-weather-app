export const Form = (props) => {
  const {city, getWeather, setCity} = props;
  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="city name"
        onChange={(e) => setCity(e.target.value)}
      />
      {city}
      <button type="submit" onClick={getWeather}>
        Get Weather
      </button>
    </form>
  );
};
