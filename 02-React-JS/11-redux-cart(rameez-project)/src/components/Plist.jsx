import { Button, Card } from 'react-bootstrap';
import React from 'react';

export default function PList({ title, thumbnail, des, func, addCart }) {
  return (
    <Card className='h-100'>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{des}</Card.Text>
        </div>
        <div className="d-flex mt-auto gap-3">
          <Button variant="primary" onClick={func}>Show More</Button>
          <Button variant="primary" onClick={addCart}>Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
