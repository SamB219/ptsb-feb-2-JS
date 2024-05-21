import React, { useState } from 'react';
import Signup from './signup/Signup';
import { Container, Col, Row, Button } from 'reactstrap';
import Login from './login/Login';

function Auth(props) {

    const [button, setButton] = useState('Signup');

    const swapForm = () => {
        button === 'Login' ?
            setButton("Signup") :
            setButton('Login');
    }

    const displayForm = () => {
        return(
            button === 'Signup' ?
                <Container>
                <Row>
                <Col md='6'>
                    <Login
                        updateToken={props.updateToken}
                />
                </Col>
            </Row>
                </Container> :
                <Container>
                            <Row>
                            <Col md='6'>
                                <Signup
                                    updateToken={props.updateToken}
                                />
                            </Col>
                        </Row>
                </Container>
        )
    }

    return (
        <>
            <Button onClick={swapForm} color='dark'></Button>
            {displayForm()}
        </>
    )
}

export default Auth