import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { logIn } from '../service/userService';
import { useNavigate } from "react-router-dom";
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


const useStyle = makeStyles({
  LoginPageContainer: {
    width: "26vw",
    height: "56vh",
    // border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  LoginPage_Image: {
    width: "100%",
    height: "100%",

  },
  Login: {
    width: "100%",
    height: "100%",
    // border: "1px solid blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  Login_info: {
    width: "82%",
    height: "90%",
    //  border: "1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    left: "5px"
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
    top: "30px",
    fontSize: "12px",
    "& #Password-text1": {
      display: "flex"
    },
    "& #Password-text2": {
      display: "flex",
      justifyContent: "flex-end"
    }

  },
  Login_Button: {
    width: "100%",
    position: "relative",
    top: "50px",
    "& #login": {
      textTransform: "none",
      backgroundColor: "#A03037",
    }
  },
  OrText: {
    width: "100%",
    position: "relative",
    top: "70px",
    fontSize: "14px",
    fontWeight: 500
  },
  Button2: {
    width: "100%",
    position: "relative",
    top: "90px",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",

    "& #Fb": {
      width: "47%",
      textTransform: "none",
    },
    "& #google": {
      width: "47%",
      backgroundColor: "#E1E4EA",
      color: "#343434",
      textTransform: "none",
    }
  },

  ['@media only screen and (min-width :320px) and (max-width :480px)']: {
    
    LoginPageContainer: {
      width: "100%",
      height: "30%",
    },
    LoginPage_Image: {
      width: "100%",
      height: "100%",  
    },
    Login: {
      width: "100%",
      height: "50%",
    },
    Login_info: {
      width: "82%",
      height: "70%",
      position: "relative",
      left: "5px"
    },
    EmailBox: {
      position: "relative",
      top: "0px",
    },
    PasswordBox: {
      position: "relative",
      top: "10px",  
    },
    Login_Button: {
      width: "100%",
      position: "relative",
      top: "20px",
    },
    OrText: {
      width: "100%",
      position: "relative",
      top: "30px",
    },
    Button2: {
      position: "relative",
      top: "40px",
    },
  },
  ['@media only screen and (min-width :481px) and (max-width :768px)']: {
    
    LoginPageContainer: {
      width: "100%",
      height: "100%",
    },
    LoginPage_Image: {
      width: "100%",
      height: "100%",  
    },
    Login: {
      width: "100%",
      height: "50%",
    },
    Login_info: {
      width: "82%",
      height: "70%",
      position: "relative",
      left: "5px"
    },
    EmailBox: {
      position: "relative",
      top: "0px",
    },
    PasswordBox: {
      position: "relative",
      top: "10px",  
    },
    Login_Button: {
      width: "100%",
      position: "relative",
      top: "20px",
    },
    OrText: {
      width: "100%",
      position: "relative",
      top: "35px",
    },
    Button2: {
      position: "relative",
      top: "50px",
    },
  },
  ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
    
    LoginPageContainer: {
      width: "100%",
      height: "100%",
    },
    LoginPage_Image: {
      width: "100%",
      height: "100%",  
    },
    Login: {
      width: "100%",
      height: "60%",
    },
    Login_info: {
      width: "100%",
      height: "70%",
      position: "relative",
      left: "5px"
    },
    EmailBox: {
      position: "relative",
      top: "0px",
    },
    PasswordBox: {
      position: "relative",
      top: "15px",  
    },
    Login_Button: {
      width: "100%",
      position: "relative",
      top: "25px",
    },
    OrText: {
      width: "100%",
      position: "relative",
      top: "40px",
    },
    Button2: {
      position: "relative",
      top: "60px",
    },
  }
});


function Login() {
  const classes = useStyle()
  const navigate = useNavigate()
  const [userInput, setUserInput] = React.useState({ email: "", password: "" })
  const [regexObj, setRegexObj] = React.useState({ emailBorder: false, emailHelper: "", passwordBorder: false, passwordHelper: "" })

  const takeUserName = (event) => {
    setUserInput(prevState => ({
      ...prevState,
      email: event.target.value
    }))
    console.log(event.target.value)
  }
  const takePassword = (event) => {
    setUserInput(prevState => ({
      ...prevState,
      password: event.target.value
    }))
    console.log(event.target.value)
  }

  const login = () => {
    let emailTest = emailRegex.test(userInput.email)
    let passwordTest = passwordRegex.test(userInput.password)

    if (emailTest === false) {
      setRegexObj(prevState => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "Enter correct email"
      }))
    }
    else if (emailTest === true) {
      setRegexObj(prevState => ({
        ...prevState,
        emailBorder: false,
        emailHelper: ""
      }))
    }

    if (passwordTest === false) {
      setRegexObj(prevState => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "Enter correct password"
      }))
    }
    else if (passwordTest === true) {
      setRegexObj(prevState => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: ""
      }))
    }

    if (emailTest === true && passwordTest === true) {
      logIn(userInput).then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.result.accessToken)
        navigate('/dashboard')
      }).catch((error) => { console.log(error) })
      console.log("log in succesfull")
    }
  }
  return (

    <Box className={classes.LoginPageContainer}>
      <Box className={classes.LoginPage_Image}>
        <Paper elevation={0} className={classes.Login}>
          <Box className={classes.Login_info}>
            <Box className={classes.EmailBox}>
              <span id="Email-text">Email id</span>
              <TextField variant="outlined" size="small" sx={{ height: "45px" }}
                onChange={takeUserName} error={regexObj.emailBorder} helperText={regexObj.emailHelper} />
            </Box>
            <Box className={classes.PasswordBox} >
              <span id='Password-text1'>Password</span>
              <TextField type="password" variant="outlined" size="small"
                onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} />
              <span id='Password-text2'>Forget Password ?</span>
            </Box>
            <Box className={classes.Login_Button}>
              <Button variant="contained" size="small" id='login'
                onClick={login} sx={{ width: "100%" }}>Login</Button>
            </Box>
            <Box className={classes.OrText}>
              <span>--- OR ---</span>
            </Box>
            <Box className={classes.Button2}>
              <Button variant="contained" size="small" id='Fb'>Facbook</Button>
              <Button variant="contained" size="small" id='google'>Google</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  )
}

export default Login