import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage'
import FormPage from './components/FormPage';
import DetailPage from './components/DetailPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage}/>
        <Route path='/home/:id' component={DetailPage}/>
        <Route path='/formPage' component={FormPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
