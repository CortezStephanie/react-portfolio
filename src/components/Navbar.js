import React from 'react';
import '../styles/Navbar.css';

function Navbar ({currentPage, handlePageChange}) {
  
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }
  
  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";

   return (
      <div>
        <div className="sidenav" id='mySidenav'>
        <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
          <p id=''>Hi I'm Stephanie</p>
          <img src="/images/me.jpg" alt="Stephanie" id="mepic"/>
          <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}>About</a>
          <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
          <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
          <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}>Contact</a>
          <span style={{fontSize:'30px', cursor:'pointer'}} onclick="openNav()">&#9776; open</span>
        </div>
      </div>
    //  <div className="navContent">
    //  <h1 id="navName">Hi I'm Stephanie</h1>
    //     <ul className="navOptions">
    //     <li>
    //       <a
    //         href="#about" id="aboutlink"
    //         onClick={() => handlePageChange('About')}
    //         // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //         // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //         className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
    //       >
    //         About Me
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#projects" id="aboutlink"
    //         onClick={() => handlePageChange('Projects')}
    //         // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Projects
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#contact" id="aboutlink"
    //         onClick={() => handlePageChange('Contact')}
    //         // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Contact
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#resume" id="aboutlink"
    //         onClick={() => handlePageChange('Resume')}
    //         // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //         // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //         className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Resume
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    )
}

export default Navbar;