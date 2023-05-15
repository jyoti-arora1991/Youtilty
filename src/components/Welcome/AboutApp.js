import React from "react"
import { ListItem, List, ListItemText,Box,ThemeProvider, ListItemIcon,  Typography, createTheme, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import GppGoodIcon from '@mui/icons-material/GppGood';



function AboutApp() {
    const theme = useTheme();


// # {
//     xs: 'column',
//     [theme.breakpoints.up('sm')]: 'row',
//     [theme.breakpoints.up('md')]: 'row',
//     [theme.breakpoints.up('lg')]: 'row',

    return (
        <Box sx={{display:'flex',flexDirection: {xs:'column', lg:'row'}}}>
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
          <Typography variant="h4" sx={{ fontWeight:'strong',fontWeight:400, fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji' }}>
            Simplfy YouTube Analytics With Our Interactive Tool. 
            <Box bgcolor="#f2f2f2">
            <List sx={{ marginTop: '50px' }}>
            <ListItem>
            <ListItemIcon>
            <GppGoodIcon sx={{ color: 'green' }}/>
        </ListItemIcon>
              <ListItemText primary={<Typography marginLeft={0}  sx={{ color: '#000',fontFamily: 'Big Caslon', fontSize: {xs:'16px', sm:'20px',lg:'20px'} }}>
                Why isn't your channel popular ?
              </Typography>} />
            </ListItem>
            <ListItem>
            <ListItemIcon>
            <GppGoodIcon sx={{ color: 'green' }}/>
        </ListItemIcon>
              <ListItemText primary={<Typography  marginLeft={0} sx={{ color: '#000',fontFamily: 'Big Caslon', fontSize: {xs:'16px', sm:'20px',lg:'20px'}  }}>
                Why are some videos not getting views ?
              </Typography>} />
            </ListItem>
            <ListItem>
            <ListItemIcon>
            <GppGoodIcon sx={{ color: 'green' }}/>
        </ListItemIcon>
              <ListItemText primary={<Typography sx={{ color: '#000',fontFamily: 'Big Caslon', fontSize: {xs:'16px', sm:'20px',lg:'20px'}  }}>
                What strategies can you use to get more views and a lot more ?
              </Typography>} />
            </ListItem>
          </List>
          </Box>
          </Typography>
        </Box>
        {/* <Box mt={1} sx={{ display: 'block' }}> */}
          {/* <img src={img} alt="your-image" sx={{ width:'10px', height: '10px' }} /> */}
          {/* <img src={img} alt="your-image" /> */}

          

        {/* </Box> */}
        </Box>
      );
    }
    
    

export default AboutApp
