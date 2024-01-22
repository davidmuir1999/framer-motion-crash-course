import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicsOfMotion from './Components/BasicsOfMotion';
import Gestures from './Components/Gestures';
import AnimationControls from './Components/AnimationControls';
import '../src/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BasicsOfMotion/> */}
    {/* <Gestures/> */}
    <AnimationControls/>
  </React.StrictMode>
);
