import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
const axios = require('axios')

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios.post('http://localhost:3001/login', {
      username: userName,
      password: password,
    }).then((res) => {
      if (res.data.length === 0) {
        console.log("validation failed!");
      }
      else {
        console.log("successfuly logged in!");
        console.log(res.data);
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>username</p>
        <input 
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <p>password</p>
        <input 
          type="text"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Login</button>
      </header>
    </div>
  );
}

export default App;
