import React from 'react';
import './styles/tailwind.css';
// import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Course from './pages/Course'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/about" component={About} />
        {/* <Route component={NotFound}/> */}
      </Switch>
    </Router>
  );
}

export default App;
