import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Css from './components/css/Css';
import FileNotFound from './components/Filenotfound/FileNotFound';
import Home from './components/home/Home';
import Html from './components/html/Html';
import Javascript from './components/js/Javascript';
import Reac from './components/react/Reac';
import Nav from './Navbar/Nav';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/html-projects' element={ <Html /> } />
        <Route path='/css-projects' element={ <Css /> } />
        <Route path='/js-projects' element={ <Javascript /> } />
        <Route path='/react-projects' element={ <Reac /> } />
        <Route path='*' element={ <FileNotFound /> } />
      </Routes>
    </Router>
  )
}

export default App