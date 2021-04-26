import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import axiox from 'axios';
import { Title } from './components/Title';
import { Form } from './components/Form';
import { Results } from './components/Results';

function App() {
  const [city, setCity] = useState('');
  const [results, setResults] = useState({
    coutry: '',
    cityName: '',
    temperature: '',
    conditionText: '',
    icon: '',
  });
  const getWeather = (e) => {
    e.preventDefault();
    axiox
      .get(
        `https://api.weatherapi.com/v1/current.json?key=3f741465a2fa4ed38bb60214212604&q=${city}&aqi=no`
      )
      .then((res) => {
        setResults({
          coutry: res.data.location.coutry,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon,
        });
      });
  };
  return (
    <div className="App">
      <Title cityName={city} />
      <Form setCity={setCity} getWeather={getWeather}></Form>
      <Results results={results}/>
    </div>
  );
}

export default App;
