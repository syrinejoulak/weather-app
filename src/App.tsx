import ForcastSwiper from './components/forcastSwiper';
import Temperature from './components/temperature';
import TemperatureSwitcher from './components/temperatureSwitcher';
import SearchBox from './components/searchBox/SearchBox';
import ForcastDate from './components/forcastDate';

function App() {
  return (
    <div className="app">
      <TemperatureSwitcher />
      <SearchBox />
      <Temperature />
      <ForcastSwiper />
      <ForcastDate />
    </div>
  );
}

export default App;
