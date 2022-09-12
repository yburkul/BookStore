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
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

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
    cartIcon:{
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

function Header(props) {
    const classes = useStyle()
    const navigate = useNavigate()
    const openCart = () =>{
        navigate('/mycart')
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#A03037" }}>
                <Toolbar>
                    <Box className={classes.blankBox1} />
                    <Box className={classes.BookImg}>
                        <img src='../../Assert/education.svg' />
                    </Box>
                    <Typography
                        className={classes.bookName}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Bookstore
                    </Typography>
                    <Search className={classes.SerachBox}>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: "#9D9D9D" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ color: "#9D9D9D" }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 0.4 }} />
                    <Box className={classes.Icon} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton className={classes.profileIcon}
                            size="large"
                            color="inherit"
                        >
                            <PersonOutlineSharp />
                            <Typography id="profileName">Profile</Typography>
                        </IconButton>
                    </Box>
                    <Box className={classes.CartBox} onClick={openCart}>
                        <IconButton className={classes.cartIcon}
                            size="large"
                            color="inherit"
                        >
                            <ShoppingCartOutlinedIcon />
                            <Typography id="cart">Cart</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Header