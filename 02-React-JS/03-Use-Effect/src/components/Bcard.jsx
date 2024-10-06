import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title , description , src}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;