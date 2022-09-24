import React, { useEffect, useState, useReducer } from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Button } from '@mui/material'
import PinDropIcon from '@mui/icons-material/PinDrop';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';
import CustomerDetails from '../customerDetails/customerDetails';
import OrderSummary from '../orderSummary/orderSummary';
import { addNoOfCart, getCartbook, removeFromCartList } from '../service/dataService';

const useStyle = makeStyles({
    MainCartBox: {
        width: "60vw",
        height: "auto",
        // border: "1px solid blue",
        marginLeft: "180px"
    },
    CartName: {
        height: "55px",
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
        "& #home": {
            color: "#9D9D9D",
            fontSize: "12px"
        },
        "& #cart": {
            color: "#0A0102",
            fontSize: "12px"
        }
    },
    OrderBox: {
        height: "auto",
        border: "1px solid #DBDBDB",
    },
    Location: {
        width: "100%",
        height: "50px",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    cart: {
        width: "40%",
        height: "80%",
        // border: "1px solid green",
        color: "#0A0102",
        fontSize: "18px",
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        left: "25px",

    },
    location: {
        width: "35%",
        height: "100%",
        // border: "1px solid green",
        display: "flex",
        alignItems: "flex-end",
        "& #location": {
            backgroundColor: "#ffff",
            color: "#0A0102",
            textTransform: "none",
            fontSize: "13px",
            boxShadow: "none",
            border: "1px solid #DCDCDC",
            width: "270px",
            display: "flex",
            justifyContent: "space-around",
            borderRadius: "0"
        }
    },
    BookCart: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    bookimg: {
        width: "50px",
        height: "60px",
        position: "relative",
        left: "25px",
        "& #book": {
            width: "100%",
            height: "100%"
        }
    },
    bookAdd: {
        width: "85%",
        height: "100%",
        // border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    info: {
        width: "80%",
        height: "45%",
        // border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "start",
        position: "relative",
        top: "12px",
        "& #bookname": {
            color: "#0A0102",
            fontSize: "14px"
        },
        "& #author": {
            color: "#9D9D9D",
            fontSize: "9px"
        },
        "& #discount": {
            color: "#0A0102",
            fontSize: "15px",
            fontWeight: 500
        },
        "& #price": {
            color: "#9D9D9D",
            fontSize: "9px",
            position: "relative",
            left: "10px",
            bottom: "2px",
            textDecoration: "line-through",
        }
    },
    Additem: {
        width: "25%",
        height: "45px",
        // border: "1px solid green",
        position: "relative",
        top: "4px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        "& #negative": {
            width: "20px",
            height: "20px",
            color: "#DBDBDB",
            border: "1px solid #DBDBDB",
            borderRadius: "50%"
        },
        "& #one": {
            width: "30px",
            height: "20px",
            color: "#333232",
            border: "1px solid #DBDBDB",
        },
        "& #plus": {
            width: "20px",
            height: "20px",
            color: "#707070",
            border: "1px solid #DBDBDB",
            borderRadius: "50%"
        },
        "& #remove": {
            fontSize: "12px",
            color: "#0A0102",
            fontWeight: 500
        },
    },
    PlaceOrder: {
        width: "98%",
        height: "20%",
        // border: "1px solid #DBDBDB",
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        position: "relative",
        bottom: "20px",
        "& #order": {
            width: "150px",
            height: "35px",
            color: "#FFFFFF",
            fontSize: "12px",
            backgroundColor: "#3371B5",
        }
    },
    Address: {
        border: "1px solid #DBDBDB",
        position: "relative",
        top: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& #address": {
            color: "#333232",
            position: "relative",
            left: "25px",
            top: "10px",
            fontSize: "15px",
            fontWeight: 400,
        }
    },
    Summary: {
        border: "1px solid #DBDBDB",
        position: "relative",
        top: "40px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& #summary": {
            color: "#333232",
            position: "relative",
            left: "25px",
            top: "10px",
            fontSize: "15px",
            fontWeight: 400
        }
    },
    MainFooter: {
        width: "98.79vw",
        height: "8vh",
        // border:"1px solid red",
        backgroundColor: "#2E1D1E",
        position: "relative",
        top: "180px",
    },
    footer: {
        width: "52%",
        height: "60%",
        // border:"1px solid red",
        fontSize: "12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        color: "#FFFFFF"
    },
})

