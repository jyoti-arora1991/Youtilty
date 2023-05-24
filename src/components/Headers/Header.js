import React from "react";
import { Box, Divider, Typography, Avatar } from "@mui/material";
import { FlightTakeoff } from "@mui/icons-material";
import GoogleLoginButton from "../GoogleLoginButton";
import {makeStyles} from "@mui/styles";
import img from '../../img/img5.jpeg'


const useStyles = makeStyles(theme => ({
  wave: {
    backgroundImage: `url(${img})`, // replace with your image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '200px', // adjust to your desired height
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <Box 
      
      sx={{
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        width: "100vh",
      }}
    >
      {/* <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 24, height: 24 }}
/> */}
<Avatar alt="Remy Sharp" src={img} sx={{ml:'20px', mt:'20px'}} />
{/* <Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56, ml }}
/> */}
      <Box ml={2} sx={{display:'flex', flexDirection:'flex-start', mt:'20px'}}>
        <Typography variant="h4"  sx={{ fontWeight:'bold', fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji', color: '#000' }}>Youtility</Typography>
      </Box>
    </Box>
  );
}

export default Header;
