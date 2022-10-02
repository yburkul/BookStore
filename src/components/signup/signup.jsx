import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { register } from '../service/userService';
const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailIdRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordsRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileNumberRegex = /^[6-9]{1}[0-9]{9}$/;

const useStyle = makeStyles({
  SignUpPageContainer: {
    width: "26vw",
    height: "55vh",
    //  border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  SignUpPage_Image: {
    width: "100%",
    height: "100%",
    // border: "1px solid blue",

  },
  SignUp: {
    width: "100%",
    height: "100%",
    // border: "1px solid blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  SignUp_info: {
    width: "82%",
    height: "90%",
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    left: "5px"
  },
  NameBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    top: "0px",
    fontSize: "12px",
    "& #Name-text": {
      display: "flex",
    }
  },
  EmailBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    top: "10px",
    fontSize: "12px",
    "& #Email-text": {
      display: "flex",
    }
  },
  PasswordBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    top: "20px",
    fontSize: "12px",
    "& #Password-text1": {
      display: "flex"
    },
    "& #Password-text2": {
      display: "flex",
      justifyContent: "flex-end"
    }

  },
  NumberBox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "relative",
    top: "30px",
    fontSize: "12px",
    "& #Number-text": {
      display: "flex"
    }
  },
  Login_Button: {
    width: "100%",
    position: "relative",
    top: "50px",
    "& #signup": {
      textTransform: "none",
      backgroundColor: "#A03037",
    }
  },
  ['@media only screen and (min-width :320px) and (max-width :480px)']: {
    SignUpPageContainer: {
      width: "400px",
      height: "300px",
    },
    SignUpPage_Image: {
      width: "100%",
      height: "100%",  
    },
    SignUp: {
      width: "100%",
      height: "100%",      
    },
    SignUp_info: {
      width: "82%",
      height: "100%",     
      position: "relative",
      left: "10px",
      bottom:"3px",
    },
    NameBox: {
      position: "relative",
      top: "0px",
      "& #full-name":{
        height:"20%",
      }
    },
    EmailBox: {
      position: "relative",
      top: "3px",
      "& #email-name":{
        height:"20%",
      }
    },
    PasswordBox: {
      position: "relative",
      top: "5px",
      "& #pass-box":{
        height:"20%",
      }
  
    },
    NumberBox: {
      position: "relative",
      top: "10px",
      "& #mobile-box":{
        height:"20%",
      }
    },
    Login_Button: {
      position: "relative",
      top: "20px",
    },

  },
  ['@media only screen and (min-width :481px) and (max-width :768px)']: {
    SignUpPageContainer: {
      width: "400px",
      height: "300px",
    },
    SignUpPage_Image: {
      width: "100%",
      height: "100%",  
    },
    SignUp: {
      width: "95%",
      height: "100%", 
      position: "relative",
      top: "10px",     
    },
    SignUp_info: {
      width: "82%",
      height: "100%",     
      position: "relative",
      left: "20px",
    },
    NameBox: {
      position: "relative",
      top: "0px",
    },
    EmailBox: {
      position: "relative",
      top: "10px",
    },
    PasswordBox: {
      position: "relative",
      top: "16px",
    },
    NumberBox: {
      position: "relative",
      top: "25px"
    },
    Login_Button: {
      position: "relative",
      top: "45px",
    },

  },
  ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
    SignUpPageContainer: {
      width: "400px",
      height: "300px",
    },
    SignUpPage_Image: {
      width: "100%",
      height: "100%",  
    },
    SignUp: {
      width: "100%",
      height: "100%", 
      position: "relative",
      top: "10px",     
    },
    SignUp_info: {
      width: "100%",
      height: "100%",     
      position: "relative",
      left: "0px",
    },
    NameBox: {
      position: "relative",
      top: "0px",
    },
    EmailBox: {
      position: "relative",
      top: "15px",
    },
    PasswordBox: {
      position: "relative",
      top: "25px",
    },
    NumberBox: {
      position: "relative",
      top: "40px",
    },
    Login_Button: {
      position: "relative",
      top: "60px",
    },
  }
});


