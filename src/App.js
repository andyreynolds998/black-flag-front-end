import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//components
import HeaderPhoto from './components/headerPhoto/headerPhoto';
import Navbar from './components/navbar/navbar';
import HomePage from './components/homePage/homePage';



function App() {
  return (
    <div className="App">
      <HeaderPhoto></HeaderPhoto>
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
