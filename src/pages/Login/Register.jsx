import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error.message);
            })

        form.reset();
        console.log(name, photo, email, password);
    }

    const handlerAccept = event => {
        setAccept(event.target.checked)
        console.log(event.target.checked)
    }   

    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='photo' required placeholder="Enter photo url" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" required name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button>
                <br />
                <Form.Group onClick={handlerAccept} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox"
                        name='accept'
                        label={<>Accept <Link to="/terms">terms and conditions</Link></>} required />
                </Form.Group>
                <br />
                <Form.Text className="text-secondary">
                    Already have an account?<Link to='/login'>Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-danger">

                </Form.Text>
                <br />
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;