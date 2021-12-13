import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { useState } from 'react/cjs/react.development';


function App() {

  const [ user, setUser ] = useState()

  //check if we are getting the user object
  console.log("user from app", user)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/login" element={ <LoginPage setUser={setUser} /> } />
        <Route path="/" element={ <HomePage user={user}/> } />
      </Routes>
    </div>
  );
}

export default App;
