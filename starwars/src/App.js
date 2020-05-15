import React, { useState, useEffect } from 'react';
import axios from "axios";
import "reactstrap"
import './App.css';
import CharacterCard from "./components/CharacterCards.js"
import Div from "./components/CharacterCards.js"


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/people/`)
          .then(res => {
            console.log(res.data.results)
            setCharacters(res.data.results)           
          })
          .catch(err => {
            debugger
          })
        }, []);
  

  return (
    <div className="App">
      {
    characters.map((charObj) => {
      return <CharacterCard name={charObj.name} height={charObj.height} birth_year={charObj.birth_year} gender={charObj.gender} eye_color={charObj.eye_color} />
     })  
      }
       
    </div>
  );
}

export default App;
