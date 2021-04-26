export const Results = (props) => {
  const { results } = props;
  return (
    <div>
      {results.cityName && <div>{results.cityName}</div>}
      {results.country && <div>{results.country}</div>}
      {results.temperature && (
        <div>
          {results.temperature}
          <span>C</span>
        </div>
      )}
      {results.conditionText && (
        <div>
          <img src={results.icon} alt="icon" />
          <span>{results.conditionText}</span>
        </div>
      )}
    </div>
  );
};