function MyCart(props) {
    const classes = useStyle()
    const navigate = useNavigate()
    const [order, setOrder] = useState(false)
    const [orders, setOrders] = useState(false)
    const [bookQty, setBookQty] = useState(1)
    const [cartbookList, setCartbookList] = useState([])
    const [quantity, setQuantity] = useState([])
    const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)

    const goToHome = () => {
        navigate('/dashboard')
    }
    const placeOrder = () => {
        setOrder(true)
    }
    const incrementBookCount = (id,qty) => {
        setBookQty(bookQty => bookQty + 1)   
        let obj = {
            cartItem_id: id,
            quantityToBuy: qty + 1,
        }       
        console.log("=====obj=====", obj)
        addNoOfCart(obj).then((response) => {
            console.log(response)
            setRefreshPage()
        }).catch((error => console.log(error)))
    }

    const decrementBookCount = (id, qty) => {
        if (bookQty > 0) {
            setBookQty(bookQty => bookQty - 1)
            let obj = {
                cartItem_id: id,
                quantityToBuy: qty - 1,
            }          
            console.log("=====obj=====", obj)
            addNoOfCart(obj).then((response) => {
                console.log(response)
                setRefreshPage()
            }).catch((error => console.log(error)))
        }
        else {
            setBookQty(1)
        }
    }
    const ordersummary = () => {
        setOrders(true)
    }
    useEffect(() => {
        getCartbook().then((response) => {
            console.log(response)
            setCartbookList(response.data.result)
            setQuantity(response.data.result)
        }).catch((error => console.log(error)))
    }, [refreshPage])

    const removeFromCart = (bookId) =>{
         let obj = {
            'cartItem_id':bookId
        }
        removeFromCartList(obj).then((response) => {
            console.log(response.data.result, "=====remove===")
            setRefreshPage()
        }).catch((error => console.log(error)))
    }

    return (
        <Box>
            <Header/>
            <Box className={classes.MainCartBox}>
                <Box className={classes.CartName}>
                    <span id='home' onClick={goToHome}>Home /</span>
                    <span id='cart'>My cart</span>
                </Box>
                <Box className={classes.OrderBox}>
                    <Box className={classes.Location}>
                        <Box className={classes.cart}>
                            <span >My cart (1)</span>
                        </Box>
                        <Box className={classes.location}>
                            <Button variant="contained" id='location' startIcon={<PinDropIcon sx={{ color: "#A03037" }} />}
                                endIcon={<KeyboardArrowDownIcon sx={{ color: "#DCDCDC" }} />}>Use current location</Button>
                        </Box>
                    </Box>
                    {
                        cartbookList.map((cart) => (
                            <Box className={classes.BookCart}>
                                <Box className={classes.bookimg}>
                                    <img src='../../Assert/Image 11.png' id='book' />
                                </Box>
                                <Box className={classes.bookAdd}>
                                    <Box className={classes.info}>
                                        <span id='bookname'>{cart.product_id.bookName}</span>
                                        <span id='author'>{cart.product_id.author}</span>
                                        <Box>
                                            <span id='discount'>Rs.{cart.product_id.price}</span>
                                            <span id='price'>Rs.{cart.product_id.discountPrice}</span>
                                        </Box>
                                    </Box>
                                    <Box className={classes.Additem}>
                                        <span id='negative' onClick={()=>decrementBookCount(cart._id,cart.quantityToBuy)}>-</span>
                                        <span id='one'>{cart.quantityToBuy}</span>
                                        <span id='plus' onClick={()=>incrementBookCount(cart._id,cart.quantityToBuy)}>+</span>
                                        <span id='remove'onClick={()=>removeFromCart(cart._id)}>Remove</span>
                                    </Box>
                                </Box>
                            </Box>
                            ))
                    }
                    <Box className={classes.PlaceOrder}>
                        {
                            order ? null : <Button variant="contained" id='order' onClick={placeOrder}>Place order</Button>
                        }
                    </Box>
                </Box>
                <Box className={classes.Address}>
                    {
                        order ?
                            <Box>
                                <CustomerDetails ordersummary={ordersummary} />
                            </Box>
                            : <span id='address' style={{ height: "40px" }}>Address Details</span>
                    }
                </Box>
                <Box className={classes.Summary}>
                    {
                        orders ? <OrderSummary /> : <span id='summary' style={{ height: "40px" }}>Order summery</span>
                    }
                </Box>
            </Box>
            <Box className={classes.MainFooter}>
                <Box className={classes.footer}>
                    <span>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</span>
                </Box>
            </Box>
        </Box>
    )
}
export default MyCart