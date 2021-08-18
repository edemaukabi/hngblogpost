import React from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
        <h1>THESE ARE LINKS TO SOME IMPORTANT RESOURCES AND THE INTERNSHIP WEBSITE</h1>
        <p><a href="https://internship.zuri.team" target="_blank">Zuri HNG Internship website</a></p>
        <p><a href="https://www.youtube.com/watch?v=g6rQFP9zCAM" target="_blank">Figma tutorial link</a></p>
        <p><a href="https://www.youtube.com/watch?v=RGOj5yH7evk&t=1127s" target="_blank">Git tutorial Link</a></p>
        <p><a href="https://javascript.info/intro" target="_blank">Link to Javascript Course and Tutorial</a></p>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout