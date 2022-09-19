import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import Book from '../components/book/book';
import Header from '../components/header/header';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getbook } from '../components/service/dataService';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import BookSummary from '../components/bookSummary/bookSummary';

const useStyle = makeStyles({
    Book_Box: {
        width: '73vw',
        height: 'auto',
        margin: '0px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '170px',
    },
    Book_DropDown: {
        width: '73vw',
        height: '12vh',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: '170px',
    },
    items: {
        width: "20%",
        height: '35%',
        display: 'flex',
        flexDirection: 'row',
        position: "relative",
        left: "14px",
        "& #books": {
            color: "#0A0102",
            fontSize: "19px",
            fontWeight: 450,
        },
        "& #items": {
            color: "#9D9D9D",
            fontSize: "10px",
            position: "relative",
            left: "8px",
            top: "8px"
        }
    },
    dropDown: {
        width: "250px",
        "& #dropdown": {
            backgroundColor: "#FFFFFF",
            border: "1px solid #00000029",
            color: "#0A0102",
            width: "200px",
            height: "27px",
            textTransform: "none",
            fontSize: "14px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            left: "30px",
        }
    },
    BottomBar: {
        width: "72vw",
        height: "12vh",
        // border:"1px solid red",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginLeft: '170px',
    },
    Bar: {
        width: "62%",
        height: "50%",
        // border:"1px solid red",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
        left: "8px",
        fontSize: "10px",
        color: "#878787",
        opacity: 1,
        "& #arrow1": {
            color: "#E2E2E2",
            border: "1px solid #E2E2E2",
            opacity: 1,
            borderRadius: "50%"
        },
        "& #arrow2": {
            color: "#0A0102",
            border: "1px solid #E2E2E2",
            opacity: 1,
            borderRadius: "50%"
        },
        "& #one": {
            color: "#ffff",
            backgroundColor: "#8F2B2F",
            width: "25px",
            height: "25px",
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }
    },
    MainFooter: {
        width: "100vw",
        height: "8vh",
        // border:"1px solid red",
        backgroundColor: "#2E1D1E"
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
    }
})

function Dashboard(props) {
    const classes = useStyle()
    const [bookList, setbookList] = useState([])
    const [display, setDisplay] = useState(false)
    const [inputFields, setInputFields] = useState({})
    const openSummary = (bookObj) => {
        console.log(bookObj, "this is the book details")
        setInputFields(bookObj)
        setDisplay(true);
        console.log(inputFields, "this is book data")
    }
    useEffect(() => {
        getbook().then((response) => {
            console.log(response)
            setbookList(response.data.result)
        }).catch((error => console.log(error)))
    }, [])

    return (
        <Box>
            <Header />
            <Box className={classes.Book_DropDown}>
                <Box className={classes.items}>
                    <span id='books'>Books</span>
                    <span id='items'>(30 items)</span>
                </Box>
                <Box className={classes.dropDown}>
                    <Button id='dropdown' aria-haspopup="true" variant="outlined" disableElevation
                        endIcon={<KeyboardArrowDownIcon sx={{ color: "#0A0102" }} />}
                    >Sort by relevance
                    </Button>
                </Box>
            </Box>
            <Box className={classes.Book_Box}>
                {
                    display ? <BookSummary
                        bookName={inputFields.bookName} author={inputFields.author}
                        discountPrice={inputFields.discountPrice} price={inputFields.price} _id={inputFields._id}
                    />
                        : bookList.map(
                            (book) => (<Box onClick={() => openSummary(book)}><Book book={book} /></Box>))
                }
            </Box>
            <Box className={classes.BottomBar}>
                {
                    display ? null :

                        <Box className={classes.Bar}>
                            <KeyboardArrowLeftRoundedIcon id='arrow1' />
                            <span id="one">1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>...</span>
                            <span>18</span>
                            <KeyboardArrowRightRoundedIcon id='arrow2' />
                        </Box>
                }
            </Box>
            <Box className={classes.MainFooter}>
                <Box className={classes.footer}>
                    <span>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</span>
                </Box>
            </Box>
        </Box>
    )
}
export default Dashboard