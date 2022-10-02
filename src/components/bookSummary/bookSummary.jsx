import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState,useReducer } from 'react'
import Button from '@mui/material/Button';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import { addNoOfCart, addToCart, addToWhishList, getCartbook,getWishList } from '../service/dataService';
import {useDispatch} from 'react-redux'
import { bookList } from '../../redux/bookAction';
const useStyle = makeStyles({
    MainBookSummary: {
        width: "72vw",
        height: "120vh",
        position: "relative",
        bottom: "70px",
        left: "15px",
        backgroundColor: "#ffff"
    },
    BookDetailsBox: {
        width: "100%",
        height: "100%",
        // border: "1px solid green",
        display: "flex",
        flexDirection: "row",
    },
    Home: {
        width: "100%",
        height: "8%",
        // border: "1px solid green",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& #home": {
            color: "#9D9D9D",
            fontSize: "13px"
        },
        "& #book1": {
            color: "#0A0102",
            fontSize: "13px"
        }
    },
    Book_img: {
        width: "45%",
        height: "60%",
        // border: "1px solid green",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    SmallImg: {
        width: "10%",
        height: "80%",
        // border: "1px solid #D1D1D1",
        display: "flex",
        flexDirection: "column",
    },
    SmallImg1: {
        width: "100%",
        height: "13%",
        border: "1px solid #D1D1D1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& #book1": {
            width: "35px",
            height: "40px",
        }
    },
    SmallImg2: {
        width: "100%",
        height: "13%",
        border: "1px solid #D1D1D1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    ImgBox: {
        width: "85%",
        height: "85%",
        border: "1px solid #D1D1D1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& #bookimg": {
            width: "100%",
            height: "100%",
        }
    },
    Img: {
        width: "80%",
        height: "85%",
        // border: "1px solid red",
    },
    Buttons: {
        width: "85%",
        height: "9%",
        // border: "1px solid red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        left: "45px",
        "& #bag": {
            width: "160px",
            borderRadius: "0",
            backgroundColor: "#A03037"
        },
        "& #whislist": {
            width: "160px",
            borderRadius: "0",
            backgroundColor: "#333333"
        },
        "& #whislist1": {
            width: "160px",
            height: "40px",
            borderRadius: "0",
            backgroundColor: "#fff",
            border: "1px solid #DCDCDC",
            color: "red"
        }
    },
    Book_info: {
        width: "55%",
        height: "100%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
    },
    bookDetails: {
        width: "92%",
        height: "18%",
        // border: "1px solid black",
        position: "relative",
        left: "35px",
    },
    Info: {
        width: "100%",
        height: "87%",
        // border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        "& #heading": {
            fontSize: "22px",
            color: "#0A0102",
            fontWeight: 400,
            // border: "1px solid green",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "start",
            position: "relative",
            bottom: "5px"
        },
        "& #middle-text": {
            fontSize: "16px",
            color: "#878787",
            position: "relative",
            bottom: "5px"
        },
    },
    RatingBox: {
        // border: "1px solid black",
        width: "50%",
        height: "22%",
        display: "flex",
        flexDirection: "row",
    },
    Rating: {
        width: "19%",
        height: "66%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#388E3C",
        position: "relative",
        top: "2px",
        // border: "1px solid black",
        "& #rating": {
            fontSize: "12px",
            color: "#FFFFFF",

        },
        "& #star": {
            fontSize: "14px",
            color: "#FFFFFF",
        },
    },
    Rating1: {
        // border: "1px solid black",
        fontSize: "10px",
        position: "relative",
        left: "6px",
        "& #rating1": {
            fontSize: "15px",
            color: "#878787",
        },
    },
    Price: {
        "& #discount": {
            fontSize: "25px",
            color: "#0A0102",
            fontWeight: 500
        },
        "& #price": {
            fontSize: "12px",
            color: "#878787",
            textDecoration: "line-through",
            position: "relative",
            left: "9px",
            bottom: "4px"
        },
    },
    book_info: {
        width: "92%",
        height: "20%",
        border: "1px solid #9D9D9D",
        position: "relative",
        left: "35px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        borderLeft: "none",
        borderRight: "none"
    },
    dotDetails: {
        width: "30%",
        height: "20%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "& #dot": {
            fontSize: "40px",
            color: "#878787",
            position: "relative",
            bottom: "13px"
        },
        "& #detail": {
            fontSize: "13px",
            color: "#878787",
            position: "relative",
            left: "2px"
        }
    },
    detail: {
        width: "96%",
        height: "52%",
        // border: "1px solid black",
        fontSize: "13px",
        textAlign: "start",
        color: "#373434",
        position: "relative",
        bottom: "6px",
        left: "5px"
    },
    book_feedback: {
        width: "92%",
        height: "30%",
        // border: "1px solid black",
        position: "relative",
        left: "35px"
    },
    feedbackName: {
        width: "80%",
        height: "15%",
        // border: "1px solid black",
        color: "#0A0102",
        fontSize: "15px",
        textAlign: "start",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
    },
    feedbackBox: {
        width: "98%",
        height: "75%",
        // border: "1px solid black",
        position: "relative",
        top: "20px",
        backgroundColor: "#F5F5F5",
    },
    feed: {
        width: "98%",
        height: "15%",
        // border: "1px solid black",
        textAlign: "start",
        fontSize: "13px",
        position: "relative",
        left: "10px",
        top: "5px"
    },
    star: {
        width: "35%",
        height: "15%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#707070",
        position: "relative",
        left: "10px",
        "& #star": {
            fontSize: "20px"
        }
    },
    input: {
        width: "95%",
        height: "40%",
        // border: "1px solid black",
        backgroundColor: "#FFFFFF",
        position: "relative",
        left: "10px",
        "& #review": {
            width: "380px",
            height: "35px",
            display: "flex",
            border: "none",
        }
    },
    submit: {
        width: "97%",
        height: "25%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        "& #submit": {
            width: "75px",
            height: "24px",
            borderRadius: "0",
            textTransform: "none"
        }
    },
    Reviews: {
        width: "92%",
        height: "30%",
        // border: "1px solid black",
        position: "relative",
        left: "35px",
    },
    Review1: {
        width: "98%",
        height: "50%",
        // border: "1px solid black",
    },
    name1: {
        width: "50%",
        height: "25%",
        // border: "1px solid black",
        display: "flex",
        alignItems: "flex-end",
        "& #yb": {
            width: "12%",
            height: "68%",
            fontSize: "12px",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            border: "1px solid #E4E4E4",
            color: "#707070",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        "& #name": {
            fontSize: "13px",
            color: "#0A0102",
            position: "relative",
            left: "8px",
            bottom: "4px",
            fontWeight: 500
        },
    },
    starRating1: {
        width: "35%",
        height: "15%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#707070",
        position: "relative",
        left: "30px",
        "& #star1": {
            fontSize: "20px",
            color: "#FFCE00"
        },
        "& #star1-1": {
            fontSize: "20px",
        }
    },
    reviewFeedback1: {
        width: "92%",
        height: "40%",
        // border: "1px solid black",
        fontSize: "12px",
        color: "#707070",
        textAlign: "start",
        position: "relative",
        top: "7px",
        left: "30px"
    },
    Review2: {
        width: "98%",
        height: "50%",
        // border: "1px solid black",
    },
    name2: {
        width: "50%",
        height: "25%",
        // border: "1px solid black",
        display: "flex",
        alignItems: "flex-end",
        "& #ac": {
            width: "12%",
            height: "68%",
            fontSize: "12px",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            border: "1px solid #E4E4E4",
            color: "#707070",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        "& #nameAC": {
            fontSize: "13px",
            color: "#0A0102",
            position: "relative",
            left: "8px",
            bottom: "4px",
            fontWeight: 500
        },
    },
    starRating2: {
        width: "35%",
        height: "15%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        color: "#707070",
        position: "relative",
        left: "30px",
        "& #star2": {
            fontSize: "20px",
            color: "#FFCE00"
        },
        "& #star2-1": {
            fontSize: "20px",
        }
    },
    reviewFeedback2: {
        width: "92%",
        height: "40%",
        // border: "1px solid black",
        fontSize: "12px",
        color: "#707070",
        textAlign: "start",
        position: "relative",
        top: "7px",
        left: "30px"
    },
    Add_item: {
        width: "160px",
        height: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        "& #negative1": {
            width: "38px",
            height: "38px",
            color: "#DBDBDB",
            border: "1px solid #DBDBDB",
            borderRadius: "50%",
            fontSize: "25px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#FAFAFA"
        },
        "& #one1": {
            width: "60px",
            height: "35px",
            color: "#333232",
            fontSize: "20px",
            border: "1px solid #DBDBDB",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FAFAFA"
        },
        "& #plus1": {
            width: "38px",
            height: "38px",
            color: "#333232",
            fontSize: "25px",
            border: "1px solid #DBDBDB",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderColor: "#DBDBDB",
            backgroundColor: "#FAFAFA"
        },
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        MainBookSummary: {
            height: "100%",
            position: "relative",
            bottom: "45px",
            left: "0px",
        },
        BookDetailsBox: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        },
        Home: {
            width: "220px",
            height: "50px",
            // border: "1px solid green",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        Book_img: {
            width: "220px",
            height: "300px",
        },
        SmallImg: {
            display:"none"
        },
        ImgBox: {
            width: "100%",
            height: "85%",
        },
        Img: {
            width: "80%",
            height: "85%",
        },
        Buttons: {
            width: "100%",
            height: "39px",
            left: "0px",
            "& #bag": {
                width: "110px",
                fontSize:"12px"                
            },
            "& #whislist": {
                width: "100px",
                left:"0px",
                fontSize:"12px"
            },
            "& #whislist1": {
                width: "90px",
                height: "30px",
                position: "relative",
                left: "1px",
                top:"5px"
            }
        },
        Book_info: {
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
        },
        bookDetails: {
            width: "220px",
            height: "120px",
            position: "relative",
            left: "0px",
        },
        Info: {
            width: "100%",
            height: "87%",
            position: "relative",
            top: "5px"
        },
        RatingBox: {
            width: "50%",
            height: "22%",
            display: "flex",
            flexDirection: "row",
        },
        Rating: {
            width: "32%",
            height: "68%",
            position: "relative",
            top: "4px",
        },
        Rating1: {
            fontSize: "10px",
            position: "relative",
            left: "8px",
        },
        book_info: {
            width: "200px",
            height: "20%",
            border: "1px solid #9D9D9D",
            position: "relative",
            left: "0px",
            borderLeft: "none",
            borderRight: "none"
        },
        dotDetails: {
            width: "220px",
            height: "20%",           
        },
        detail: {
            width: "220px",
            height: "52%",
            position: "relative",
            bottom: "6px",
            left: "5px"
        },
        book_feedback: {
            width: "220px",
            height: "30%",
            position: "relative",
            left: "0px"
        },
        feedbackName: {
            width: "220px",
            height: "15%",
            position: "relative",
            top: "5px"
        },
        feedbackBox: {
            width: "220px",
            height: "120px",
            position: "relative",
            top: "20px",
        },
        feed: {
            width: "220px",
            height: "15%",
            textAlign: "start",
            fontSize: "13px",
            position: "relative",
            left: "10px",
            top: "0px"
        },
        star: {
            width: "35%",
            height: "15%",
            position: "relative",
            left: "10px",
            "& #star": {
                fontSize: "15px"
            }
        },
        input: {
            width: "95%",
            height: "40%",
            position: "relative",
            left: "10px",
            "& #review": {
                width: "120px",
            }
        },
        submit: {
            width: "97%",
            height: "25%",
            "& #submit": {
                width: "75px",
                height: "22px",
            }
        },
        Reviews: {
            width: "220px",
            height: "30%",
            position: "relative",
            left: "0px",
            top:"35px"
        },
        Review1: {
            width: "220px",
            height: "50%",
        },
        name1: {
            width: "50%",
            height: "25%",
        },
        starRating1: {
            width: "35%",
            height: "15%",
            position: "relative",
            left: "20px",
        },
        reviewFeedback1: {
            width: "220px",
            height: "40%",
            top: "13px",
            left: "20px"
        },
        Review2: {
            width: "220px",
            height: "50%",
            position:"relative",
            top:"30px"
        },
        name2: {
            width: "50%",
            height: "25%",
            "& #nameAC": {
                bottom: "2px",
            },
        },
        starRating2: {
            width: "35%",
            height: "15%",
            position: "relative",
            left: "20px",
        },
        reviewFeedback2: {
            width: "92%",
            height: "40%",
            position: "relative",
            top: "7px",
            left: "20px"
        },
        Add_item: {
            width: "115px",
            height: "30px",           
            "& #negative1": {
                width: "35px",
                height: "35px",
                position: "relative",              
                top:"5px",
            },
            "& #one1": {
                width: "60px",
                height: "30px",
                position: "relative",              
                top:"5px",
            },
            "& #plus1": {
                width: "35px",
                height: "35px",
                position: "relative",              
                top:"5px",
            },
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        MainBookSummary: {
            width: "82vw",
            height: "100%",
            position: "relative",
            bottom: "45px",
            left: "0px",
        },
        BookDetailsBox: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position:"relative",
            left:"30px"
        },
        Home: {
            width: "220px",
            height: "50px",
            position:"relative",
            left:"30px"
        },
        Book_img: {
            width: "260px",
            height: "300px",
        },
        SmallImg: {
            display:"none"
        },
        ImgBox: {
            width: "100%",
            height: "85%",
        },
        Img: {
            width: "80%",
            height: "85%",
        },
        Buttons: {
            width: "100%",
            height: "39px",
            left: "0px",
            "& #bag": {
                width: "120px",
                fontSize:"12px"                
            },
            "& #whislist": {
                width: "120px",
                left:"0px",
                fontSize:"12px"
            },
            "& #whislist1": {
                width: "100px",
                height: "30px",
                position: "relative",
                left: "1px",
                top:"5px"
            }
        },
        Book_info: {
            width: "100%",
            height: "auto",
        },
        bookDetails: {
            width: "260px",
            height: "120px",
            position: "relative",
            left: "0px",
        },
        Info: {
            width: "100%",
            height: "87%",
            position: "relative",
            top: "5px"
        },
        RatingBox: {
            width: "50%",
            height: "25%",
        },
        Rating: {
            width: "32%",
            height: "66%",
            position: "relative",
            top: "4px",
        },
        Rating1: {
            fontSize: "10px",
            position: "relative",
            left: "8px",
        },
        book_info: {
            width: "260px",
            height: "20%",
            border: "1px solid #9D9D9D",
            position: "relative",
            left: "0px",
            borderLeft: "none",
            borderRight: "none"
        },
        dotDetails: {
            width: "260px",
            height: "20%",           
        },
        detail: {
            width: "260px",
            height: "52%",
            position: "relative",
            bottom: "6px",
            left: "5px"
        },
        book_feedback: {
            width: "260px",
            height: "30%",
            position: "relative",
            left: "0px"
        },
        feedbackName: {
            width: "260px",
            height: "15%",
            position: "relative",
            top: "5px"
        },
        feedbackBox: {
            width: "260px",
            height: "120px",
            position: "relative",
            top: "20px",
        },
        feed: {
            width: "260px",
            height: "15%",
            position: "relative",
            left: "10px",
            top: "0px"
        },
        star: {
            width: "35%",
            height: "15%",
            position: "relative",
            left: "10px",
            "& #star": {
                fontSize: "15px"
            }
        },
        input: {
            width: "95%",
            height: "40%",
            position: "relative",
            left: "10px",
            "& #review": {
                width: "130px",
            }
        },
        submit: {
            width: "97%",
            height: "25%",
        },
        Reviews: {
            width: "260px",
            height: "30%",
            position: "relative",
            left: "0px",
            top:"35px"
        },
        Review1: {
            width: "260px",
            height: "50%",
        },
        name1: {
            width: "50%",
            height: "25%",
        },
        starRating1: {
            width: "35%",
            height: "15%",
            position: "relative",
            left: "20px",
        },
        reviewFeedback1: {
            width: "260px",
            height: "40%",
            top: "13px",
            left: "20px"
        },
        Review2: {
            width: "260px",
            height: "50%",
            position:"relative",
            top:"30px"
        },
        name2: {
            width: "50%",
            height: "25%",
            display: "flex",
            alignItems: "flex-end",
           
        },
        starRating2: {
            width: "35%",
            height: "15%",
            position: "relative",
            left: "20px",
        },
        reviewFeedback2: {
            width: "92%",
            height: "40%",
            // border: "1px solid black",
            position: "relative",
            top: "7px",
            left: "20px"
        },
        Add_item: {
            width: "125px",
            height: "30px",           
            "& #negative1": {
                width: "35px",
                height: "35px",
                position: "relative",              
                top:"5px",
            },
            "& #one1": {
                width: "60px",
                height: "30px",
                position: "relative",              
                top:"5px",
            },
            "& #plus1": {
                width: "35px",
                height: "35px",
                position: "relative",              
                top:"5px",
            },
        },

    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        MainBookSummary: {
            width: "88vw",
            height: "100vh",
            position: "relative",
            bottom: "80px",
            left: "0px",
        },
        BookDetailsBox: {
            width: "100%",
            height: "100%",
        },
        Home: {
            width: "100%",
            height: "8%",
        },
        Book_img: {
            width: "50%",
            height: "50%",
        },
        SmallImg: {
            width: "10%",
            height: "70%",
        },
        SmallImg1: {
            width: "80%",
            height: "10%",
            "& #book1": {
                width: "25px",
                height: "30px",
            }
        },
        SmallImg2: {
            width: "80%",
            height: "10%",
            "& #book1": {
                width: "25px",
                height: "30px",
            }
        },
        ImgBox: {
            width: "85%",
            height: "85%",
        },
        Img: {
            width: "80%",
            height: "85%",
        },
        Buttons: {
            width: "85%",
            height: "9%",
            position: "relative",
            left: "35px",
            "& #bag": {
                width: "120px",
            },
            "& #whislist": {
                width: "120px",
            },
            "& #whislist1": {
                width: "130px",
                height: "40px",
            }
        },
        Book_info: {
            width: "55%",
            height: "100%",
        },
        bookDetails: {
            width: "92%",
            height: "18%",
        },
        Info: {
            width: "100%",
            height: "87%",
        },
        RatingBox: {
            width: "50%",
            height: "22%",
        },
        Rating: {
            width: "19%",
            height: "66%",
        },
        Rating1: {
            fontSize: "10px",
            position: "relative",
            left: "6px",
            "& #rating1": {
                fontSize: "15px",
                color: "#878787",
            },
        },
        input: {
            width: "95%",
            height: "40%",
            "& #review": {
                width: "200px",
            }
        },
        Add_item: {
            width: "120px",
        },
    }
})

