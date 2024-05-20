import React, {useState, useRef } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import FullButton from '../../buttons/FullButton';
import { useNavigate } from 'react-router-dom';


export default function Signup({ updateToken }) {

    // const [ firstName, setFirstName] = useState('');

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(firstNameRef.current.value);

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let bodyObj = JSON.stringify({
            firstName, lastName, email, password
        })

        const url = `http://localhost:4000/user/signup`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // setting our headers to accept the JSON object within the browser

        const requestOption = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const response =  await fetch(url, requestOption);
            const data = await response.json();

            if(data.message === 'Success!') {
                updateToken(data.token);
                navigate('movie');

            } else {
                alert(data.message);
            }

        } catch (err) {
            console.error(err.message);
        }
    }


    return (
        <>

            <h2>Signup Below</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name:</Label>
                    <Input
                        // value={firstName}
                        // onChange={e => setFirstName(e.target.value)}
                        innerRef={firstNameRef}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Last Name:</Label>
                    <Input
                        innerRef={lastNameRef}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Email:</Label>
                    <Input
                        type='email'
                        innerRef={emailRef}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Password:</Label>
                    <Input
                        type='password'
                        innerRef={passwordRef}
                    />
                </FormGroup>
                <FullButton>
                <Button type='submit'>Signup</Button>
                </FullButton>
            </Form>

        </>
)
}


