import video from './assets/video/trees-2.mp4';
import logo from './assets/images/web3socialcapital.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <div className='box'>
        <pre className='logo-text'>Web3 Social Capital</pre>
        </div>
        <div className='box'>
        {/* <img className='logo' src={logo}></img> */}
        </div>
      </div>
      <video className='background-video' autoPlay loop muted>
          <source src={video} type='video/mp4' />
      </video>

    </div>
  );
}

export default App;
