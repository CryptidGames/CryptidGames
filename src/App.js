import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import GamePlayVideo from './components/pages/GamePlayVideo';
import Trailer1 from './components/pages/Trailer1';
import Trailer2 from './components/pages/Trailer2';
import Trailer3 from './components/pages/Trailer3';
import Trailer4 from './components/pages/Trailer4';
import Trailer5 from './components/pages/Trailer5';
import Trailer6 from './components/pages/Trailer6';
import Trailer7 from './components/pages/Trailer7';
import Games from './components/pages/Games';
import HC_UAP from './components/pages/HC_UAP';
import RegisterUser from './components/pages/RegisterUser';
import UserCreated from './components/pages/UserCreated';
import SignIn from './components/pages/SignIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={ Home } />
        <Route path='/Home' exact Component={ Home } />
        <Route path='/About' exact Component={ About } />
        <Route path='/GamePlayVideo' exact Component={ GamePlayVideo } />
        <Route path='/Trailer1' exact Component={ Trailer1 } />
        <Route path='/Trailer2' exact Component={ Trailer2 } />
        <Route path='/Trailer3' exact Component={ Trailer3 } />
        <Route path='/Trailer4' exact Component={ Trailer4 } />
        <Route path='/Trailer5' exact Component={ Trailer5 } />
        <Route path='/Trailer6' exact Component={ Trailer6 } />
        <Route path='/Trailer7' exact Component={ Trailer7 } />
        <Route path='/Games' Component={ Games } />
        <Route path='/HC_UAP' Component={ HC_UAP } />
        <Route path='/RegisterUser' Component={ RegisterUser } />
        <Route path='/UserCreated' Component={ UserCreated } />
        <Route path='/SignIn' Component={ SignIn } />
      </Routes>
    </Router>
  );
}

export default App;
