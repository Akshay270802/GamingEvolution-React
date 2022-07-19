import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { HashRouter, BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/pages/Home';


function App() {

  return (

    <HashRouter basename='/'>
        <main style={{ overflow: 'hidden'}}>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path='/' exact component={Home} />
            </Switch>
          </AnimatePresence>
        </main>
    </HashRouter>
  );
}

export default App;


