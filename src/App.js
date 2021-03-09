import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';
import { Navbar } from 'react-bootstrap';

function App() {
  return (

    // <Navbar bg="dark">
    //   <Navbar.Brand href="#home">
    //     <img
    //       src="/logo.svg"
    //       width="30"
    //       height="30"
    //       className="d-inline-block align-top"
    //       alt="React Bootstrap logo"
    //     />
    //   </Navbar.Brand>
    // </Navbar>
    <div className= "container">
      <Router>
        <nav className="nav-style pt-3 p-2 mb-3">
          <ul>
            <li>
              <Link className="nav-style2" to="/home">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
