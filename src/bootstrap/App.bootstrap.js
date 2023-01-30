import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav} from 'react-bootstrap'
import Users from "./Users";
import About from "./About";

export default function AppBootstrap(){

    return(
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
               < Navbar.Brand>WebDev Blog</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav"/>
                    <Nav>
                        <Nav.Link>Home </Nav.Link>
                        <Nav.Link>Users </Nav.Link>
                        <Nav.Link>About </Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="mr-2">Log In</Button>
                        <Button variant="primary">Sign Out</Button>
                    </Nav>
                
            </Navbar>
            <div>
                
            </div>
            <div>
                <Button variant="primary" >Web Dev Blog</Button>
            </div>
        </>
    )
}