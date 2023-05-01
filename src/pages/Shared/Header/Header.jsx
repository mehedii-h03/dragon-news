import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";



const Header = () => {

    
    return (
        <Container>
            <div className="text-center my-4">
                <img src={logo} alt="" />
                <p className='text-secondary mt-2 fs-4'><small>Journalism Without Fear or Favour</small></p>
                <p className='fs-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light mb-4 py-4 px-3 rounded-2 mt-3'>
                <Button className='me-2' variant="danger">Latest</Button>
                <Marquee speed={60} className='fw-semibold fs-5'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;