import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MyForm = ()=>{
    return (
        <Row className="d-flex justify-content-center m-0 bg-dark text-warning py-5">
            <Form as={Col} lg="5">
                <Row className="my-5 text-center">
                    <h1>Be part of our community.</h1>
                    <p>Register and get updated with our latest products. Be the first to avail and get a chance to win various prices.</p>
                </Row>
                <Form.Group as={Row}>
                    <Form.Label column="lg" lg="3" className="text-end">Name</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder=""></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column="lg" lg="3" className="text-end">E-mail</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder=""></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column="lg" lg="3" className="text-end">Confirm E-mail</Form.Label>
                    <Col>
                        <Form.Control type="text" placeholder=""></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="d-flex align-items-end">
                    <Col lg="12" className="d-flex align-items-end">
                        <Button className="ms-auto">Register</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Row>
    );
}

export default MyForm;