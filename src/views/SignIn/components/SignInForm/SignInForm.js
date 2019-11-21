import React, { Component } from 'react';
import clsx from 'clsx'; 
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/styles'; 
import { Button, TextField, CircularProgress } from '@material-ui/core'; 
import InputMask from "react-input-mask"; 
import stores from 'stores';
import Loader from 'components/ThreeDotsLoader'
import Timer from 'components/Timer';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import req from 'request.js';
import notifier from 'stores/notifier';
import history from 'history.js';
 
const styles = theme => ({ 
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
  signUpButton: { 
    marginTop: theme.spacing(2), 
    width: '100%' 
  } 
}); 

let captchaValue = ""
const stages = {
  'phone' : {
    showPhone: true,
    showCode: false,
    button: 'Далее',
    buttonDisableStateName: 'phoneValid'
  },
  'code' : {
    showPhone: false,
    showCode: true,
    button: 'Войти',
    buttonDisableStateName: 'codeValid'
  }
}
const codeExpired = 60000




class SignInForm extends Component { 

  state = {
    phoneValid: false,
    codeValid: false,
    isLoading: false,
    logging: false,
    expired: false,
    showTimer: false,
    code: '',
    stage: 'phone'
  }

  componentDidMount() {
    const { loader } = stores
    if(loader) loader.setShow(false)
    console.log(loader)
  }  

  static getDerivedStateFromProps(props, state) {
    if(localStorage.codeSent
      && ((JSON.parse(localStorage.codeSent) - new Date().getTime()) > 0)){
      return {
        showTimer: true
      }
    }

    return null
  }

