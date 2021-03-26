import React from 'react';
import { theme } from '../themes'
import { Form, Input, Button } from "../elements";

const SignIn = ({ state }) => {
    console.log(state);
    return ( 
        <Form>
            <Input type='text' placeholder='Email' theme={ theme } />
            <Input 
                type='text' 
                placeholder='Password' 
                theme={ theme } 
                style={ state ? { display: 'block' } : { display: 'none' }}
                />
            <Button theme={ theme }>
                { state ? 'SIGN IN' : 'RESET PASSWORD' }
            </Button>
        </Form>
    );
}
 
export default SignIn;