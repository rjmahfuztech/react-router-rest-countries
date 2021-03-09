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

function App() {
  return (
    <div className= "">
      <Router>
        <nav className="nav-style pt-3 p-2 mb-3 sticky-top">
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
