import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import Header from './components/Headers/header'
import Login from './components/loginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      
  <Router>
    <Switch>
      <Route path={"/"} exact component={Login} />
      <Route path={"/Login"} exact component={Login} />
      <Route path={"/Home"} exact component={Home} />
    </Switch>
  </Router>
    </div>
    
  );
}

export default App;
