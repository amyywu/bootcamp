import {Link} from 'react'
import './Home.css';
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
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}
