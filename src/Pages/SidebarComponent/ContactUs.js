import React from 'react';
import { Button, Form, FormGroup, Label, Input,  } from 'reactstrap';

const formStyle = {
    margin: '100px',
    border: '2px solid #4285F4',
    padding: '30px',
    borderRadius: '20px',
};

const ContactUs = () => {
    return (
        <Form style={formStyle}>
            <FormGroup>
                <Label for='exampleEmail'>Email</Label>
                <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='enter your email'
                />
            </FormGroup>
            <FormGroup>
                <Label for='examplePassword'>Password</Label>
                <Input
                    type='password'
                    name='password'
                    id='examplePassword'
                    placeholder='enter your password'
                />
            </FormGroup>
            <FormGroup>
                <Label for='exampleSelect'>Select department</Label>
                <Input type='select' name='select' id='exampleSelect'>
                    <option>react</option>
                    <option>node</option>
                    <option>java</option>
                    <option>PHP</option>
                    <option>C++</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for='exampleText'>about your self</Label>
                <Input type='textarea' name='text' id='exampleText' />
            </FormGroup>
            <FormGroup>
                <Label for='exampleFile'>select resume</Label>
                <Input type='file' name='file' id='exampleFile' />
            </FormGroup>

            <Button outline color='primary' size='lg'>
                Submit
            </Button>
        </Form>
    );
};

export default ContactUs;
