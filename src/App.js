import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Wellcome page/Navbar';
import WelcomeBody from './Page/Wellcome page/WelcomeBody';
import Advertisement from './Component/Advertisement/Advertisement';
import Slider from './Component/Slider/Slider';
import Header from './Component/Header/Header';
import CarAdd from './Component/Car-add/CarAdd';
import Search from './Component/Search-panel/Search';


function App() {
  return (
    <>
      {/* <Navbar/>
      <WelcomeBody/>
      
      <Advertisement size='900x250'>
        <img src='welcomeImage.jpg'/>
      </Advertisement>
      <Advertisement size='600x150'>
        <img src='welcomeImage.jpg'/>
      </Advertisement>
      <Advertisement size='150x500'>
        <img src='welcomeImage.jpg'/>
      </Advertisement> */}

      {/* <Slider className="welcomePage" time='2500'/>
      <Slider className="Advertisement-900x250" time='5000'/>
      <Slider className="Advertisement-600x150" time='5000'/>
      <Slider className="Advertisement-150x500" time='4000'/>
       */}

      {/* <Header/> */}
      {/* <CarAdd/> */}
      <Search/>
    </>
  );
}

export default App;
