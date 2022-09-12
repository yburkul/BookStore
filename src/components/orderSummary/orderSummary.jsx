import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles({
    MainOrderBox: {
        width: "65vw",
        height: "35vh",
        // border:"1px solid #DCDCDC",
    },
    OrderName: {
        width: "80%",
        height: "20%",
        // border:"1px solid red",
        display: "flex",
        alignItems: "flex-end",
        color: "#333232",
        fontSize: "18px",
        fontWeight: 400,
        position: "relative",
        left: "30px",
    },
    orderInfo: {
        width: "40%",
        height: "55%",
        // border:"1px solid red",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        position: "relative",
        left: "30px",
    },
    orderImg: {
        width: "65px",
        height: "85px",
        // border:"1px solid red",
        "& #orderimg": {
            width: "100%",
            height: "100%"
        }
    },
    orderDetails: {
        width: "175px",
        height: "90px",
        // border:"1px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    orderBookDetails: {
        width: "135px",
        height: "88px",
        // border:"1px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "start",
        "& #title": {
            color: "#0A0102",
            fontSize: "12px"
        },
        "& #smalltitle": {
            color: "#9D9D9D",
            fontSize: "10px"
        },
        "& #dic": {
            color: "#0A0102",
            fontSize: "12px",
            fontWeight: 500
        },
        "& #p": {
            color: "#9D9D9D",
            fontSize: "10px",
            textDecoration: "line-through",
            position: "relative",
            left: "55px",
            bottom: "24px"
        },
    },
    Checkout: {
        width: "95%",
        height: "15%",
        // border:"1px solid red",
        display: "flex",
        justifyContent: "end",
        "& #checkout": {
            color: "#FFFFFF",
            backgroundColor: "#3371B5",
            fontSize: "12px",
            width: "140px",
            height: "32px",
        }
    }
})
function OrderSummary() {
    const classes = useStyle()
    return (
        <Box className={classes.MainOrderBox}>
            <Box className={classes.OrderName}>
                <span>Order summery</span>
            </Box>
            <Box className={classes.orderInfo}>
                <Box className={classes.orderImg}>
                    <img src='../../Assert/Image 11.png' id='orderimg' />
                </Box>
                <Box className={classes.orderDetails}>
                    <Box className={classes.orderBookDetails}>
                        <span id='title'>Don't Make Me Think</span>
                        <span id='smalltitle'>by Steve Krug</span>
                        <span id='dic'>Rs. 1500</span>
                        <span id='p'>Rs.2000</span>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.Checkout}>
                <Button variant="contained" id='checkout' >Checkout</Button>
            </Box>
        </Box>
    )
}
export default OrderSummary