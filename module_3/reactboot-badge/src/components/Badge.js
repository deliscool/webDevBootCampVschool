import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardGroup} from 'react-bootstrap'

function Badge(props){
  return [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
    ].map((variant, idx) =>(
      <CardGroup>
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '5rem' }}
          className="mb-2"
          >
        <Card.Header>Hello! I am {props.firstName} {props.lastName}</Card.Header>
          <Card.Body>
              <Card.Title>Some things about me</Card.Title>
                <span>Favorite Food: {props.favFood}</span>
                <br></br>
                <span>Phone: {props.phoneNumber}</span>
                <br></br>
                <span>Place of Birth: {props.birthPlace}</span>
                <br></br>
                <span>Email: {props.email}</span>
                <br></br>
                <p>{props.info}</p>
          </Card.Body>
        </Card>
      </CardGroup>
  ));
}

export default Badge
