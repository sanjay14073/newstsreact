import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
