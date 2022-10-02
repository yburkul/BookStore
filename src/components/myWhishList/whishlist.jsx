import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useReducer, useState } from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Header from '../header/header';
import { getWishList, removewhishList } from '../service/dataService';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
  WhishlistBox: {
    width: "62vw",
    height: "auto",
    // border: "1px solid blue",
    marginLeft: "200px"
  },
  HomeWhish: {
    height: "55px",
    // border: "1px solid red",
    display: "flex",
    alignItems: "center",
    "& #wish": {
      color: "#9D9D9D",
      fontSize: "12px"
    },
    "& #list": {
      color: "#0A0102",
      fontSize: "12px",
      fontWeight: 500
    }
  },
  MainWhish: {
    height: "55px",
    width: "939px",
    border: "1px solid #E4E4E4",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    "& #myWhishlist": {
      color: "#0A0102",
      fontSize: "18px",
      position: "relative",
      left: "30px",
      fontWeight: 500,
    }
  },
  whish_list: {
    width: "939px",
    height: "160px",
    border: "1px solid #E4E4E4",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  WishImg: {
    width: "65px",
    height: "85px",
    // border:"1px solid red",
    position: "relative",
    left: "30px",
    "& #wishimg": {
      width: "100%",
      height: "100%"
    }
  },
  WishDetails: {
    width: "220px",
    height: "85px",
    // border:"1px solid red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "relative",
    left: "30px",
  },
  WishBookDetails: {
    width: "195px",
    height: "85px",
    // border:"1px solid red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "start",
    position: "relative",
    top: "5px",
    "& #book-name": {
      color: "#0A0102",
      fontSize: "18px",
    },
    "& #author-name": {
      color: "#9D9D9D",
      fontSize: "12px"
    },
    "& #dic-price": {
      color: "#0A0102",
      fontSize: "15px",
      fontWeight: 500
    },
    "& #actual-price": {
      color: "#9D9D9D",
      fontSize: "10px",
      textDecoration: "line-through",
      position: "relative",
      left: "65px",
      bottom: "20px"
    },
  },
  DeleteIcon: {
    width: "590px",
    height: "85px",
    // border:"1px solid red",
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    left: "30px",
    "& #delete": {
      position: "relative",
      top: "5px",
      color: "#9D9D9D"
    }
  },
  MainFooter: {
    width: "98.79vw",
    height: "8vh",
    backgroundColor: "#2E1D1E",
    position: "relative",
    top: "170px",
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
    WhishlistBox: {
      width: "80vw",
      height: "auto",
      marginLeft: "35px"
    },
    HomeWhish: {
      height: "55px",
    },
    MainWhish: {
      height: "55px",
      width: "250px",
      "& #myWhishlist": {
        left: "10px",
      }
    },
    whish_list: {
      width: "250px",
      height: "120px",
    },
    WishImg: {
      width: "280px",
      height: "60px",
      position: "relative",
      left: "20px",
    },
    WishDetails: {
      width: "130px",
      height: "85px",
      left: "30px",
    },
    WishBookDetails: {
      width: "195px",
      height: "88px",
      top: "8px",
      "& #book-name": {
        fontSize: "14px",
      },
      "& #author-name": {
        fontSize: "12px"
      },
      "& #dic-price": {
        fontSize: "14px",
      },
      "& #actual-price": {
        fontSize: "10px",
        position: "relative",
        left: "58px",
        bottom: "22px"
      },
    },
    DeleteIcon: {
      width: "500px",
      height: "72px",
      left: "0px",
      "& #delete":{
        position: "relative",
        right:"10px",
      }
    },
    MainFooter: {
      width: "100vw",
      height: "8vh",
      top: "80px",
      left: "0px"
    },
    footer: {
      width: "100%",
      height: "60%",
      fontSize: "10px"
    },
  },
  ['@media only screen and (min-width :481px) and (max-width :768px)']: {
    WhishlistBox: {
      width: "80vw",
      height: "auto",
      marginLeft: "45px"
    },
    HomeWhish: {
      height: "55px",
    },
    MainWhish: {
      height: "55px",
      width: "370px",
      "& #myWhishlist": {
        left: "10px",
      }
    },
    whish_list: {
      width: "370px",
      height: "140px",
    },
    WishImg: {
      width: "130px",
      height: "65px",
      position: "relative",
      left: "20px",     
    },
    WishDetails: {
      width: "200px",
      height: "85px",
      left: "30px",
    },
    WishBookDetails: {
      height: "85px",
      position: "relative",
      top: "5px",
      "& #book-name": {
        fontSize: "18px",
      },
      "& #author-name": {
        fontSize: "12px"
      },
      "& #dic-price": {
        fontSize: "15px",
      },
      "& #actual-price": {
        fontSize: "11px",
        position: "relative",
        left: "60px",
        bottom: "20px"
      },
    },
    DeleteIcon: {
      width: "400px",
      height: "85px",
      left: "0px",
      "& #delete":{
        position: "relative",
        right:"20px",
      }
    },
    MainFooter: {
      width: "100vw",
      height: "8vh",
      top: "250px",
      left: "0px"
    },
    footer: {
      width: "100%",
      height: "60%",
      fontSize: "10px"
    },
  },
  ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
    WhishlistBox: {
      width: "80vw",
      height: "auto",
      marginLeft: "95px"
    },
    HomeWhish: {
      height: "55px",
    },
    MainWhish: {
      height: "55px",
      width: "570px",
      "& #myWhishlist": {
        left: "10px",
      }
    },
    whish_list: {
      width: "570px",
      height: "140px",
    },
    WishImg: {
      width: "60px",
      height: "65px",
      position: "relative",
      left: "20px"
    },
    WishDetails: {
      width: "170px",
      height: "85px",
      left: "40px",
    },
    WishBookDetails: {
      height: "85px",
      position: "relative",
      top: "5px",
    },
    DeleteIcon: {
      width: "400px",
      height: "85px",
      left: "0px",
      "& #delete":{
        position: "relative",
        right:"20px",
      }
    },
    MainFooter: {
      width: "100vw",
      height: "8vh",
      top: "470px",
      left: "0px"
    },
    footer: {
      width: "70%",
      height: "60%",
      fontSize: "14px"
    },
  }
})

