import {useEffect, useState} from 'react';
import MyNavbar from '../components/navBar';
import Header from '../components/headerComponent';
import MyCard from '../components/cardComponent';
import MyFooter from '../components/footerComponent';
import { Container, Row, Col } from 'react-bootstrap';
interface News {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
  }
  

const NewsPage = () => {
    const [myNews, setMyNews] = useState<News[]>([]);
  
    useEffect(() => {
      fetch('https://saurav.tech/NewsAPI/everything/cnn.json')
        .then(response => response.json())
        .then(data => {
          setMyNews(data.articles);
          console.log("All things are fetched and ready for display");
        })
        .catch(error => console.error(error));
    }, []);
  
    return (
      <>
        <MyNavbar />
        <Header />
  
        <Container>
          <Row>
            {myNews.map((a, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3} className="mb-4">
                {/* Added 'mb-4' class for margin-bottom */}
                <MyCard
                  title={a.title}
                  description={a.description}
                  url={a.url}
                  urlToImage={a.urlToImage}
                />
              </Col>
            ))}
          </Row>
        </Container>
  
        <MyFooter />
      </>
    );
  };
  
  export default NewsPage;
  