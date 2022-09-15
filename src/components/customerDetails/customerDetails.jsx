import { Box, Button, ButtonBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useState } from 'react';
import { getUserAddress } from '../service/dataService';
const addressRegex = /^[#.0-9a-zA-Z\s,-]+$/;
const cityRegex = /^[A-Z]{1}[a-z]{2,}$/;
const stateRegex = /^[A-Z]{1}[a-z]{2,}$/;

const useStyle = makeStyles({
    MainBox: {
        width: "60vw",
        height: "70vh",
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
    },
    Details: {
        width: "100%",
        height: "85%",
        // border: "1px solid #DCDCDC",
    },
    HeadName: {
        width: "94%",
        height: "10%",
        // border: "1px solid green",
        color: "#333232",
        fontSize: "17px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontWeight: "500",
        position: "relative",
        left: "25px",
        "& #newAddress": {
            color: "#A03037",
            backgroundColor: "#ffff",
            textTransform: "none",
            fontSize: "12px",
            width: "150px",
            height: "35px",
            border: "1px solid #A03037"
        }
    },
    Address: {
        width: "65%",
        height: "70%",
        // border: "1px solid red",
        position: "relative",
        left: "40px",
    },
    NamePhone: {
        width: "100%",
        height: "28%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Name: {
        width: "48%",
        height: "80%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "8px",
        "& #name": {
            display: "flex",
            color: "#0A0102",
            fontSize: "12px"
        }
    },
    Phone: {
        width: "48%",
        height: "80%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "8px",
        "& #phone": {
            display: "flex",
            color: "#0A0102",
            fontSize: "12px",
            position: "relative",
            left: "8px",
        }
    },
    details: {
        width: "100%",
        height: "45%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        position: "relative",
        top: "8px",
        "& #addressBox": {
            height: "65px",
        },
        "& #address1": {
            width: "10%",
            display: "flex",
            color: "#0A0102",
            fontSize: "12px",
        }
    },
    CityState: {
        width: "100%",
        height: "28%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    City: {
        width: "48%",
        height: "80%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "8px",
        "& #city": {
            display: "flex",
            color: "#0A0102",
            fontSize: "12px"
        }
    },
    State: {
        width: "48%",
        height: "80%",
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "8px",
        "& #state": {
            display: "flex",
            color: "#0A0102",
            fontSize: "12px",
            position: "relative",
            left: "8px",
        }
    },
    Type: {
        width: "92%",
        height: "15%",
        // border: "1px solid black",
        position: "relative",
        top: "7px",
        position: "relative",
        left: "40px"
    },
    TypeName: {
        width: "30%",
        height: "30%",
        // border: "1px solid black",
        color: "#0A0102",
        fontSize: "12px",
        display: "flex"
    },
    Diff_Type: {
        width: "70%",
        height: "50%",
        // border: "1px solid black",
        "& #text": {
            color: "#0A0102",
            fontSize: "12px",
            position: "relative",
            right: "120px",
            top: "8px",
        }
    },
    continue: {
        width: "100%",
        height: "50%",
        // border: "1px solid black",
        display: "flex",
        justifyContent: "end",
        position: "relative",
        bottom: "5px",
        "& #continue": {
            color: "#FFFFFF",
            backgroundColor: "#3371B5",
            fontSize: "12px",
            width: "150px",
            height: "35px",
            // border:"1px solid #A03037"
        }
    },
})

function CustomerDetails(props) {
    const classes = useStyle()
    const [openOrder, setOrder] = useState(false)
    const [addressDetails, setAddressDetails] = useState({
        addressType: "",
        fullAddress: "",
        city: "",
        state: ""
    })
    const [regexObj, setRegexObj] = React.useState({
        fullAddressBorder: false,
        fullAddressHelper: "",
        cityBorder: false,
        cityHelper: "",
        stateBorder: false,
        stateHelper: ""
    })
    const takeType = (event) => {
        setAddressDetails(prevState => ({
            ...prevState,
            addressType: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeAddress = (event) => {
        setAddressDetails(prevState => ({
            ...prevState,
            fullAddress: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeCity = (event) => {
        setAddressDetails(prevState => ({
            ...prevState,
            city: event.target.value
        }))
        console.log(event.target.value)
    }
    const takeState = (event) => {
        setAddressDetails(prevState => ({
            ...prevState,
            state: event.target.value
        }))
        console.log(event.target.value)
    }

    const openOrderSummary = () => {
        props.ordersummary()
        setOrder(true)

        let addressTest = addressRegex.test(addressDetails.fullAddress)
        let cityTest = cityRegex.test(addressDetails.city)
        let stateTest = stateRegex.test(addressDetails.state)

        if (addressTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                fullAddressBorder: true,
                fullAddressHelper: "Enter correct Address"
            }))
        }
        else if (addressTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                fullAddressBorder: false,
                fullAddressHelper: ""
            }))
        }

        if (cityTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                cityBorder: true,
                cityHelper: "Enter correct City"
            }))
        }
        else if (cityTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                cityBorder: false,
                cityHelper: ""
            }))
        }
        if (stateTest === false) {
            setRegexObj(prevState => ({
                ...prevState,
                stateBorder: true,
                stateHelper: "Enter correct State"
            }))
        }
        else if (stateTest === true) {
            setRegexObj(prevState => ({
                ...prevState,
                stateBorder: false,
                stateHelper: ""
            }))
        }
        if (addressTest === true && cityTest === true && stateTest === true) {
            getUserAddress(addressDetails).then((response) => {
                console.log(response)
            }).catch((error) => { console.log(error) })
            // console.log("--------", addressDetails)
        }
    };

    return (
        <Box>
            <Box className={classes.MainBox} >
                <Box className={classes.Details}>
                    <Box className={classes.HeadName}>
                        <span>Customer Details</span>
                        {
                            openOrder ? null : <Button variant="contained" id='newAddress'>Add New Address</Button>
                        }
                    </Box>
                    <Box className={classes.Address}>
                        <Box className={classes.NamePhone}>
                            <Box className={classes.Name}>
                                <span id="name">Full Name</span>
                                <TextField variant="outlined" size="small" sx={{ height: "40px" }} />
                            </Box>
                            <Box className={classes.Phone}>
                                <span id="phone">Mobile number</span>
                                <TextField variant="outlined" size="small" sx={{ height: "40px" }} />
                            </Box>
                        </Box>
                        <Box className={classes.details}>
                            <span id="address1">Address</span>
                            <TextField variant="outlined" size="small" id='addressBox' onChange={takeAddress}
                                error={regexObj.fullAddressBorder} helperText={regexObj.fullAddressHelper} />
                        </Box>
                        <Box className={classes.CityState}>
                            <Box className={classes.City}>
                                <span id="city">city/town</span>
                                <TextField variant="outlined" size="small" sx={{ height: "40px" }} onChange={takeCity}
                                    error={regexObj.cityBorder} helperText={regexObj.cityHelper} />
                            </Box>
                            <Box className={classes.State}>
                                <span id="state">State</span>
                                <TextField variant="outlined" size="small" sx={{ height: "40px" }} onChange={takeState}
                                    error={regexObj.stateBorder} helperText={regexObj.stateHelper} />
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.Type}>
                        <Box className={classes.TypeName}>
                            <span>Type</span>
                        </Box>
                        <Box className={classes.Diff_Type}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={takeType}
                            >
                                <FormControlLabel value="Home" control={<Radio size="12px" />} sx={{ width: "140px" }} />
                                <span id='text'>Home</span>
                                <FormControlLabel value="Work" control={<Radio size="12px" />} sx={{ width: "140px" }} />
                                <span id='text'>Work</span>
                                <FormControlLabel value="Other" control={<Radio size="12px" />} sx={{ width: "140px" }} />
                                <span id='text'>Other</span>
                            </RadioGroup>
                        </Box>
                        <Box className={classes.continue}>
                            {
                                openOrder ? null : <Button variant="contained" id='continue' onClick={openOrderSummary}>Continue</Button>
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default CustomerDetails