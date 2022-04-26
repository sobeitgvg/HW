import logo from './logo.svg';
import './App.css';
import {Button} from './components/button/massage';
import { useState } from 'react/cjs/react.production.min';
import {Form} from './components/form/form'

function App() {
  const [massageList, setMassageList] = useState ([])
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
      <Form/>
      {massageList.map(({massage,author} )=>(
      <div>
        {author}:{massage}
      </div>))}
     </div>
  );
} 

export default App;
