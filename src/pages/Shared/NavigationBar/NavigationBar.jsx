import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';



const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handlerLogOut = () => {
        logOut()
        .then()
        .catch(err => console.log(err))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fs-5">
                        <Link to="/category/0">Home</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Carrier</Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        {
                            user && <Nav.Link href="#deets">
                                <FaUserCircle className='fs-1'></FaUserCircle>
                            </Nav.Link>
                        }
                        {user ?
                            <Button onClick={handlerLogOut} variant="dark">Logout</Button> :
                            <Link to='/login'>
                                <Button variant="dark">Login</Button>
                            </Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;