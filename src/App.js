import './App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import NamePlate from './Components/NamePlate';

function App() {
  const [legalName, updateName] = useState([" ", "T", "A", "Y"]);

  const changeName = () => updateName(" ROBERT");
  const returnName = () => updateName(" TAY");
  const clearName = () => updateName(" ");

  var hover = false;
  
  function nameIn() {
    if (hover == false) {
      hover = true
      clearName();
      setTimeout(() => changeName(), 0.01); 
    }
  }

  function nameOut() {
    hover = false 
    clearName();
    setTimeout(() => returnName(), 0.01);
  }
  
  return (
    <div className='App'>
        <p>Hello My Name is
          <nameplatediv>
            <span>
              <a className='nameGit' onMouseEnter={nameIn} onMouseLeave={nameOut} href='https://github.com/NotTayyy' target='_blank' rel='noreferrer'>
                <NamePlate Names={[...legalName]} />
              </a>
            </span>
          </nameplatediv>
        . I am a..</p>
        <div className='developer-con'>
          <div className='developer'>
            <Typewriter 
              options={{  
                strings: ['Junior Web', 'Front End', 'Full Stack'],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                delay: 150
              }}
            />
          </div>
        <div>Developer</div>
        </div>
    </div>
  );
}

export default App;
