import React from 'react'
import { Card } from 'semantic-ui-react';
import {
  BrowserView,
  MobileView,
} from "react-device-detect"

let position = ["FIRST", "1ST RUNNER UP", "2ND RUNNER UP"]
let images = ["https://i.ibb.co/Fb302RB/1.png", "https://i.ibb.co/2KQ7w9b/2.png", "https://i.ibb.co/281W1Ys/3.png"]

const Award = ({name, rank, team}) => (
  <div>
    <BrowserView>
      <Card className="card tc" style={{"margin":"10px", "height":"500px", "width":"20vw", "margin-top":"30px", "margin-bottom":"30px"}}>
        <img src={images[rank-1]} alt="name" class="grow br-100 pa2" style={{"height":"300px","width":"300px", "margin-right":"auto", "margin-left":"auto", "margin-top":"10px"}}/>              
        <Card.Content>
          <h1 className="dark-blue f3">{position[rank-1]}</h1>
          <h2 className="black f3">
            {team}
          </h2>
        </Card.Content>
        <Card.Content extra>
          <p className="f3 blue">
            {name}
          </p>
        </Card.Content>
      </Card>
    </BrowserView>
    <MobileView>
      <Card className="card tc" style={{"margin":"10px", "height":"500px", "width":"80vw", "margin-top":"30px", "margin-bottom":"30px"}}>
        <img src={images[rank-1]} alt="name" class="grow br-100 pa2" style={{"height":"300px","width":"300px", "margin-right":"auto", "margin-left":"auto", "margin-top":"10px"}}/>              
        <Card.Content>
          <h1 className="dark-blue f3">{position[rank-1]}</h1>
          <h2 className="black f3">
            {team}
          </h2>
        </Card.Content>
        <Card.Content extra>
          <p className="f3 blue">
            {name}
          </p>
        </Card.Content>
      </Card>
    </MobileView>
  </div>
)

export default Award;