import React, { useRef } from 'react';
// import reactDOM from "react-dom"; Version 17~
import { createRoot } from 'react-dom/client'; // version 18^
import './index.scss';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';

function App() {
  return (
    <div className="app">
      <div><About /></div>
      <div><Projects /></div>
      <div><Contact /></div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')); // version 18^
// reactDOM.render(<App />, document.getElementById("root")); Version 17~
root.render(<App />); // Version 18^
