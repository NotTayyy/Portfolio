import '../App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import NamePlate from '../Components/NamePlate';
import HiddenNav from '../Components/HiddenNav';

function App() {
  const [legalName, updateName] = useState([" ", "T", "A", "Y"]);
  const [hover, changeHover] = useState(false);

  const changeName = () => updateName(" Develop");
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
  const toggleNavHov = () => document.body.dataset.navhov = document.body.dataset.navhov === 'true' ? 'false' : 'true';
  
  return (
    <>
    <div className='main' data-nav="false" data-navhov="false">
      <button id='nav-toggle' type='button' onClick={toggleNav} onMouseEnter={toggleNavHov} onMouseLeave={toggleNavHov}>
        <i className='open nav-Arrow'></i>
        <i className='close nav-Close'></i>
        <i className='default nav-Def'></i>
      </button>
      <div className='App'>
        <h3>Welcome!</h3><p>My name is 
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
        <div>developer</div>
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