function BookSummary(props) {
    const classes = useStyle()
    const [numberOfcart, setNumberOfCart] = useState(false)
    const [addwhishList, setaddwhishList] = useState(false)
    const [bookQty, setBookQty] = useState(1)
    const [cartId, setCartId] = useState([])
    const [cartBookId, setCartBookId] = useState([])

    const [wishId, setwishId] = useState([])
    const [wishBookId, setWishBookId] = useState([])

    const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)
    const dispatch = useDispatch()
    const addItem = () => {
        setNumberOfCart(true)
        console.log(props._id)
        addToCart(props._id).then((response) => {
            console.log(response)
            setRefreshPage()
            dispatch(bookList(response))
        }).catch((error => console.log(error)))
        console.log("Added in cart")
    }

    const addWhisListItem = (id) => {
        setaddwhishList(true)
        console.log(props._id)
        addToWhishList(props._id).then((response) => {
            console.log(response)
            setRefreshPage()
        }).catch((error => console.log(error)))
        console.log("Added in whishlist")
    }

    const incrBookCount = () => {
        setBookQty(bookQty + 1)
        let obj = {
            cartItem_id: props._id,
            quantityToBuy: bookQty + 1,
        }
        console.log("=====obj=====", obj)
        console.log(props._id)
        addNoOfCart(obj).then((response) => {
            console.log(response)           
        }).catch((error => console.log(error)))
    }

    const decrBookCount = () => {
        if (bookQty > 1) {
            setBookQty(bookQty - 1)
            let obj = {
                cartItem_id: props._id,
                quantityToBuy: bookQty - 1
            }
            console.log("=====obj=====", obj)
            addNoOfCart(obj).then((response) => {
                console.log(response)
            }).catch((error => console.log(error)))
        }
        else {
            setBookQty(1)
            setNumberOfCart(false)
        }
    }

    const RemoveFromWhishList = () => {
        setaddwhishList(false)
    }

    useEffect(() => {
        getCartbook().then((response) => {
            console.log(response)
            let idList = response.data.result.filter((cart) => {
                if (props._id === cart.product_id._id) {
                    setBookQty(cart.quantityToBuy)
                    setCartId(cart._id)
                    console.log(cart._id, cart.quantityToBuy, "--id----qty---")
                    return cart
                }
            })
            setCartBookId(idList)
        }).catch((error => console.log(error)))

        getWishList().then((response) => {
            console.log(response)
            let idList = response.data.result.filter((cart) => {
                if (props._id === cart.product_id._id) {
                    setwishId(cart._id)
                    console.log(cart._id, "--id----whish list---")
                    return cart
                }
            })
            setWishBookId(idList)
        }).catch((error => console.log(error)))
    }, [refreshPage])

    return (
        <Box className={classes.MainBookSummary}>
            <Box className={classes.Home}>
                <span id='home'>Home/</span>
                <span id='book1'>Book(01)</span>
            </Box>
            <Box className={classes.BookDetailsBox}>
                <Box className={classes.Book_img}>
                    <Box className={classes.SmallImg}>
                        <Box className={classes.SmallImg1}>
                            <img src='../../Assert/Image 1.png' id='book1' />
                        </Box>
                        <Box className={classes.SmallImg2}>
                            <img src='../../Assert/Image 46.png' id='book1' />
                        </Box>
                    </Box>
                    <Box className={classes.ImgBox}>
                        <Box className={classes.Img}>
                            <img src='../../Assert/Image 11@2x.png' id='bookimg' />
                        </Box>
                    </Box>
                    <Box className={classes.Buttons}>
                        {
                            (cartId.length === 0) ? <Button variant="contained" id="bag" onClick={addItem}>Add to Bag</Button> :
                                <Box className={classes.Add_item}>
                                    <span id='negative1' onClick={decrBookCount} >-</span>
                                    <span id='one1'>{bookQty}</span>
                                    <span id='plus1' onClick={incrBookCount} >+</span>
                                </Box>
                        }
                        {
                            (wishId.length === 0) ? <Button variant="contained" id='whislist' startIcon={<FavoriteOutlinedIcon />}
                            onClick={addWhisListItem}>Whislist</Button>:
                            <FavoriteOutlinedIcon id='whislist1' onClick={RemoveFromWhishList} />
                        }
                    </Box>
                </Box>
                <Box className={classes.Book_info}>
                    <Box className={classes.bookDetails}>
                        <Box className={classes.Info}>
                            <span id='heading'>{props.bookName}</span>
                            <span id='middle-text'>{props.author}</span>
                            <Box className={classes.RatingBox}>
                                <Box className={classes.Rating}>
                                    <span id='rating'>4.5</span>
                                    <StarRateIcon id="star" />
                                </Box>
                                <Box className={classes.Rating1}>
                                    <span id='rating1'>(20)</span>
                                </Box>
                            </Box>
                            <Box className={classes.Price}>
                                <span id='discount'>Rs.{props.discountPrice}</span>
                                <span id='price'>Rs.{props.price}</span>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.book_info}>
                        <Box className={classes.dotDetails}>
                            <span id='dot'>.</span>
                            <span id='detail'>Book Detail</span>
                        </Box>
                        <Box className={classes.detail}>
                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat
                            </span>
                        </Box>
                    </Box>
                    <Box className={classes.book_feedback}>
                        <Box className={classes.feedbackName}>
                            <span>Customer Feedback</span>
                        </Box>
                        <Box className={classes.feedbackBox}>
                            <Box className={classes.feed}>
                                <span>Overall rating</span>
                            </Box>
                            <Box className={classes.star}>
                                <StarOutlineOutlinedIcon id='star' />
                                <StarOutlineOutlinedIcon id='star' />
                                <StarOutlineOutlinedIcon id='star' />
                                <StarOutlineOutlinedIcon id='star' />
                                <StarOutlineOutlinedIcon id='star' />
                            </Box>
                            <Box className={classes.input}>
                                <input id='review' placeholder='Write your review'></input>
                            </Box>
                            <Box className={classes.submit}>
                                <Button variant="contained" id="submit">Submit</Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.Reviews}>
                        <Box className={classes.Review1}>
                            <Box className={classes.name1}>
                                <span id="yb">YB</span>
                                <span id='name'>Yogesh Burkul</span>
                            </Box>
                            <Box className={classes.starRating1}>
                                <StarRateIcon id='star1' />
                                <StarRateIcon id='star1' />
                                <StarRateIcon id='star1' />
                                <StarOutlineOutlinedIcon id='star1-1' />
                                <StarOutlineOutlinedIcon id='star1-1' />
                            </Box>
                            <Box className={classes.reviewFeedback1}>
                                <span>Good product. Even though the translation could have been better, Chanakya's neeti
                                    are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                                </span>
                            </Box>
                        </Box>
                        <Box className={classes.Review2}>
                            <Box className={classes.name2}>
                                <span id="ac">AC</span>
                                <span id='nameAC'>Aniket Chile</span>
                            </Box>
                            <Box className={classes.starRating2}>
                                <StarRateIcon id='star2' />
                                <StarRateIcon id='star2' />
                                <StarRateIcon id='star2' />
                                <StarRateIcon id='star2' />
                                <StarOutlineOutlinedIcon id='star2-1' />
                            </Box>
                            <Box className={classes.reviewFeedback2}>
                                <span>Good product. Even though the translation could have been better, Chanakya's neeti
                                    are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                                </span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default BookSummary