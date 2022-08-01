import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { List } from './pages/List';


function App() {
  return (
    <>
      <Navbar className="mb-3" />
      <Routes>
        <Route 
          path='/' element={ <List /> } 
        />
        <Route 
          path='/about' element={ <About /> }
        />
      </Routes>
    </>

  );
}

export default App;
