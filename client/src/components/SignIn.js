/* eslint-disable no-unused-expressions */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { theme } from '../themes';
import { Form, Input, Button } from "../elements";

const SignIn = ({ state }) => {
    const history = useHistory();
    const location = useLocation();

    /**  Handle user navigation depending on the page they are on*/
    const handleSubmit = (e) => {
        e.preventDefault();

        window.location.hash === '#/reset' ?
        history.push({ 
            pathname: '/', 
            state: { 
                from: location.pathname 
            }
        }) :
        alert('Site Under Construction');
    }

    return ( 
        <Form onSubmit={ handleSubmit }>
            <Input 
                type='email' 
                placeholder='Email' 
                theme={ theme } 
                required
            />
            <Input 
                type='password' 
                placeholder='Password' 
                theme={ theme } 
                style={ state ? { display: 'block' } : { display: 'none' }}
            />
            <Button type='submit' theme={ theme }>
                { state ? 'SIGN IN' : 'RESET PASSWORD' }
            </Button>
        </Form>
    );
}
 
export default SignIn;