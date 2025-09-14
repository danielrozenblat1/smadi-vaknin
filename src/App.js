import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import AboutMe from './components/me/Me';
import Works from './components/recommends/Works';
import RecommendsScreen from './components/RecommendsScreen/RecommendsScreen';
import ThirdScreen from './screens/ThirdScreen';

import ByMe from './components/ByMe/ByMe';
import ForthScreen from './screens/ForthScreen';

function App() {
  return <>
  <FirstScreen/>
  <SecondScreen/>
  <AboutMe/>
  <Works/>
  <RecommendsScreen/>
  <ThirdScreen/>
  <ForthScreen/>
  <ByMe/>
  </>
}

export default App;
