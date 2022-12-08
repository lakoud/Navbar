import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import {Link ,Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Podcast from './component/Podcast';
import Actualite from './component/Actualite';
import Organisation from './component/organisation';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
        <Route path='/' component={Home} exact><Home/></Route>
        <Route path='/about' component={About} exact><About/></Route>
        <Route path='/podcast' component={Podcast} exact><Podcast/></Route>
        <Route path='/actualite' component={Actualite} exact><Actualite/></Route>
        <Route path='/organisation' component={Organisation} exact><Organisation/></Route>

      </Switch>
    </Router>
    </>
  );
}

export default App;
