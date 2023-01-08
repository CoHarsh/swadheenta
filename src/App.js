
import './App.css';
import Events from './Pages/Events';
import MainPage from './Pages/MainPage'
import Aboutus from './Pages/Aboutus';
import Grids from './Pages/Grids';
import Grids2 from './Pages/Grids2';
import Grids3 from './Pages/Grids3';
// import Sponsors from './Pages/Sponsors';

// import images
 

function App() {
  return (
    <div className="App">
        <MainPage />
        <Grids />
        <Events />
        <Grids2 />
        <Aboutus />
        <Grids3 />
    </div>
  );
}

export default App;
