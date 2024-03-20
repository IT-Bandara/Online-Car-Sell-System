import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Wellcome page/Navbar';
import WelcomeBody from './Page/Wellcome page/WelcomeBody';
import Advertisement from './Component/Advertisement/Advertisement';


function App() {
  return (
    <>
      <Navbar/>
      <WelcomeBody/>
      
      <Advertisement size='900x250'>
        <img src='welcomeImage.jpg'/>
      </Advertisement>
      <Advertisement size='600x150'>
        <img src='welcomeImage.jpg'/>
      </Advertisement>
      <Advertisement size='150x500'>
        <img src='welcomeImage.jpg'/>
      </Advertisement>
    </>
  );
}

export default App;
