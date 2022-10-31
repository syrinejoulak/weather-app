import ForcastSwiper from './components/forcastSwiper';
import Temperature from './components/temperature';
import TemperatureSwitcher from './components/temperatureSwitcher';
import SearchBox from './components/searchBox/SearchBox';
import ForcastDate from './components/forcastDate';
import BarChartContainer from './components/barChart';
import ErrorModal from './components/UI/Modal/ErrorModal';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);

  return (
    <div className="app">
      <TemperatureSwitcher />
      <SearchBox />
      <Temperature />
      <ForcastSwiper />
      <ForcastDate />
      <BarChartContainer />
      {isModalOpen && <ErrorModal />}
    </div>
  );
}

export default App;
