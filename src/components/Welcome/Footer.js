import React from "react"
import { ListItem, List, ListItemText, ThemeProvider, Box,Typography,Card,CardContent, createTheme, Grid } from '@mui/material';
import GoogleLoginButton from "../GoogleLoginButton";





function Footer(props) {
    return (
      
        <>        
        <GoogleLoginButton {...props}/>
        {/* <Box mt ={5} style={{ backgroundColor: '#f3ebff', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '20px', paddingRight: '50px', height: {xs:'5px',lg:'100px'} }}> */}

{/* <Typography variant="h4" sx={{ fontFamily: 'Raleway', color: '#000000' }}>
  How it works
</Typography> */}
{/* </Box> */}
    {/* <Box sx={{display:{xs: 'none', lg: 'flex' },backgroundColor: '#f3ebff', paddingLeft: '100px', paddingRight: '100px', gap: '40px', justifyContent: 'flex-start' }}> */}
    {/* <Box sx={{ display: { xs: 'none', lg: 'block' }}}> */}

    {/* <Card ml={20} sx={{ margin: '20px',width: '180px', height: '220px', padding: '20px', borderRadius: '32px',boxShadow: '0px 4px 4px rgba(01 1, 1, 1)' }}>
          <CardContent>
            <Typography variant="h3" sx={{ fontSize: 16 , fontFamily: 'Raleway'}} gutterBottom>
              Select a channel or video for detailed analytics:    </Typography>
            <Typography sx={{ fontSize: 14, fontFamily: 'Raleway' }} color="text.secondary" gutterBottom>
              Get insights into your content's performance by selecting the specific channel or video you want to analyze.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ margin: '10px',width: '180px', height: '220px', padding: '20px', borderRadius: '32px',boxShadow: '0px 4px 4px rgba(01 1, 1, 1)' }}>
          <CardContent>
            <Typography variant="h3" sx={{ fontSize: 16 , fontFamily: 'Raleway'}} gutterBottom>
              Select a channel or video for detailed analytics:    </Typography>
            <Typography sx={{ fontSize: 14, fontFamily: 'Raleway' }} color="text.secondary" gutterBottom>
              Get insights into your content's performance by selecting the specific channel or video you want to analyze.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ margin: '10px',width: '180px', height: '220px', padding: '20px', borderRadius: '32px',boxShadow: '0px 4px 4px rgba(01 1, 1, 1)' }}>
          <CardContent>
            <Typography variant="h3" sx={{ fontSize: 16 , fontFamily: 'Raleway'}} gutterBottom>
              Ask a question, get an answer
            </Typography>
            <Typography sx={{ fontSize: 14, fontFamily: 'Raleway' }} color="text.secondary" gutterBottom>
              Our AI-powered analytics will analyze your data and provide you with clear, concise answers to help you make informed decisions about your channel's growth.    </Typography>
          </CardContent>
        </Card>
      </Box> 
      <Box  sx={{display:{xs: 'flex', lg: 'none' },backgroundColor: '#f3ebff', paddingLeft: 'auto', paddingRight: 'auto', gap: '40px', justifyContent: 'flex-start' }}>

      <List ml={100} sx={{ marginTop: '10px' }}>
            <ListItem>
              <ListItemText primary={<Typography  sx={{ fontFamily: 'Raleway', fontSize: {xs:'14px', sm:'20px',lg:'20px'} }}>
                - Why isn't your channel popular?
              </Typography>} />
            </ListItem>
            <ListItem>
              <ListItemText primary={<Typography  sx={{ fontFamily: 'Raleway', fontSize: {xs:'14px', sm:'20px',lg:'20px'}  }}>
                - Why are some videos not getting views?
              </Typography>} />
            </ListItem>
            <ListItem>
              <ListItemText primary={<Typography variant="body1" sx={{ fontFamily: 'Raleway', fontSize: {xs:'14px', sm:'20px',lg:'20px'}  }}>
                - What strategies can you use to get more views and a lot more?
              </Typography>} />
            </ListItem>
          </List>  */}
          {/* <Box sx={{ marginLeft: "auto", position:'fixed', right:0, bottom:1 }}>
        <GoogleLoginButton />
      </Box>
          </Box>  */}
          
      </>
    );

}
export default Footer;