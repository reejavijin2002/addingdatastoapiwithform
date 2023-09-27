import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./card.css"

const Card1 = ({ data }) => {
  const { name, email, phone, password, picLink } = data;
  return (
    <div className="one">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={picLink} />
      <Card.Body>
        <Card.Title>Personal Details</Card.Title>
        <Card.Text>
        
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Name:{name}</ListGroup.Item>
        <ListGroup.Item>Email:{email}</ListGroup.Item>
        <ListGroup.Item>Phone:{phone}</ListGroup.Item>
        <ListGroup.Item>password:{password}</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Card1;
