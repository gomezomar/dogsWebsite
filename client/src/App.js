import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import HomePage from './components/HomePage/HomePage'
import FormPage from './components/FormPage/FormPage';
import DetailPage from './components/DetailPage/DetailPage';

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
