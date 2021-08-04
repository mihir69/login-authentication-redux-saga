import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';

import Login_css from './Login.module.css';
import logo from '../../Assets/images/logo.png';
import { fatchLoginAuthRequest } from '../../Redux/Actions/Actions';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(fatchLoginAuthRequest(Email,Password))
  }

  return (
    <div className={Login_css.container}>
      <Form className={Login_css.formGroup}>

        <FormGroup>
          <img className={Login_css.logo} src={logo} alt='logo' />
        </FormGroup>
        
        <FormGroup>
          <Label for='exampleEmail'>Email</Label>
          <Input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='enter your email'
          />
        </FormGroup>
        <FormGroup>
          <Label for='examplePassword'>Password</Label>
          <Input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type='password'
            name='password'
            id='examplePassword'
            placeholder=' enter your password '
          />
        </FormGroup>
        <Button
          type='submit'
          onClick={(e) => onSubmitHandler(e)}
          color='primary'
        >
          Login
        </Button>{' '}
        <Button
          type='submit'
          outline 
          color='primary'>
          register
        </Button>
      </Form>
    </div>
  );
};

export default Login;
