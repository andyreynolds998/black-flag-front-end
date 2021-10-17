import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//components
import HeaderPhoto from './components/headerPhoto/headerPhoto';
import Navbar from './components/navbar/navbar';
import HomePage from './components/homePage/homePage';
import Class from "./components/class/class";

import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPhoto></HeaderPhoto>
        <Navbar></Navbar>
        
        <Switch>
          <Route path="/home" exact component={HomePage}></Route>
          //<Route path="/classes" exact component={Class}></Route>
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
