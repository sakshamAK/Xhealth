import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPatientId } from '../../slices/patientIdSlice'
import { useTheme } from '@emotion/react'
import { setAptId } from '../../slices/aptIdSlice'
const AppointmentCard = ({aptid,idx,name,time,id}) => {
  
    const dispatch=useDispatch();
    const theme = useTheme();

    const setId = async (id)=>{
        dispatch(setPatientId(id))
        console.log("before storing",aptid)
        dispatch(setAptId(aptid))
        console.log("id=",id)
    } 

  const newLocal = `#736f0b`
  return (
    
    <Box className="main-card" display="flex"
     sx={{backgroundColor:'white',
    color:'black',
    padding:"2rem",
    alignItems:'center',
    height:"10vh",
    width:'100%',
    borderRadius:'0.5rem',
    justifyContent:"space-between",
    boxShadow:'0px 4px 18px 0px rgba(0, 0, 0, 0.15)'
    }}>
        <Typography sx={{fontFamily:'Poppins',fontWeight:'500',fontSize:"1.5vw",textAlign:"left",display:'flex',alignItems:'center'}}>{idx}</Typography>
        <Typography sx={{fontFamily:'Poppins',fontWeight:'500',fontSize:"1.5vw",textAlign:"left",backgroundColor:'#FFFB93',padding:'0.5rem',borderRadius:'1rem',display:'flex',alignItems:'center'}}><Typography sx={{fontFamily:'Poppins',fontWeight:'500',fontSize:"1.5vw",textAlign:"left",color:newLocal,}}>Patient Name : </Typography>{name}</Typography>
        <Typography sx={{fontFamily:'Poppins',fontWeight:'500',fontSize:"1.5vw",textAlign:"left",display:'flex',alignItems:'center'}}><Typography sx={{fontFamily:'Poppins',fontWeight:'500',fontSize:"1.5vw",textAlign:"left",color:`${theme.doctor.primary}`}}>Visiting time : </Typography>{time}</Typography>
        <Link to="/add-record"><Button sx={{boxShadow:'0px 4px 18px 0px rgba(0, 0, 0, 0.4)',fontFamily:'Poppins',fontWeight:'500',fontSize:"1.2rem",textTransform:'capitalize',color:"white",backgroundColor:"green","&:hover":{backgroundColor:'white',color:'green',boxShadow:'0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}} onClick={()=>setId(id)}>Examine</Button></Link>
    </Box>
    
  ) 
}

export default AppointmentCard