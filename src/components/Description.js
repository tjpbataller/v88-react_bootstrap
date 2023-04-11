import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Zenos from "../assets/images/zenos.png";
import Saitama from "../assets/images/saitama.png";
import Button from "react-bootstrap/Button";

const Description = ()=>{
    return (
        <Row className="p-0 m-0 mx-auto w-75">
            <Col lg="6" className="justify-content-end">
                <img src={Zenos} alt="This is zenos" id="zenos-toy"/>
            </Col>
            <Col lg="6" className="d-flex flex-column justify-content-center">
                <p className="w-50">
                    <h1 className="fs-1 fw-bolder">Toy Store</h1>
                    <p>Buy customized toys in your desired size. We have all sizes including life size!</p>
                    <Button variant="warning">Visit Toy Store</Button>
                </p>
            </Col>
            <Col lg="6" className="d-flex flex-column justify-content-center text-end">
                <p className="w-50 align-self-end">
                    <h1>Manga Store</h1>
                    <p>Buy the latest manga in our store for a discounted price! Up to 30% discount if you buy a bundle!</p>
                    <Button variant="secondary">Buy Manga</Button>
                </p>
            </Col>
            <Col lg="6">
                <img src={Saitama} alt="This is Saitama" className="w-50"/>
            </Col>
        </Row>
    )
}

export default Description;