import React from 'react';
import logo from './logo.svg';
import Navigation from './components/Navigation';

import './App.css';
import Pag1 from './pages/Pag1';

function App() {
  return (
<>
<Navigation/>
    <Pag1 title='CAPABILITIES' body="Do it right the first time. Save on cost every time."/>
 
</>
   
  );
}

export default App;
