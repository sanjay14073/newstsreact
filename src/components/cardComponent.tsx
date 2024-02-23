
import { Card, Button } from 'react-bootstrap';

const MyCard = (props:any) => {
  const { title, description, url, urlToImage } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urlToImage || 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{title || 'Card Title'}</Card.Title>
        <Card.Text>
          {description || "Some quick example text to build on the card title and make up the bulk of the card's content."}
        </Card.Text>
        <Button variant="primary" href={url} target="_blank" rel="noopener noreferrer">
          Read Full Article
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
