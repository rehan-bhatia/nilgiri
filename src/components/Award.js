import React from 'react'
import { Card } from 'semantic-ui-react';

let position = ["FIRST", "1ST RUNNER UP", "2ND RUNNER UP"]
let images = ["https://i.ibb.co/Fb302RB/1.png", "https://i.ibb.co/2KQ7w9b/2.png", "https://i.ibb.co/281W1Ys/3.png"]

const Award = ({name, rank, team}) => (
  <Card className="card tc bg-white" style={{"margin":"10px", "height":"500px", "width":"20vw", "margin-top":"30px", "margin-bottom":"30px"}}>
    <img src={images[rank-1]} alt="name" class="grow pa2" style={{"height":"300px","width":"300px", "margin-right":"auto", "margin-left":"auto", "margin-top":"10px", "margin-bottom":"10px"}}/>              
    <Card.Content>
      <h2 className="dark-blue f3 mt0 pt0">{position[rank-1]}</h2>
      <p style={{fontFamily:"Avenir"}} className="black f5 mb3">
        {team}
      </p>
    </Card.Content>
    <Card.Content extra className="tc">
      <p style={{fontFamily:"Avenir", "margin":"auto", "margin-top":"30px"}} className="pt2 bt bw1 w-60 b--dark-blue  f4 dark-blue">
        {name}
      </p>
    </Card.Content>
  </Card>
)

export default Award;