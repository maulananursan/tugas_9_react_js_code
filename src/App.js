import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import PageNav from './component/PageNav';
import PageBread from './component/PageBread';
import PageSpinner from './component/PageSpinner';
import PageTablePagnation from './component/PageTablePagnation';
import PageOverlay from './component/PageOverlay';
import PagePop from './component/PagePop';
import { 
  Row, Col, Container
  } from 'react-bootstrap';


function App() {
  return (
    <>
      <PageNav />
      <Container>
        <Row>
          <Col md={8}></Col>
          <Col md={4}><PageBread/> </Col>
        </Row><br />
        <Row>
          <Col><PageSpinner /></Col>
        </Row>
        <PageTablePagnation />
        <Row>
         <Col md={1}><PageOverlay /></Col>
          <Col md={2}><PagePop /></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
