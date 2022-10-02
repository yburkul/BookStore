import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Login from '../components/login/login'
import Signup from '../components/signup/signup';

const useStyle = makeStyles({
    LanderPageContainer: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9D9D9D",
    },
    Page_Image: {
        width: "50vw",
        height: "65vh",
        // border: "1px solid red",
    },
    ImagePage: {
        width: "100%",
        height: "100%",
        // border: "1px solid Black",
        alignItems: "center",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
    },
    ImageBox: {
        width: "45%",
        height: "59%",
        // border: "1px solid green",
        position: "absolute",
        zIndex: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        borderRadius: 10,
        backgroundColor: "#F5F5F5",
        "& #img": {
            width: "240px",
            height: "240px",
            position: "relative",
            left: "60px",
            top: "20px",
            // border: "1px solid green",
            borderRadius: "50%"
        },
        "& #heading": {
            width: "365px",
            alignItems: "flex-start",
            color: "#0A0102"
        }
    },
    Login: {
        width: "52%",
        height: "100%",
        // border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        left: "360px",
        backgroundColor: "#FFFFFF"
    },
    Buttons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        // border: "1px solid blue",
        position: "relative",
        top: "10px",
        "& #login-button": {
            color: "#0A0102",
            fontWeight: 600,
        },
        "& #Singup-button": {
            color: "#878787",
            fontWeight: 550,
        }
    },
    ComponentBox: {
        width: "80%",
        height: "84%",
        // border: "1px solid blue",
        display: "flex",
        position: "relative",
        left: "30px",
        top: "5px",
    },

    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        Page_Image: {
            width: "70%",
            height: "75vh",
        },
        ImageBox: {
            display:"none"
        },
        Login: {
            width: "100%",
            height: "100%",
            left: "0px",
        },
        ComponentBox: {
            width: "88%",
            height: "84%",
            position: "relative",
            left: "10px",
            top: "5px",
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        Page_Image: {
            width: "70%",
            height: "55vh",
        },
        ImageBox: {
            display:"none"
        },
        Login: {
            width: "100%",
            height: "100%",
            left: "0px",
        },
        ComponentBox: {
            width: "88%",
            height: "84%",
            position: "relative",
            left: "10px",
            top: "5px",
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        Page_Image: {
            width: "40vw",
            height: "65vh",
            marginRight:"260px"
        },
        ImageBox: {
            width: "65%",
            height: "42%",
        },
        Login: {
            width: "92%",
            height: "72%",
            position: "relative",
            left: "320px",
        },
        ComponentBox: {
            width: "80%",
            height: "84%",
            display: "flex",
            position: "relative",
            left: "30px",
            top: "5px",
        },
    }
});


function Lander() {
    const classes = useStyle()
    const [toggle, setToggle] = useState(true)

    const openLogin = () => {
        setToggle(true)
    }
    const openSignup = () => {
        setToggle(false)
    }

    return (
        <Box className={classes.LanderPageContainer}>
            <Box className={classes.Page_Image}>
                <Box className={classes.ImagePage}>
                    <Paper elevation={3} className={classes.ImageBox} sx={{ borderRadius: 4 }}>
                        <img id="img" src="../../Assert/img.png" />
                        <h4 id='heading'>ONLINE BOOKING SHOPPING</h4>
                    </Paper>
                    <Paper elevation={3} className={classes.Login}>
                        <Box className={classes.Buttons}>
                            <Button variant="text" id="login-button" size="large"
                                onClick={openLogin}>Login</Button>
                            <Button variant="text" id="Singup-button" size="large"
                                onClick={openSignup}>Singup</Button>
                        </Box>
                        <Box className={classes.ComponentBox}>
                            {
                                toggle ? <Login openLogin={openLogin} /> : <Signup openSignup={openSignup} />
                            }
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}

export default Lander