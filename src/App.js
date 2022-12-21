import './App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import NamePlate from './Components/NamePlate';
import HiddenNav from './Components/HiddenNav';

function App() {
  const [legalName, updateName] = useState([" ", "T", "A", "Y"]);
  const [hover, changeHover] = useState(false);

  const changeName = () => updateName(" ROBERT");
  const returnName = () => updateName(" TAY");
  const clearName = () => updateName(" ");
  
  function nameIn() {
    if (hover === false) {
      changeHover(true);
      clearName();
      setTimeout(() => changeName(), 0.1); 
    }
  }

  function nameOut() {
    if (hover === true) {
      changeHover(false);
      clearName();
      setTimeout(() => returnName(), 0.1);
    }
  }

  const toggleNav = () => document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";

  const toggleNavHover = () => { document.body.dataset.navhov = 'true'}
  const toggleNavHoverOff = () => { document.body.dataset.navhov = 'false'}
  
  return (
    <>
    <div className='main' data-nav="false" data-navhov="false">
      <button id='nav-toggle' type='button' onClick={toggleNav} onMouseEnter={toggleNavHover} onMouseLeave={toggleNavHoverOff}>
        <i className='open nav-Arrow'></i>
        <i className='close nav-Close'></i>
      </button>
      <div className='App'>
        <p>Hello! My Name is 
          <nameplatediv>
            <span>
              <a className='nameGit' onMouseEnter={nameIn} onMouseLeave={nameOut}  href='https://github.com/NotTayyy' target='_blank' rel='noreferrer'>
                <NamePlate Names={[...legalName]} />
              </a>
            </span>
          </nameplatediv>
        . I am a..
        </p>
        <div className='developer-con'>
          <div className='developer'>
            <Typewriter options={{ strings:['Junior Web', 'Front End', 'Full Stack'], autoStart: true, loop: true, pauseFor: 1500, delay: 150 }}/>
          </div>
        <div>Developer</div>
        </div>
      </div>
    </div>
    <nav>
      <HiddenNav />
    </nav>
    </>
  );
}

export default App;
