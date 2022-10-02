import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineSharp from '@mui/icons-material/PersonOutlineSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu'
import MoreIcon from '@mui/icons-material/MoreVert';

import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux'
import { bookList } from '../../redux/bookAction';

const useStyle = makeStyles({
    blankBox1: {
        width: "10%"
    },
    BookImg: {
        width: "45px",
    },
    SerachBox: {
        position: "relative",
        left: "6px"
    },
    Icon: {
        width: "100px",
        height: "60px",
        border: "1px solid #A03037",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-evenly",
        alignItems: "center",
        borderLeftColor: "#8F2B2F",
        borderRightColor: "#8F2B2F"
    },
    profileIcon: {
        width: "22px",
        height: "22px",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-evenly",
        alignItems: "center",
        "& #profileName": {
            fontSize: "12px",
            position: "relative",
            top: "5px",
        }
    },
    CartBox: {
        width: "100px",
        height: "60px",
        border: "1px solid #A03037",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRightColor: "#8F2B2F"
    },
    cartIcon: {
        width: "22px",
        height: "22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& #cart": {
            fontSize: "12px",
            position: "relative",
            top: "5px",
        }
    },
    ['@media only screen and (min-width :320px) and (max-width :480px)']: {
        Serach_Icon:{
            position:"relative",
            display:"flex",
            width:"100%"
        },
        SerachBox: {
            position: "relative",
            left: "16px",
        },
    },
    ['@media only screen and (min-width :481px) and (max-width :768px)']: {
        blankBox1: {
            width: "20px",
        },
        SerachBox: {
            position: "relative",
            left: "16px",
        },
    },
    ['@media only screen and (min-width :769px) and (max-width :1024px)']: {
        blankBox1: {
            width: "15px",
        },
        SerachBox: {
            position: "relative",
            left: "26px",
            width:"100%",
            display:"flex"

        },
        Icon: {
            position: "relative",
            left: "40px",
        },
        CartBox: {
            position: "relative",
            left: "40px",
        },
    }
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FCFCFC",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '58ch',
        },
    },
}));

function Header({ searchHandler, searchTerm }) {
    const classes = useStyle()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    let result = useSelector((state) => state.bookData);
    const dispatch = useDispatch()
    const openCart = () => {
        navigate('/mycart')
    }
    const openHome = () => {
        navigate('/dashboard')
    }
   
    React.useEffect(()=>{
        dispatch(bookList())
    },[])

  
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <Badge badgeContent={result.length} color="error">
                        <ShoppingCartOutlinedIcon onClick={openCart}/>
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                      <PersonOutlineSharp />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#A03037" }}>
                <Toolbar>
                    <Box className={classes.blankBox1} />
                    <Box className={classes.BookImg} onClick={openHome}>
                        <img src='../../Assert/education.svg' />
                    </Box>
                    <Typography
                        className={classes.bookName}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'flex'} }}
                    >
                        Bookstore
                    </Typography>
                    <Search className={classes.SerachBox}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: "#9D9D9D" ,
                            display: { xs: 'block',sm:'flex', md: 'flex' }}} className={classes.Serach_Icon}/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ color: "#9D9D9D", display: { xs: 'block',sm:'flex', md: 'flex' } }}
                            value={searchTerm}
                            onChange={searchHandler}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 0.4 }} />
                    <Box className={classes.Icon} 
                    sx={{ display: { xs: 'none',sm:'flex', md: 'flex' } }}>
                        <IconButton className={classes.profileIcon}
                            size="large"
                            color="inherit"
                        >
                            <PersonOutlineSharp />
                            <Typography id="profileName">Profile</Typography>
                        </IconButton>
                    </Box>
                    <Box className={classes.CartBox} onClick={openCart} 
                    sx={{ display: { xs: 'none',sm:'flex', md: 'flex' } }}>
                        <IconButton className={classes.cartIcon}
                            size="large"
                            color="inherit"
                        >
                            <Badge badgeContent={result.length} 
                            color="error">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                            <Typography id="cart">Cart</Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm:'none', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
export default Header