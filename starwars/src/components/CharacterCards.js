import React from 'react';
import "../App.js"
import styled from "styled-components"
import Div from "./Div"


///Style Maker////

function makeStyle(){
    return {
      bigSpan: {
        width: '100%'
      },
      funkySpan : {
        color: `crimson`
      }
  
    }
  }


const CharacterCard = (props) => {
  
    return (
        <Div>
    <div className= "container" style={makeStyle().bigSpan}>
    
          <h2>{props.name}</h2>
          <p>{props.birth_year}</p>
          <p>Eye Color: {props.eye_color} Gender: {props.gender} Height: {props.height}</p>
     </div>
     </Div>
  );
};

export default CharacterCard;