function Signup() {
  const classes = useStyle()
  const [userInputs, setUserInputs] = React.useState({
    fullName: "",
    email: "",
    password: "",
    phone: ""
  })
  const [regexObject, setRegexObject] = React.useState({
    fullNameBorder: false,
    fullNameHelper: "",
    emailidBorder: false,
    emailidHelper: "",
    passwordBorder: false,
    passwordHelper: "",
    mobileNumberBorder: false,
    mobileNumberHelper: ""
  })
  const takeFullName = (event) => {
    setUserInputs(prevState => ({
      ...prevState,
      fullName: event.target.value
    }))
    console.log(event.target.value)
  }
  const takeEmailId = (event) => {
    setUserInputs(prevState => ({
      ...prevState,
      email: event.target.value
    }))
    console.log(event.target.value)
  }
  const takePassword = (event) => {
    setUserInputs(prevState => ({
      ...prevState,
      password: event.target.value
    }))
    console.log(event.target.value)
  }
  const takeMobileNumber = (event) => {
    setUserInputs(prevState => ({
      ...prevState,
      phone: event.target.value
    }))
    console.log(event.target.value)
  }

  const signup = () => {
    let fullNameTest = fullNameRegex.test(userInputs.fullName)
    let emailTest = emailIdRegex.test(userInputs.email)
    let passwordTest = passwordsRegex.test(userInputs.password)
    let mobileTest = mobileNumberRegex.test(userInputs.phone)

    if (fullNameTest === false) {
      setRegexObject(prevState => ({
        ...prevState,
        fullNameBorder: true,
        fullNameHelper: "Enter correct Name"
      }))
    }
    else if (fullNameTest === true) {
      setRegexObject(prevState => ({
        ...prevState,
        fullNameBorder: false,
        fullNameHelper: ""
      }))
    }

    if (emailTest === false) {
      setRegexObject(prevState => ({
        ...prevState,
        emailidBorder: true,
        emailidHelper: "Enter correct email"
      }))
    }
    else if (emailTest === true) {
      setRegexObject(prevState => ({
        ...prevState,
        emailidBorder: false,
        emailidHelper: ""
      }))
    }

    if (passwordTest === false) {
      setRegexObject(prevState => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "Enter correct password"
      }))
    }
    else if (passwordTest === true) {
      setRegexObject(prevState => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: ""
      }))
    }

    if (mobileTest === false) {
      setRegexObject(prevState => ({
        ...prevState,
        mobileNumberBorder: true,
        mobileNumberHelper: "Enter correct password"
      }))
    }
    else if (mobileTest === true) {
      setRegexObject(prevState => ({
        ...prevState,
        mobileNumberBorder: false,
        mobileNumberHelper: ""
      }))
    }
    if (mobileTest === false) {
      setRegexObject(prevState => ({
        ...prevState,
        mobileNumberBorder: true,
        mobileNumberHelper: "Enter correct password"
      }))
    }
    else if (mobileTest === true) {
      setRegexObject(prevState => ({
        ...prevState,
        mobileNumberBorder: false,
        mobileNumberHelper: ""
      }))
    }

    if (fullNameTest === true && emailTest === true && passwordTest === true && mobileTest === true) {
      register(userInputs).then((response) => {
        console.log(response)
      }).catch((error) => { console.log(error) })
      console.log("Sign up is succesfull")
    }
  }

  return (

    <Box className={classes.SignUpPageContainer}>
      <Box className={classes.SignUpPage_Image}>
      <Paper elevation={0} className={classes.SignUp}>
        <Box className={classes.SignUp_info}>
          <Box className={classes.NameBox}>
            <span id="Name-text">Full Name</span>
            <TextField variant="outlined" size="small" sx={{ height: "47px" }} id="full-name"
              onChange={takeFullName} error={regexObject.fullNameBorder} helperText={regexObject.fullNameHelper} />
          </Box>
          <Box className={classes.EmailBox}>
            <span id="Email-text">Email id</span>
            <TextField variant="outlined" size="small" sx={{ height: "47px" }} id="email-name"
              onChange={takeEmailId} error={regexObject.emailidBorder} helperText={regexObject.emailidHelper} />
          </Box>
          <Box className={classes.PasswordBox}>
            <span id='Password-text1'>Password</span>
            <TextField type="password" variant="outlined" size="small" sx={{ height: "47px" }} id="pass-box"
              onChange={takePassword} error={regexObject.passwordBorder} helperText={regexObject.passwordHelper} />
          </Box>
          <Box className={classes.NumberBox}>
            <span id="Number-text">Mobile Number</span>
            <TextField variant="outlined" size="small" sx={{ height: "47px" }} id="mobile-box"
              onChange={takeMobileNumber} error={regexObject.mobileNumberBorder} helperText={regexObject.mobileNumberHelper} />
          </Box>
          <Box className={classes.Login_Button}>
            <Button variant="contained" size="small" id='signup'
              onClick={signup} sx={{ width: "100%" }}>Signup</Button>
          </Box>
        </Box>
      </Paper>
      </Box>
    </Box>
  )
}

export default Signup