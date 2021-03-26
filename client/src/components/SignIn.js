import React from 'react';
import { theme } from '../themes'
import { Form, Input, Button } from "../elements";

const SignIn = () => {
    return ( 
        <Form>
            <Input type='text' placeholder='Email' theme={ theme } />
            <Input type='text' placeholder='Password' theme={ theme } />
            <Button theme={ theme }>
                SIGN IN
            </Button>
        </Form>
    );
}
 
export default SignIn;