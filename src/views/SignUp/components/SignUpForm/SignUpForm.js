import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// import validate from 'validate.js';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import InputMask from "react-input-mask"; 
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link,
  CircularProgress
} from '@material-ui/core';

import { useRouter } from 'hooks';

const useStyles = makeStyles(theme => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  policy: {
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const SignUpForm = props => {

  const { className, ...rest } = props;

  const classes = useStyles();
  const { history } = useRouter();

  const [formValid, setFormValid] = useState(false); 
  const [phoneValid, setPhoneValid] = useState(false); 
  const [emailValid, setEmailValid] = useState(false); 
  const [codeValid, setCodeValid] = useState(false); 
  const [isLoading, setIsLoading] = useState(false); 
  const [checked, setChecked] = useState(false); 
  const [account, setAccount] = useState(false); 
  
  const [code, setCode] = useState('');

  const handleSubmit = async event => { 
    event.preventDefault(); 

    // HERE SHOULD BE REG REQUEST TO SERVER 
    if (codeValid && phoneValid && emailValid && checked) { 
 
      setAccount(true)
      
      setTimeout(()=>{
        setAccount(false)
      },3000)
    } 
  }; 

  const phoneChange = event => { 
    const val = event.target.value 

    // CHECK SPACES QUANTITY EQUALS 3 (MASK) 
    setPhoneValid(val && val.match(/ /g).length === 3) 
  } 

  const codeChange = event => { 

    // ONLY DIGITS 0-8 length 
    if (/^[0-9]{0,6}$/.test(event.target.value)) { 
      setCode(event.target.value) 
      setCodeValid(event.target.value.length === 6) 
    } else { 
      event.target.value = code 
    } 
  } 

  const emailChange = event => { 

    // EMAIL VALIDATION
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(event.target.value)) { 
      setEmailValid(true)
    } else { 
      setEmailValid(false)
    } 
  } 

  const sendCode = _ => {
    setIsLoading(true)

    setTimeout(()=>{
      setIsLoading(false)
    },3000)
  }
  

  const checkboxChange = event => {
    setChecked(!checked)
  }

  useEffect(() => { 
    setFormValid(codeValid && phoneValid && emailValid && checked) 
  },[codeValid, phoneValid, emailValid, checked])

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <InputMask 
        mask="+7 (999) 999 9999" 
        maskChar=" " 
        onChange={phoneChange} 
        > 
          {() => <TextField 
          fullWidth 
          label="Номер телефона" 
          variant="outlined" 
          margin="normal" 
          type="text" 
          />} 
        </InputMask> 
        <TextField
          fullWidth
          label="Email адрес"
          name="email"
          onChange={emailChange}
          variant="outlined"
        />
        <div style={{ display: "flex" }}> 
          <TextField 
          style={{ 
            display: "flex", 
            width: "70%" 
          }}  
          label="Код" 
          name="code" 
          onChange={codeChange} 
          type="password" 
          variant="outlined" 
          /> 
          <Button 
          style={{ 
            display: "flex", 
            width: "30%", 
            marginLeft: 15, 
            padding: 0, 
            fontSize: 12 
          }} 
          color="secondary"
          onClick={sendCode}
          disabled={isLoading}
          variant="contained" 
          > 
            <span style={{display: isLoading ? 'none' : 'inline' }} >Отправить код снова</span>
            <CircularProgress style={{display: isLoading ? 'block' : 'none' }} className={classes.progress} color="secondary" />
          </Button> 
        </div> 
        <div>
          <div className={classes.policy}>
            <Checkbox
              checked={checked}
              color="primary"
              name="policy"
              onChange={checkboxChange}
            />
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Я прочитал{' '}
              <Link
                color="secondary"
                component={RouterLink}
                to="#"
                underline="always"
                variant="h6"
              >
                Условия использования
              </Link>
            </Typography>
          </div>
        </div>
      </div>
      <Button
        className={classes.signUpButton}
        style={{
          padding: account ? '5px 24px' : '8px 24px'
        }}
        color="secondary"
        disabled={!formValid || account}
        size="large"
        type="submit"
        variant="contained"
      >
        <span style={{display: account ? 'none' : 'inline' }} >Создать аккаунт бесплатно</span>
        <CircularProgress
        style={{
          display: account ? 'block' : 'none',
          width: 32,
          height: 32,
          color: "#fff"
        }}
        color="secondary" />
      </Button>
    </form>
  );
};

SignUpForm.propTypes = {
  className: PropTypes.string
};

export default SignUpForm;
