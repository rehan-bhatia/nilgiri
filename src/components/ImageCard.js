import React from 'react'
import {navigate} from "gatsby"
import { Card, Image } from 'semantic-ui-react'

const ImageCard = ({title, desc, dest, link}) => (
  <Card className="grow card bg-white" style={{"margin":"10px", "max-height":"600px", "width":"20vw", "margin-top":"30px"}}>
    <Image src={`${link}`} wrapped ui={false} />
    <Card.Content>
      <h1 class="mt0" style={{"font-size":"2vw"}}>{title}</h1>
      <h2 class="ph2" style={{"font-size":"15px"}}>
        {desc}
      </h2>
    </Card.Content>
    <Card.Content extra>
      <p onClick={()=>navigate(dest)} className="f5 link blue hover-orange">
        Read More
      </p>
    </Card.Content>
  </Card>
)

export default ImageCard;