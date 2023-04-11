import React from "react";
import Container from "react-bootstrap/Container";
import Hero from "./Hero.js";
import Description from "./Description.js";
import Form from "./Form.js";

const MyWebsite = ()=>{
    return (
        <Container className="p-0" fluid>
            <Hero />
            <Description />
            <Form />
        </Container>
    )
}

export default MyWebsite;