import { Box, Input, InputLabel, Typography } from "@mui/material"
import img from '../../assets/userSU.png'
import { Link, useNavigate } from "react-router-dom";
import styles from "../Login/Login.module.css";
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useUserSignupMutation } from "../../slices/usersApiSlice";
import { setUserCredentials } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { signUpDetails } from "../../dump/";

export const SignupUser = () => {
    const theme = useTheme()
    const primary = '#50144C'
    const [creds, setCreds] = useState({gender:'',bloodGroup:""});
    const [signup] = useUserSignupMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.auth);
    

    const getCredentials = e => {
        const { value, name } = e.target;
        setCreds(p => ({ ...p, [name]: value }));
        console.log(creds);
    }

    const submitCredentials = async (e, data) => {
        try {
            e.preventDefault();
            const res = await signup(data);
            console.log(res.error)
            !res.error&&dispatch(setUserCredentials(res));
            toast.success("Welcome User!")
        }
        catch (e) {
            toast.error("Invalid Credentials!!")
        }
    }

    useEffect(() => {
        navigate(userInfo ? "/dashboard-user" : "/signup-user");
    }, [navigate, userInfo])

    return (
        <Box className="maincontainer" sx={{ display: 'flex', boxSizing: "border-box" }} >
            <Box className='left-section'
                sx={{
                    backgroundColor: primary,
                    height: "100vh",
                    width: "15%",
                    position: 'relative',
                }}> 

                <img src={img} alt="signup image" style={{ position: 'absolute', bottom: '0', width: '100%' }} />
                <Typography sx={{ color: 'white', fontWeight: "600", fontFamily: 'Poppins', position: 'absolute', right: "0", fontSize: '5vw' }}>REGI</Typography>

            </Box>

            <Box className='right-section' sx={{ position: 'relative', boxSizing: "border-box", width: '85%', display: 'flex', flexDirection: 'column' }}>
                <Typography sx={{ color: primary, fontWeight: "600", fontFamily: 'Poppins', position: 'absolute', left: "0", fontSize: '5vw', top: '0' }}>STER</Typography>

                {/* <Box sx={{display:'flex',backgroundColor:"red",flexDirection:'column',alignItems:'center'}}> */}
                <Box sx={{
                    display: "flex",
                    // flexDirection: "column",
                    height: '80vh',
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    // backgroundColor:'pink',
                    marginTop: "8rem",
                    padding: '2rem',
                    position: 'relative'

                }}
                >
                    {
                        signUpDetails.map(({ name, type, label }) => {
                        
                            if (name == 'gender') {

                                return (
                                    <Box key={name} sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "26rem",
                                        alignItems: "center",
                                    }}>
                                        <InputLabel
                                            htmlFor={name}
                                            sx={{
                                                alignSelf: "flex-start",
                                                paddingInline: "1rem",
                                                fontSize: "1.2rem",
                                                fontFamily: 'Poppins',
                                                color: primary,

                                                [theme.breakpoints.down("xsm")]: {
                                                    fontSize: "1rem",
                                                    paddingInline: "1rem"
                                                },
                                            }}
                                        >
                                            {label}
                                        </InputLabel>
                                        <select required style={{
                                            borderRadius: "5px",
                                            // outlineColor: theme.patient.inputActive,
                                            // border: `1px solid ${theme.patient.inputDefault}`,
                                            outline: 'none',
                                            border: 'none',
                                            width: "100%",
                                            padding: "0 1rem",
                                            height: '3rem',
                                            fontSize: "1rem",
                                            fontFamily: 'Poppins',
                                            backgroundColor: theme.inputBackground,
                                            "@media (maxWidth: 449.95px)": {
                                                fontSize: "1rem",
                                                paddingInline: "1rem"
                                            },


                                            "&:focus": {

                                            },
                                        }}

                                            key={name} value={creds.gender}  onChange={(e) => { setCreds(p => ({ ...p, 'gender': e.target.value })); console.log(creds) }}>
                                            <option value="Male">Male</option   >
                                            <option value="Female">Female</option   >

                                        </select></Box>
                                )
                            }


                            else if (name == 'bloodGroup') {

                                return (
                                    <Box key={name} sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "26rem",
                                        alignItems: "center",
                                    }}>
                                        <InputLabel
                                            htmlFor={name}
                                            sx={{
                                                alignSelf: "flex-start",
                                                paddingInline: "1rem",
                                                fontSize: "1.2rem",
                                                fontFamily: 'Poppins',
                                                color: primary,

                                                [theme.breakpoints.down("xsm")]: {
                                                    fontSize: "1rem",
                                                    paddingInline: "1rem"
                                                },
                                            }}
                                        >
                                            {label}
                                        </InputLabel>
                                        <select style={{
                                            borderRadius: "5px",
                                            // outlineColor: theme.patient.inputActive,
                                            // border: `1px solid ${theme.patient.inputDefault}`,
                                            outline: 'none',
                                            border: 'none',
                                            width: "100%",
                                            padding: "0 1rem",
                                            height: '3rem',
                                            fontSize: "1rem",
                                            fontFamily: 'Poppins',
                                            backgroundColor: theme.inputBackground,

                                            "@media (maxWidth: 449.95px)": {
                                                fontSize: "1rem",
                                                paddingInline: "1rem"
                                            },

                                            "&:focus": {

                                            },
                                        }}

                                            key={name} value={creds.bloodGroup}  onChange={(e) => { setCreds(p => ({ ...p, 'bloodGroup': e.target.value })); console.log(creds) }}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>

                                        </select></Box>
                                )
                            }




                        
                        
                        
                        
                         else{ return(
                            <Box key={name} sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "26rem",
                                alignItems: "center",
                            }}
                            >
                                <InputLabel
                                    htmlFor={name}
                                    sx={{
                                        alignSelf: "flex-start",
                                        paddingInline: "1rem",
                                        fontSize: "1.2rem",
                                        fontFamily: 'Poppins',
                                        color: primary,

                                        [theme.breakpoints.down("xsm")]: {
                                            fontSize: "1rem",
                                            paddingInline: "1rem"
                                        },
                                    }}
                                >
                                    {label}
                                </InputLabel>

                                <Input
                                    id={name}
                                    type={type}
                                    name={name}
                                    sx={{
                                        borderRadius: "5px",
                                        // outlineColor: theme.patient.inputActive,
                                        // border: `1px solid ${theme.patient.inputDefault}`,
                                        width: "100%",
                                        padding: "0 1rem",
                                        height: '3rem',
                                        fontSize: "1rem",
                                        fontFamily: 'Poppins',
                                        backgroundColor: theme.inputBackground,

                                        [theme.breakpoints.down("xsm")]: {
                                            fontSize: "1rem"
                                        },


                                        "&:focus": {

                                        },
                                    }}
                                    disableUnderline
                                    onChange={e => getCredentials(e)}
                                />
                            </Box>
                        )}})
                    }


                    <Input type="submit" value="Register"
                        disableUnderline
                        sx={{
                            borderRadius: "20px",
                            backgroundColor: theme.success,
                            border: "none",
                            marginTop: '0',
                            width: "400px",
                            padding: "0.4rem 1rem",
                            color: "white",
                            fontSize: "1.4rem",
                            fontWeight: "600",
                            [theme.breakpoints.down("xsm")]: {
                                fontSize: "1rem",
                                paddingInline: "1rem"
                            },



                        }}
                        onClick={(e) => submitCredentials(e, creds)}
                    />
                </Box>

                {/* </Box> */}

            </Box>

        </Box>
    )
}

