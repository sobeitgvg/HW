import logo from './logo.svg';
import './App.css';
import {Button} from './components/button/massage';

function App() {

  const buttonTitle = 'H-a-l-l-o';
  const handleBtn = (text) =>{
   alert(`${text}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onButtonClick={handleBtn} title={buttonTitle}/>
      </header>
    </div>
  );
} 

export default App;
