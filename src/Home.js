import {Link} from 'react'
import './Home.css';
import dog from './dog.jpeg'
import {Container, Row, Col} from 'react-bootstrap'

export default function App() {
  const name = "asdfsdfas"

  return (
    <div className="App">
      <p className=''>
          is ur bootyhole burning?
      </p>
      <a
        className="App-link"
        href="https://www.everydayhealth.com/digestive-health/soothing-relief-for-anal-discomfort.aspx"
        target="_blank"
        rel="noopener noreferrer"
      >
        make it better
      </a>
      <Container className="gridContainer">
        <Row>
          <Col>1 of 1 {name}
          <img className="dogImg"src={dog} />
            <br />
            <img className="dogImg"src={dog} />
            <br /></Col>
          <Col>
            <img className="dogImg"src={dog} />
            <br />
            <img className="dogImg"src={dog} />
            <br />
            <a href="https://westandwillow.com/products/custom-one-pet-portrait?currency=USD&utm_medium=cpc&utm_source=google&utm_campaign=Google%20Shopping&gclid=Cj0KCQjwvqeUBhCBARIsAOdt45bMQUQYutPx8CALgzdJY4mgXwAs8BwG1HC_MwfYcYAVOleAnxuvVggaAocmEALw_wcB">
            <img className="dogImg"src={dog} />
            <br />
            </a>

            <img className="dogImg"src={dog} />
            <br />
          </Col>
          <Col><img className="dogImg"src={dog} />
            <br />
            <img className="dogImg"src={dog} />
            <br />
            <img className="dogImg"src={dog} />
            <br /></Col>
        </Row>
        <Row>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}
