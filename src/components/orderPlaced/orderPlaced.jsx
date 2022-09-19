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
        width: "100vw",
        height: "8vh",
        backgroundColor: "#2E1D1E",
        position:"relative",
        top:"80px",
        left:"33px"
    },
    footer: {
        width: "52%",
        height: "60%",
        fontSize: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        color: "#FFFFFF"
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
                    <span>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</span>
                </Box>
            </Box>
            </Box>
        </Box>
    )
}
export default OrderPlaced