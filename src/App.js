import Form from './components/Form';
import athlete from './images/athlete.jpg';
import { useState } from 'react';

function App() {
  const [inputFile, setInputFile] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('file', inputFile);
    loadFile();
  }

  const loadFile = () => {
    console.log(localStorage.getItem('file'));
  }
  return (
    <div className="app">
      <h3>UPLOAD DATA</h3>
      <div className="content-wrapper">
        <Form
          inputFile = {inputFile}
          username = {username}
          setInputFile = {setInputFile}
          setUsername = {setUsername}
          handleSubmit = {handleSubmit}
        />
        <div className='image-wrapper'>
          <img src={athlete} alt="athlete"/>
        </div>
      </div>
    </div>
  );
}

export default App;
