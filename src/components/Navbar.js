import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo.png";
import Container from "react-bootstrap/Container";

const MyNavbar = ()=>{
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt="logo of website" src={Logo} width="30px" height="30px" className="d-inline-block align-top" />{' '}One Store
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;