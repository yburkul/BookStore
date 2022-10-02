import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import Header from '../header/header'

const useStyle = makeStyles({
    PlacedOrderBox: {
        width: "72vw",
        height: "80vh",
        marginLeft: "180px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    PlacedImg: {
        width: "80%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& #placed": {
            width: "280px",
            height: "225px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: "25px"
        },
        "& #confirm": {
            width: "354px",
            height: "66px",
            position: "relative",
            top: "25px"
        }
    },
    OrderDetails: {
        width: "80%",
        height: "30%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    HeadInfo: {
        width: "99.8%",
        height: "30%",
        border: "1px solid #DCDCDC",
        backgroundColor:"#FAFAFA",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        "& #text":{
            color:"#333232",
            fontSize:"12px"
        }
    },
    customerDetails:{
        width: "100%",
        height: "40%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    email: {
        width: "33.3%",
        height: "100%",
        border: "1px solid #DCDCDC",
        "& #emailid": {
            color: "#333232",
            fontSize: "12px",
            position: "relative",
            top: "10px",
        }
    },
    mobile: {
        width: "33.3%",
        height: "100%",
        border: "1px solid #DCDCDC",
        borderLeft:"none",
        borderRight:"none",
        "& #phone": {
            color: "#333232",
            fontSize: "12px",
            position: "relative",
            top: "10px",
        }
    },
    address: {
        width: "33.3%",
        height: "100%",
        border: "1px solid #DCDCDC",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "start",
        "& #address-info": {
            color: "#333232",
            fontSize: "12px",
            width: "230px",
            height: "46px"
        }
    },
    ShoppingButton: {
        width: "80%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        "& #shopping": {
            backgraoundColor: "#3371B5",
            width: "200px",
            height: "35px",
        }
    },
    MainFooter: {
        width: "99vw",
        height: "8vh",
        backgroundColor: "#2E1D1E",
        position:"relative",
        top:"80px",
    },
    footer: {
        width: "52%",
        height: "60%",
        fontSize: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        color: "#FFFFFF"
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        PlacedOrderBox: {
            width: "72vw",
            height: "auto",
            marginLeft: "10px",
        },
        PlacedImg: {
            width: "80%",
            height: "60%",
            "& #placed": {
                width: "220px",
                height: "165px",
                position: "relative",
                top: "15px",
                left:"30px"
            },
            "& #confirm": {
                width: "280px",
                height: "60px",
                position: "relative",
                top: "25px",
                left:"40px",
                fontSize:"12px",
            }
        },
        OrderDetails: {
            width: "250px",
            height: "170px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "start",
            position: "relative",
            top: "25px",
            left:"20px"
        },
        HeadInfo: {
            position: "relative",
            left:"20px",
            width: "70px",
            height: "99.7%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& #text":{
                color:"#333232",
                fontSize:"12px",
                width: "70px",
            }
        },
        customerDetails:{
            position: "relative",
            left:"20px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
        },
        email: {
            width: "100%",
            height: "90%",
            border: "1px solid #DCDCDC",
            "& #emailid": {
                color: "#333232",
                fontSize: "12px",
                position: "relative",
                top: "13px",
            }
        },
        mobile: {
            width: "100%",
            height: "60%",
            border: "1px solid #DCDCDC",
            borderTop:"none",
            borderBottom:"none",
            "& #phone": {
                fontSize: "12px",
                position: "relative",
                top: "10px",
            }
        },
        address: {
            width: "100%",
            height: "100%",
            border: "1px solid #DCDCDC",
            "& #address-info": {
                fontSize: "10px",
                width: "230px",
                height: "26px"
            }
        },
        ShoppingButton: {
            width: "90%",
            height: "10%",
            position:"relative",
            top:"50px",
            left:"40px",
            "& #shopping": {
                backgraoundColor: "#3371B5",
                width: "180px",
                height: "30px",
                fontSize:"12px"
            }
        },
        MainFooter: {
            width: "100vw",
            height: "8vh",
            top:"80px",
            left:"33px"
        },
        footer: {
            width: "100%",
            height: "60%",
            fontSize: "10px"
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        PlacedOrderBox: {
            width: "72vw",
            height: "auto",
            marginLeft: "10px",
            position: "relative",
            top: "25px",
        },
        PlacedImg: {
            width: "80%",
            height: "70%",
            "& #placed": {
                width: "220px",
                height: "195px",
                position: "relative",
                top: "25px",
                left:"50px"
            },
            "& #confirm": {
                width: "280px",
                height: "90px",
                position: "relative",
                top: "25px",
                left:"50px",
                fontSize:"14px",
            }
        },
        OrderDetails: {
            width: "300px",
            height: "200px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "start",
            position: "relative",
            top: "25px",
            left:"30px"
        },
        HeadInfo: {
            position: "relative",
            left:"20px",
            width: "80px",
            height: "99.7%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& #text":{
                color:"#333232",
                fontSize:"12px",
                width: "70px",
            }
        },
        customerDetails:{
            position: "relative",
            left:"20px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
        },
        email: {
            width: "100%",
            height: "90%",
            border: "1px solid #DCDCDC",
            "& #emailid": {
                color: "#333232",
                fontSize: "12px",
                position: "relative",
                top: "13px",
            }
        },
        mobile: {
            width: "100%",
            height: "60%",
            border: "1px solid #DCDCDC",
            borderTop:"none",
            borderBottom:"none",
            "& #phone": {
                fontSize: "12px",
                position: "relative",
                top: "10px",
            }
        },
        address: {
            width: "100%",
            height: "100%",
            border: "1px solid #DCDCDC",
            "& #address-info": {
                fontSize: "11px",
                width: "230px",
                height: "26px"
            }
        },
        ShoppingButton: {
            width: "90%",
            height: "10%",
            position:"relative",
            top:"50px",
            left:"60px",
        },
        MainFooter: {
            width: "100vw",
            height: "8vh",
            top:"110px",
            left:"55px"
        },
        footer: {
            width: "100%",
            height: "60%",
            fontSize: "12px"
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        PlacedOrderBox: {
            width: "90vw",
            height: "60vh",
            marginLeft: "30px",
            position: "relative",
            top: "35px"
        },
        PlacedImg: {
            width: "90%",
            height: "60%",
            "& #placed": {
                width: "290px",
                height: "225px",
                top: "25px"
            },
            "& #confirm": {
                width: "354px",
                height: "66px",
                position: "relative",
                top: "25px"
            }
        },
        OrderDetails: {
            width: "680px",
            height: "30%",
        },
        MainFooter: {
            width: "100vw",
            height: "8vh",
            backgroundColor: "#2E1D1E",
            position:"relative",
            top:"310px",
            left:"0px",
            right:"10px"
        },
        footer: {
            width: "52%",
            height: "60%",
            fontSize: "12px",
            position:"relative",
            left:"30px",
        },
    }
})

function OrderPlaced() {
    const classes = useStyle()
    const navigate = useNavigate()

    const ContinueShopping = () => {
        navigate('/dashboard')
    }
    return (
        <Box>
            <Header/>
            <Box className={classes.PlacedOrderBox}>
                <Box className={classes.PlacedImg}>
                    <img src='../../Assert/orderplaced.jpeg' id='placed' />
                    <span id='confirm'>hurray!!! your order is confirmed the order id is
                        #123456 save the order id for further communication..
                    </span>
                </Box>
                <Box className={classes.OrderDetails}>
                    <Box className={classes.HeadInfo}>
                        <span id='text'>Email us</span>
                        <span id='text'>Contact us</span>
                        <span id='text'>Address</span>
                    </Box>
                    <Box className={classes.customerDetails}>
                        <Box className={classes.email}>
                            <span id='emailid'>admin@bookstore.com</span>
                        </Box>
                        <Box className={classes.mobile}>
                            <span id='phone'>+91 8163475881</span>
                        </Box>
                        <Box className={classes.address}>
                            <span id='address-info'>42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex,
                                near Kumarakom restaurant, HSR Layout, Bangalore 560034
                            </span>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.ShoppingButton}>
                    <Button variant="contained" id='shopping' onClick={ContinueShopping}>Continue shopping</Button>
                </Box>
                <Box className={classes.MainFooter}>
                <Box className={classes.footer}>
                    <span>Copyright © 2022, Bookstore Private Limited. All Rights Reserved</span>
                </Box>
            </Box>
            </Box>
        </Box>
    )
}
export default OrderPlaced