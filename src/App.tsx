import ForcastSwiper from './components/forcastSwiper';
import Temperature from './components/temperature';
import TemperatureSwitcher from './components/temperatureSwitcher';
import SearchBox from './components/UI/searchBox/SearchBox';

function App() {
  return (
    <div>
      <TemperatureSwitcher />
      <SearchBox />
      <Temperature />
      {/* <ForcastSwiper /> */}
    </div>
  );
}

export default App;
