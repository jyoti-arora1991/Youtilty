import React, {useState} from "react"
import { ListItem, List,Button, ListItemText,Box,ThemeProvider, ListItemIcon,  Typography, createTheme, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import InsightsIcon from '@mui/icons-material/Insights';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import GoogleLoginButton from "../GoogleLoginButton";




function AboutApp(props) {
    const theme = useTheme();
    const [isTextVisible, setIsTextVisible] = useState(true);
    const handleClick = () => {
      setIsTextVisible(false);
    };
    return (
        <Box sx={{display:'flex',height:'100%',flexDirection: {xs:'column', lg:'row', backgroundColor: '#d4d4d4'}}}>
        <Box sx={{
            mt:{xs:'40px', lg:'50px'},
            maxWidth: {
                xs: '100%',
                sm: '90%',
                lg: '40%',
              },
            display: 'flex',
            alignItems: {xs: 'flex-start', md: 'center'},
            flexDirection: 'column',
            textAlign: 'left',
            margin:'30px'
          }}>
           {isTextVisible && <Typography variant="h4" sx={{ fontWeight:'strong',fontWeight:400, fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji' }}>
            Unleash Your YouTube Potential with Real-Time Analytics Chat! 
            <Box bgcolor="#f2f2f2">
            <List sx={{ marginTop: '50px' }}>
            <ListItem>
            <ListItemIcon>
            <InsightsIcon sx={{ color: 'green' }}/>
        </ListItemIcon>
              <ListItemText primary={<Typography marginLeft={0}  sx={{ fontWeight:'bold', color: '#000',fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji', fontSize: {xs:'20px', sm:'20px',lg:'20px'} }}>
                Gain instant insights
              </Typography>} />
            </ListItem>
            <ListItem>
            <ListItemIcon>
            <ContactSupportIcon sx={{ color: 'green' }}/>
        </ListItemIcon>
              <ListItemText primary={<Typography  marginLeft={0} sx={{ fontWeight:'bold',color: '#000',fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji', fontSize: {xs:'20px', sm:'20px',lg:'20px'}  }}>
                Ask Questions
              </Typography>} />
            </ListItem>
            <ListItem>
            <ListItemIcon>
            <BatteryChargingFullIcon sx={{ color: 'green' }}/>
        </ListItemIcon>
              <ListItemText primary={<Typography sx={{fontWeight:'bold', color: '#000',fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji', fontSize: {xs:'20px', sm:'20px',lg:'20px'}  }}>
                Supercharge your channel's Performance
              </Typography>} />
            </ListItem>
          </List>
          </Box>
          </Typography>}
          {/* <Box sx={{backgroundColor:'#d4d4d4'}}>  */}
          {!isTextVisible && (  <>
          <Typography variant="h4" sx={{ mt:'200px',fontWeight: 'bold', fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji' }}>
            Ready to take your channel to the next level?
          </Typography>
          
          <Typography variant="h4" sx={{ mt:'20px',fontWeight: 'bold', fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji' }}>
            To make this happen, we need your permission to access your Google account.
          </Typography>
        </>
            )}
            {/* </Box> */}
        </Box>
        {isTextVisible && <Button variant="contained"  onClick={handleClick} sx={{borderRadius: '10px',padding:'10px','&:hover': {
      backgroundColor: '#000', // Darker shade on hover
    },
    color: '#FFFFFF',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold'}}>
  Let's Go
</Button>}
{!isTextVisible && <GoogleLoginButton {...props}/>}
        {/* <Box mt={1} sx={{ display: 'block' }}> */}
          {/* <img src={img} alt="your-image" sx={{ width:'10px', height: '10px' }} /> */}
          {/* <img src={img} alt="your-image" /> */}

          

        {/* </Box> */}
        </Box>
      );
    }
    
    

export default AboutApp
