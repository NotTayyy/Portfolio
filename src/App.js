import './App.css';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

function App() {
  const [legalName, updateName] = useState(["TAY"]);

  const changeName = () => { return updateName("ROBERT") };
  const returnName = () => { return updateName("TAY") };


  return (
    <div className='App'>
        <p>Hello My Name is<a onMouseOver={changeName} onMouseOut={returnName} href='https://github.com/NotTayyy' target='_blank' rel='noreferrer'> {legalName}</a>. I am a..</p>
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
