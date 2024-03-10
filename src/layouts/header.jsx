import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mylogo from './../assets/img/imanelogo-removebg-preview.png'

export const Header = () => {
    const textStyle = {
        fontFamily: 'Playfair Display, serif',
        fontSize: '18px',
        fontWeight: '200',
        color: '#333', // Adjust the color as needed
};
    return (
        <div style={textStyle} >
            <Navbar className=' bg-black' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='h-[10vh] ' src={mylogo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" >
                        <span className= '  navbar-toggle-icon'></span>
                        </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white font-extrabold' href="#home">HOME</Nav.Link>
                            <Nav.Link className='text-white font-extrabold' href="#about">ABOUT</Nav.Link>
                            <Nav.Link className='text-white' href="#skills">SKILLS</Nav.Link>
                            <Nav.Link className='text-white' href="#projects">PROJECTS</Nav.Link>
                            <Nav.Link className='text-white d-flex hidden' href="#contact">CONTACT</Nav.Link>
                        </Nav>
                    <button className='text-black bg-amber-400  lg:px-12 py-2 rounded-xl'>Contact Me</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

