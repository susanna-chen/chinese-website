import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './theme/theme';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages";
import Exercises from './pages/Exercises';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import QuizOptions from './components/QuizOptions';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> 
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/exercises/:id">
          <Exercises />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
