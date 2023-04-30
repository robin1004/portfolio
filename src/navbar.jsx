import React from 'react';

function Nav({ aboutRef, projectsRef, contactRef }) {
  const toggleAbout = () => {
    aboutRef.current.scrollIntoView( {behavior: "smooth"});
  };

  const toggleProjects = () => {
    projectsRef.current.scrollIntoView( {behavior: "smooth"});
  };

  const toggleContact = () => {
    contactRef.current.scrollIntoView( {behavior: "smooth"});
  };

  return (
    <nav className="nav">
      <a onClick={toggleAbout}>About</a>
      <a onClick={toggleProjects}>Projects</a>
      <a onClick={toggleContact}>Contact</a>
    </nav>
  );
}

export default Nav;
