import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Navbar from "./Navbar.js";

function Hero(){
    return (
        <Row className="p-0 m-0" id="hero-section">
            <Navbar />
            <Col className="m-auto mt-0 text-light" lg="6">
                <h1 className="fw-bolder">Welcome to One Store!</h1>
                <p className="w-50 fs-5">We sell everything about "One Punch Man". Figurines, manga, arts, shirts, and many more!</p>
                <Button className="mt-3" variant="danger">Buy Now!</Button>
            </Col>
        </Row>
    )
}

export default Hero;