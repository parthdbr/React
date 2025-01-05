import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar';
import EnterText from './componants/EnterText';

function App() {
  return (
    <>
      <Navbar />
      <EnterText heading='Enter you text to analyze below'/>
    </>
  );
}

export default App;