function Whishlist() {
  const classes = useStyle()
  const [mywishList, setMywhishList] = useState([])
  const [refreshPage, setRefreshPage] = useReducer(x => x + 1, 0)
  const navigate = useNavigate()
  useEffect(() => {
    getWishList().then((response) => {
      console.log(response)
      setMywhishList(response.data.result)
    }).catch((error => console.log(error)))
  }, [refreshPage])

  const removeFromWhishList = (removeId) => {
    let obj = {
      'product_id': removeId
    }
    removewhishList(obj).then((response) => {
      console.log(response.data.result, "=====remove===")
      setRefreshPage()
    }).catch((error => console.log(error)))
  }
  const goToHome = () => {
    navigate('/dashboard')
  }

  return (
    <Box>
      <Header />
      <Box className={classes.WhishlistBox}>
        <Box className={classes.HomeWhish}>
          <span id='wish' onClick={goToHome}>Home /</span>
          <span id='list'>My WhishList</span>
        </Box>
        <Box className={classes.MainWhish}>
          <span id='myWhishlist'>My Wishlist (02)</span>
        </Box>
        {
          mywishList.map((wishList) => (
            <Box className={classes.whish_list}>
              <Box className={classes.WishImg}>
                <img src='../../Assert/Image 11.png' id='wishimg' />
              </Box>
              <Box className={classes.WishDetails}>
                <Box className={classes.WishBookDetails}>
                  <span id='book-name'>{wishList.product_id.bookName}</span>
                  <span id='author-name'>{wishList.product_id.author}</span>
                  <span id='dic-price'>Rs. {wishList.product_id.discountPrice}</span>
                  <span id='actual-price'>Rs.{wishList.product_id.price}</span>
                </Box>
              </Box>
              <Box className={classes.DeleteIcon}>
                <DeleteOutlineOutlinedIcon id='delete' onClick={() => removeFromWhishList(wishList.product_id._id)} />
              </Box>
            </Box>))
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
export default Whishlist