import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/loginForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./components/Dashboard";
import ReceptionHome from "./components/receptionHome";





function App() {
  return (
    <div className="App">
      
  <Router>
    <Switch>
      <Route path={"/"} exact component={Login} />
      <Route path={"/Login"} exact component={Login} />
      <Route path={"/Dashboard"} exact component={Dashboard} />
      <Route path={"/Dashboard"} exact component={ReceptionHome} />
   
    </Switch>
    
  </Router>
 
    </div>
    
  );
}

export default App;
