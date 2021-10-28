import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Developer from './components/Developer';
import Intro from './components/Intro';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
    <Navbar title="Case Converter"/>
    <Switch>
          <Route exact path="/">
          <Intro/>
          </Route>
          <Route exact path="/case-converter">
          <Intro/>
          </Route>
          <Route exact path="/home">
            <TextForm heading="Try Case Converter - word counter, upper/ lower case, remove extra spaces"/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/developer">
            <Developer/>
          </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