  // reCaptcha
  onChange = (value) => {
    if(value) {
      captchaValue = value
      const { stage, codeValid, expired, code } = this.state
      const { userStore } = stores

      switch (stage) {
        case 'phone': {
          axios.post('http://192.168.6.39:1337/api/checkphone', {
          captcha: value,
          phone: '79835000771'
          },{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          })
          .then((res) => {
            if(res && res.status === 200){
              this.setState({
                stage: 'code',
                logging: false
              })
            }
          })
          .catch((err) => {
            if (!err.response) {
              notifier.enqueueSnackbar({
                message: 'Сервер не отвечает',
                options: {
                  variant: 'error',
                  // variant: 'default',
                  autoHideDuration: 10000,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'left'
                  }
                },
              });
              this.setState({ logging: false })
              window.recaptchaRef.current.reset();
              // this.errorStatus = 'Error: Network Error';
            } else {
              console.log(err)
            }
          })
          break;
        }
        case 'code': {
          console.log('onchange')
    
          if(expired) {
            this.setState({ expired: false })
            console.log('OK')
            return
          }

          if(codeValid){
            console.log('Code Valid')
            req.login({
              username: '79835000771',
              password: code
            },{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            })
            .then((res) => {
              if(res.status === 200){
                userStore.setAuth(true)
                history.push('/')
              } else if (res.status === 403) {
                this.setState({ logging: false })
                notifier.enqueueSnackbar({
                  message: 'Нeверный код',
                  options: {
                    variant: 'warning',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'left'
                    }
                  },
                });                
              } else {
                this.setState({ logging: false })
                notifier.enqueueSnackbar({
                  message: 'Сервер не отвечает',
                  options: {
                    variant: 'error',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'left'
                    }
                  },
                });
              }
            })
            .catch((err) => { 
              console.error('ERROR')
              this.setState({ logging: false })
            })
          }
          break;
        }  
        default:
          break;
      }
    }
  }

  // reCaptcha
  onExpired = async () => {
    console.log('expired')
    this.setState({ 
      logging: true,
      expired: true
    })
    await window.recaptchaRef.current.reset();
    
    window.recaptchaRef.current.execute();
  }

  // reCaptcha
  onErrored = () => {
    this.setState({ logging: false })
    notifier.enqueueSnackbar({
      message: 'Проблемы с интернет - соединением',
      options: {
        variant: 'error',
        // variant: 'default',
        autoHideDuration: 10000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left'
        }
      },
    });    
  }

  //#############################################

  handleSubmit = (event) => { 
    event.preventDefault(); 
    const { stage } = this.state
    
    switch (stage) {
      case 'phone':{
        if(this.state[stages[stage].buttonDisableStateName]){
          this.setState({ logging: true })
          window.recaptchaRef.current.execute()
        }
        break;
      }
      case 'code': {
        if(this.state[stages[stage].buttonDisableStateName]){
          console.log('submit')
          this.setState({ logging: true })
          window.recaptchaRef.current.reset();
          window.recaptchaRef.current.execute()
        }
        break;
      }  
      default:
        break;
    }

  }; 


  phoneChange = async(event) => { 
    const val = event.target.value 

    // CHECK SPACES QUANTITY EQUALS 3 (MASK) 
    this.setState({ phoneValid: (val && val.match(/ /g).length === 3) })
  } 


  codeChange = (event) => { 
    const { code } = this.state

    // ONLY DIGITS 0-8 length 
    if (/^[0-9]{0,6}$/.test(event.target.value)) { 
      this.setState({ 
        codeValid: (event.target.value.length === 6),
        code: event.target.value
      })
    } else { 
      event.target.value = code 
    } 
    this.setState({
      showTimer: false
    })
  } 


  sendCode = () => {
    this.setState({ isLoading: true })

    axios.post('http://192.168.6.39:1337/api/getlogincode', {
      phone: '79835000771',
      captcha: captchaValue
    },{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
    .then((res) => {
      if(res && res.status === 200){

        localStorage.codeSent = new Date().getTime() + codeExpired
        notifier.enqueueSnackbar({
          message: 'На ваш номер отправлен СМС Код. Срок действия 60 секунд',
          options: {
            variant: 'success',
            // variant: 'default',
            autoHideDuration: 10000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'left'
            }
          },
        });        
        console.log(res.data.result.password)
        this.setState({ 
          isLoading: false,
          showTimer: true 
        })

      }
    })
    .catch((err) => {
      this.setState({ isLoading: false })
      console.log(typeof err)
      if(err.message === 'Network Error') {
        notifier.enqueueSnackbar({
          message: 'Проблемы с интернет - соединением',
          options: {
            variant: 'error',
            autoHideDuration: 10000,
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'left'
            }
          },
        });         
      }
    })
  }  


  closeTimer = () => {
    console.log('timer closed')
    this.setState({
      showTimer: false
    })
  }


  render() {
    const { className, classes, ...rest } = this.props; 
    const { isLoading, logging, stage, showTimer } = this.state
    
    return ( 
      <>
        <form 
          {...rest} 
          className={clsx(classes.root, className)} 
          onSubmit={this.handleSubmit} 
          > 
          <div className={classes.fields}> 
            {stages[stage].showPhone && <InputMask 
            mask="+7 (999) 999 9999" 
            maskChar=" " 
            onChange={this.phoneChange}
            disabled={stages[stage].phoneDisable}
            > 
              {() => <TextField 
              fullWidth 
              autoFocus
              label="Номер телефона" 
              variant="outlined" 
              margin="normal" 
              type="text"
              disabled={stages[stage].phoneDisable} 
              />} 
            </InputMask>} 
            {stage === 'code' &&
            <div style={{ display: "flex" }}> 
              <TextField 
              style={{ 
              display: "flex", 
              width: "70%" 
              }} 
              autoFocus
              label="СМС Код" 
              name="code" 
              onChange={this.codeChange} 
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
              onClick={this.sendCode}
              disabled={isLoading || logging || showTimer}
              variant="contained" 
              > 
                {showTimer && <Timer closeTimer={this.closeTimer}/>}
                {(!isLoading && !showTimer) && <span>Отправить код</span>}
                {(isLoading && !showTimer) && <CircularProgress className={classes.progress} color="secondary" />}
              </Button> 
            </div>} 
          </div> 
          <div style={{
            display: 'flex',
            margin: '0 -8px'
          }}>
            {stage === 'code' &&
              <Button
                className={classes.signUpButton}
                color="secondary"
                variant="contained"
                style={{
                  width: '35%',
                  height: 42,
                  margin: '15px 8px 0 8px'
                }}
                onClick={() => { window.recaptchaRef.current.reset(); this.setState({ stage: 'phone', phoneValid: false }) }} 
              >НАЗАД</Button>
            } 
            <Button 
            className={classes.signUpButton} 
            color="secondary" 
            size="large" 
            type="submit"
            style={{
              width: stage === 'code' ? '65%' : '100%',
              height: 42,
              margin: '15px 8px 0 8px'
            }} 
            disabled={(!this.state[stages[stage].buttonDisableStateName] || logging || isLoading)} 
            variant="contained" 
            >
              {!logging && stages[stage].button} 
              {logging && <Loader/>} 
            </Button>
          </div>
          </form>
          <ReCAPTCHA
            ref={window.recaptchaRef}
            sitekey="6Ld9K8AUAAAAAMmGOLf25Y6jDTi2vgt5HbK0bMx3"
            onChange={this.onChange}
            onExpired={this.onExpired}
            onErrored={this.onErrored}
            size="invisible"
          /> 
      </>
    ); 
  }
}; 


SignInForm.propTypes = { 
  className: PropTypes.string 
}; 

export default withStyles(styles)(SignInForm);