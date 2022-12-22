import React, { useEffect, useRef, useState } from 'react';
import video from './assets/video/snow.mp4';
import logo from './assets/images/web3socialcapital.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';



function App() {

  const arrowRef = useRef(null);
  const [originalTop, setOriginalTop] = useState(0);

  useEffect(() => {
    setOriginalTop(arrowRef.current.offsetTop);
  }, []);

  useEffect(() => {
    let top = originalTop;
    const interval = setInterval(() => {
      console.log(top);
      top += -5;
      console.log(top);
      if (top <= 30) {
        top = originalTop;
      }
      arrowRef.current.style.top = top + 'px';
    }, 200);

    return () => clearInterval(interval);
  }, [originalTop]);


  return (
    <>
    <div className="App">
      
      <div className='App-header'>
        <div className='box-logo'>
          <pre className='logo-text'>Web3 Social Capital</pre>
        </div>

        <div className='box-logo'>
          <a href='mailto:zoz@web3socialcapital.xyz'><EmailIcon style={{ color: 'white' }}/></a>
          <a href='https://twitter.com/W3S0C'><TwitterIcon style={{ color: 'white' }}/></a>
        </div>
      </div>

      <video className='background-video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
      </video>
      
      <div className="footer">
        <div ref={arrowRef} id="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="48" width="48">
            <path d="M22.5 42V11.7L18 16.2l-2.1-2.1L24 6l8.1 8.1-2.1 2.1-4.5-4.5V42Z"/>
          </svg>
        </div>
      </div>

    </div>

    <div className="page-2">
    <div class="container">
      <div class="box box1"><pre><a href='https://thepassivetrust.com/'>The Passive Trust</a> | <b>INFRACSTRUCTURE</b></pre></div>
      <div class="box box2"><pre><a href='https://twitter.com/Explain_like_im'>@Explain_Like_Im</a> | <b>PRODUCT</b></pre></div>
      <div class="box box3"><pre><a href='https://prezenti.xyz'>Prezenti</a> | <b>CURATION</b></pre></div>
      <div class="box box4"></div>
    </div>
    </div>
    </>
  );
}

export default App;
