import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';


const RightNav = () => {
    return (
        <div>
            <h4 className='fw-semibold'>Login With</h4>
            <Button className='mb-2 mt-2 w-100' variant="outline-primary"> <FaGoogle /> Log in with Google</Button>
            <Button className='w-100' variant="outline-secondary"> <FaGithub /> Log in with Github</Button>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;