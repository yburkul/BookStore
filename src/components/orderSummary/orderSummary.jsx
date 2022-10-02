import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { addOrder, getCartbook } from '../service/dataService'

const useStyle = makeStyles({
    MainOrderBox: {
        width: "65vw",
        height: "auto",
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
        top: "20px",
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
        top: "20px",
        margin: "20px"
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
        position: "relative",
        top: "5px",
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
            position: "relative",
            bottom: "24px"
        }
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        MainOrderBox: {
            width: "75vw",
            height: "auto",
        },
        OrderName: {
            width: "80%",
            height: "20%",
            fontSize: "18px",
            position: "relative",
            left: "5px",
            top: "20px",
        },
        orderInfo: {
            width: "90%",
            height: "55%",
            position: "relative",
            left: "0px",
            top: "20px",
            margin: "20px"
        },
        orderImg: {
            width: "65px",
            height: "85px",
            "& #orderimg": {
                width: "100%",
                height: "90%"
            }
        },
        orderDetails: {
            width: "175px",
            height: "90px",
        },
        Checkout: {
            width: "95%",
            height: "15%",
            "& #checkout": {
                fontSize: "11px",
                width: "110px",
                height: "26px",
                position: "relative",
                bottom: "6px",
                left:"8px"
            }
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        MainOrderBox: {
            width: "75vw",
            height: "auto",
        },
        OrderName: {
            width: "80%",
            height: "20%",
            fontSize: "18px",
            position: "relative",
            left: "15px",
            top: "20px",
        },
        orderInfo: {
            width: "90%",
            height: "55%",
            position: "relative",
            left: "10px",
            top: "20px",
            margin: "20px"
        },
        orderImg: {
            width: "65px",
            height: "85px",
            "& #orderimg": {
                width: "90%",
                height: "80%"
            }
        },
        orderDetails: {
            width: "175px",
            height: "90px",
        },
        Checkout: {
            width: "95%",
            height: "15%",
            "& #checkout": {
                fontSize: "11px",
                width: "110px",
                height: "26px",
                position: "relative",
                bottom: "10px",
                left:"9px"
            }
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        MainOrderBox: {
            width: "75vw",
            height: "auto",
        },
        orderInfo: {
            height: "90px",
            position: "relative",
            left: "30px",
            top: "20px",
            margin: "20px"
        },
        orderImg: {
            width: "65px",
            height: "85px",
        },
        orderDetails: {
            width: "175px",
            height: "90px",
        },
        orderBookDetails: {
            width: "185px",
            height: "108px",
            position: "relative",
            top: "5px",
            left:"40px",
            "& #title": {
                color: "#0A0102",
                fontSize: "18px"
            },
            "& #smalltitle": {
                fontSize: "14px"
            },
            "& #dic": {
                fontSize: "16px",
            },
            "& #p": {
                fontSize: "14px",
                position: "relative",
                left: "65px",
                bottom: "28px"
            },
        },
        Checkout: {
            width: "98%",
            height: "15%", 
            "& #checkout": {
                position: "relative",
                bottom: "16px"                
            }
        },
    }
})

function OrderSummary(props) {
    const classes = useStyle()
    const [getOrder, setGetOrder] = useState([])
    const navigate = useNavigate()

    const OrderDisplay = () => {

        let orderList = [];
        for (let i = 0; i < getOrder.length; i++) {
            let obj = {
                product_id: getOrder[i].product_id._id,
                product_name: getOrder[i].product_id.bookName,
                product_quantity: getOrder[i].quantityToBuy,
                product_price: getOrder[i].product_id.discountPrice,
            }
            orderList.push(obj);
        }
        console.log(orderList, "-------order list----")
        let orderObj = { orders: orderList }
        addOrder(orderObj).then((response) => {
            console.log(response)
            navigate('/orderPlaced')
        }).catch((error => console.log(error)))
    }

    useEffect(() => {
        getCartbook().then((response) => {
            console.log(response)
            setGetOrder(response.data.result)
        }).catch((error => console.log(error)))
    }, [])

    return (
        <Box className={classes.MainOrderBox}>
            <Box className={classes.OrderName}>
                <span>Order summery</span>
            </Box>
            {
                getOrder.map((items) => (

                    <Box className={classes.orderInfo}>
                        <Box className={classes.orderImg}>
                            <img src='../../Assert/Image 11.png' id='orderimg' />
                        </Box>
                        <Box className={classes.orderDetails}>
                            <Box className={classes.orderBookDetails}>
                                <span id='title'>{items.product_id.bookName}</span>
                                <span id='smalltitle'>{items.product_id.author}</span>
                                <span id='dic'>Rs.{items.product_id.discountPrice}</span>
                                <span id='p'>Rs.{items.product_id.price}</span>
                            </Box>
                        </Box>
                    </Box>
                ))
            }
            <Box className={classes.Checkout}>
                <Button variant="contained" id='checkout' onClick={OrderDisplay}>Checkout</Button>
            </Box>
        </Box>
    )
}
export default OrderSummary