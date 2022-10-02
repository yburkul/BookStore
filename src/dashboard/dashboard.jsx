import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react'
import Book from '../components/book/book';
import Header from '../components/header/header';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { getbook } from '../components/service/dataService';
import BookSummary from '../components/bookSummary/bookSummary';
import Pagination from '@mui/material/Pagination';

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
        // border: "1px solid red",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "relative",
        left: "8px",
        fontSize: "10px",
        color: "#878787",
        opacity: 1,
    },
    MainFooter: {
        width: "98.79vw",
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
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        Book_Box: {
            width: '33vw',
            height: 'auto',
            margin: '0px',
            marginLeft: '60px',
        },
        Book_DropDown: {
            width: '63vw',
            height: '10vh',
            marginLeft: '60px',
        },
        items: {
            width: "100%",
            height: '70%',
            display: 'flex',
            flexDirection: 'row',
            position: "relative",
            left: "40px",
        },
        dropDown: {
            display: "none"
        },
        BottomBar: {
            width: "90%",
            height: "12vh",
            marginLeft: '0px',
        },
        Bar: {
            width: "82%",
            height: "50%",
            left: "5px",
            fontSize: "10px",
        },
        MainFooter: {
            width: "100%",
            height: "28px",
        },
        footer: {           
            width: "100%",
            height: "100%",
            fontSize: "10px",
            position: "relative",
            bottom:"7px"
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        Book_Box: {
            width: '88vw',
            height: 'auto',
            margin: '0px',
            marginLeft: '60px',
        },
        Book_DropDown: {
            width: '83vw',
            height: '8vh',
            justifyContent: "center",
            alignItems: "center",
            marginLeft: '50px',
        },
        items: {
            width: "33%",
            height: '60%',
            left: "0px",
        },
        dropDown: {
            width: "240px",
            position: "relative",
            left: "12px",
        },
        BottomBar: {
            width: "90%",
            height: "12vh",
            marginLeft: '10px',
        },
        Bar: {
            width: "82%",
            height: "50%",
            left: "15px",
            fontSize: "10px",
        },
        MainFooter: {
            height: "28px",
        },
        footer: {
            width: "100%",
            height: "100%",
            fontSize: "12px",
            position: "relative",
            bottom:"7px"
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        Book_Box: {
            width: '88vw',
            height: 'auto',
            margin: '0px',
            marginLeft: '60px',
            // border:"1px solid red"
        },
        Book_DropDown: {
            width: '87vw',
            height: '8vh',
            marginLeft: '60px',
        },
        items: {
            width: "33%",
            height: '50%',
            left: "0px",
        },
        dropDown: {
            width: "240px",
            position: "relative",
            left: "15px",
        },
        BottomBar: {
            width: "890px",
            height: "70px",
            marginLeft: '10px',
        },
        Bar: {
            width: "82%",
            height: "50%",
        },
        MainFooter: {
            width: "100%",
            height: "25px",
        },
        footer: {
            width: "100%",
            height: "100%",
            fontSize: "14px",
        },
    }
})

function Dashboard(props) {
    const classes = useStyle()
    const [bookList, setbookList] = useState([])
    const [display, setDisplay] = useState(false)
    const [inputFields, setInputFields] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(8)
    const [searchTerm, setSearchTerm] = useState("")
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = bookList.filter(book => book.bookName.includes(searchTerm)).slice(firstPostIndex, lastPostIndex)

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

    const searchHandler = (event) => {
        setSearchTerm(event.target.value)
    }
    console.log(setSearchTerm, '....value searched')

    return (
        <Box>
            <Header searchHandler={searchHandler} searchTerm={searchTerm} />
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
                        : currentPosts.map(
                            (book) => (<Box onClick={() => openSummary(book)}><Book book={book} /></Box>))
                }
            </Box>
            <Box className={classes.BottomBar}>
                {
                    display ? null :
                        <Box className={classes.Bar} >
                            <Pagination count={4} onChange={(e, page) => setCurrentPage(page)} />
                        </Box>
                }
            </Box>
            <Box className={classes.MainFooter}>
                <Box className={classes.footer}>
                    <span>Copyright © 2022, Bookstore Private Limited. All Rights Reserved</span>
                </Box>
            </Box>
        </Box>
    )
}
export default Dashboard