import React, { useRef } from 'react';
// import reactDOM from "react-dom"; Version 17~
import { createRoot } from 'react-dom/client'; // version 18^
import './index.scss';
import About from './about.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import Nav from './navbar.jsx';

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div className="app">
      <div><Nav aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} /></div>
      <div className="sections">
      <div ref={aboutRef}><About /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')); // version 18^
// reactDOM.render(<App />, document.getElementById("root")); Version 17~
root.render(<App />); // Version 18^
