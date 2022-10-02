import { Box, collapseClasses } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const useStyle = makeStyles({
    MainBookBox: {
        width: "18vw",
        height: "40vh",
        //border: "1px solid green",
    },
    Book_info_Box: {
        width: "92%",
        height: "94%",
        border: "1px solid #E2E2E2",
        position: "relative",
        left: "14px",
        "&:hover": {
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }
    },
    BookBox: {
        width: "100%",
        height: "62%",
        // border: "1px solid green",
        backgroundColor: "#F5F5F5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    BookInfo: {
        width: "100%",
        height: "37%",
        // border: "1px solid green",
    },
    Info: {
        width: "100%",
        height: "87%",
        // border: "1px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        position: "relative",
        top: "4px",
        "& #heading": {
            fontSize: "14px",
            color: "#0A0102",
            fontWeight: 600,
            // border: "1px solid green",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "start",
            position: "relative",
            left: "18px",
        },
        "& #middle-text": {
            fontSize: "10px",
            color: "#878787",
            position: "relative",
            left: "18px",
        },
    },
    RatingBox: {
        // border: "1px solid black",
        width: "50%",
        height: "22%",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        left: "18px",
    },
    Rating: {
        width: "38%",
        height: "90%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#388E3C",
        // border: "1px solid black",
        position: "relative",
        top: "3px",
        "& #rating": {
            fontSize: "10px",
            color: "#FFFFFF",
        },
        "& #star": {
            fontSize: "12px",
            color: "#FFFFFF",
        },
    },
    Rating1: {
        // border: "1px solid black",
        fontSize: "10px",
        position: "relative",
        left: "6px",
        top: "3px",
        "& #rating1": {
            fontSize: "10px",
            color: "#878787",
        },
    },
    Price: {
        position: "relative",
        left: "18px",
        "& #price": {
            fontSize: "12px",
            color: "#0A0102",
            fontWeight: 700
        },
        "& #discount": {
            fontSize: "10px",
            color: "#878787",
            textDecoration: "line-through",
            position: "relative",
            left: "6px",
        },
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        MainBookBox: {
            width: "58vw",
            height: "45vh",
        },
        Book_info_Box: {
            width: "92%",
            height: "92%",
            border: "1px solid #E2E2E2",
            position: "relative",
            left: "5px",
            "& :hover": {
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }
        },
        BookBox: {
            width: "100%",
            height: "62%",
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& #book-box-img":{
                width:"50%",
            }
        },
        BookInfo: {
            width: "100%",
            height: "37%",
        },
        Info: {
            width: "100%",
            height: "87%",
        },
    },
   
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {

        MainBookBox: {
            width: "40vw",
            height: "45vh",
        },
        Book_info_Box: {
            width: "92%",
            height: "92%",
            border: "1px solid #E2E2E2",
            position: "relative",
            left: "5px",
            "& :hover": {
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }
        },
        BookBox: {
            width: "100%",
            height: "62%",
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& #book-box-img":{
                width:"50%",
            }
        },
        BookInfo: {
            width: "100%",
            height: "37%",
        },
        Info: {
            width: "100%",
            height: "87%",
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        MainBookBox: {
            width: "22vw",
            height: "40vh",
        },
        Book_info_Box: {
            width: "92%",
            height: "92%",
            border: "1px solid #E2E2E2",
            position: "relative",
            left: "5px",
            "& :hover": {
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }
        },
        BookBox: {
            width: "100%",
            height: "62%",
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& #book-box-img":{
                width:"50%",
            }
        },
        BookInfo: {
            width: "100%",
            height: "37%",
        },
        Info: {
            width: "100%",
            height: "87%",
        },
    },
})

function Book(props) {
    const classes = useStyle()
    const [bookDetails, setBookDetails] = useState({ bookName: '', author: '', price: '', discountPrice: '' })
   
    return (
        <Box className={classes.MainBookBox}>
            <Box className={classes.Book_info_Box}>
                <Box className={classes.BookBox} >
                    <img src='../../Assert/Image 11.png' id='book-box-img' />
                </Box>
                <Box className={classes.BookInfo}>
                    <Box className={classes.Info}>
                        <span id='heading'>{props.book.bookName}</span>
                        <span id='middle-text'>{props.book.author}</span>
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
                            <span id='price'>Rs.{props.book.discountPrice}</span>
                            <span id='discount'>Rs.{props.book.price}</span>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Book