import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ImageCard = ({onRouteChange, title, desc, dest}) => (
  <Card className="grow card" style={{"margin":"10px", "max-height":"600px", "min-width":"150px", "margin-top":"30px"}}>
    <Image src={'https://react.semantic-ui.com/images/avatar/large/daniel.jpg'} wrapped ui={false} />
    <Card.Content>
      <h1 style={{"font-size":"2.5vw"}}>{title}</h1>
      <h2 style={{"font-size":"18px"}}>
        {desc}
      </h2>
    </Card.Content>
    <Card.Content extra>
      <p onClick={()=>onRouteChange(dest)} className="f3 link blue hover-orange">
        Read More
      </p>
    </Card.Content>
  </Card>
)

export default ImageCard;