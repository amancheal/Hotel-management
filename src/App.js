import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/loginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";





function App() {
  return (
    <div className="App">
      
  <Router>
    <Switch>
      <Route path={"/"} exact component={Login} />
      <Route path={"/Login"} exact component={Login} />
      <Route path={"/Dashboard"} exact component={Dashboard} />
   
    </Switch>
  </Router>
    </div>
    
  );
}

export default App;
