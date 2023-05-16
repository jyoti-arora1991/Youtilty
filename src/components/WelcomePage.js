import React from 'react';
import img from '../img/image2.png'
import { ListItem, List, ListItemText, ThemeProvider, Typography, createTheme, Grid } from '@mui/material';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { FlightTakeoff } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GoogleLoginButton from './GoogleLoginButton';
import Headers from './Headers/Header.js';
import AboutApp from './Welcome/AboutApp';
import Footer from './Welcome/Footer';
import Layout from './Layout/Layout';






// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#9370DB',
//     },
//   },
// });

function WelcomePage(props) {


  return (
    <>
    <Layout>
    
    <Headers  {...props}/> 
    <AboutApp {...props}/>
{/* <Footer  {...props}/> */}

</Layout>


</>
    );
  }
  
  export default WelcomePage;
  //   <>
  //   <Box
  // sx={{
  //   backgroundColor: '#f2f2f2',
  //   height: '100px',
  //   paddingLeft: { xs: 2, sm: 4, md: 6 },
  //   paddingRight: { xs: 2, sm: 4, md: 6 },
  //   display: 'flex',
//     // alignItems: 'center',
//     justifyContent: 'flex-start'
//   }}
// >
// <Box sx={{ display: 'flex',  justifyContent: 'flex-start' }}>
//     <FlightTakeoff fontSize="large" color="primary" />
//     <Typography variant="h6" sx={{ fontFamily: 'Raleway', color: '#ff6885', ml: 2 }}>
//       Youtility.com
//     </Typography>
//   </Box>
//   <Box sx={{ display: 'flex',  justifyContent: 'flex-end' }}></Box>
//   <GoogleLoginButton {...props} />
//   </Box>

// <Box mt={10}>
//   <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={2}>
    {/* <Grid item xs={10} md={8} lg={6}>
      <Box style={{ display: 'flex', flexDirection: { xs: 'column', md: 'row-reverse' }, paddingLeft: '50px', paddingRight: '10px', height: '400px' }}>
        <Typography variant="h3" style={{ fontFamily: 'Raleway', color: '#000000' }}>
          Analyze your YouTube data easily with our app's simple interface. And get answers to questions like:
        </Typography>
       
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, flexGrow: 1 }}>
          <img src={img} alt="your-image" style={{ maxWidth: { xs: '100%', md: '50%' }, height: 'auto',width:'auto', paddingRight: { xs: '0px', md: '10px' } }} />
        </Box>
      </Box>
    </Grid>
  </Grid>
</Box> */}
 

   
      {/* <Box style={{ backgroundColor: '#f2f2f2', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '150px', paddingRight: '150px', height: '100px' }}>
        <FlightTakeoff fontSize="large" color="primary" style={{ marginRight: '10px' }} />
        <Typography variant="h6" style={{ fontFamily: 'Raleway', color: '#ff6885' }}>
          Youtility.com
        </Typography>
        <Box style={{ marginLeft: 'auto' }}>
          <ThemeProvider theme={theme}>
          <GoogleLoginButton  {...props} />
          </ThemeProvider>

        </Box>
      </Box> */}
      {/* <Divider />

      <Box mt={10} style={{ display: 'flex', alignItems: 'left' }}>
        <Box style={{ display: 'flex', flexDirection: 'column', paddingLeft: '100px', paddingRight: '100px', height: '400px' }}>
          <Typography variant="h3" style={{ fontFamily: 'Raleway', color: '#000000' }}>
            Analyze your YouTube data easily with our app's simple interface. And get answers to questions like:
          </Typography>

          <List style={{ marginTop: '20px' }}>
            <ListItem>
              <ListItemText primary={<Typography variant="body1" style={{ fontFamily: 'Raleway', fontSize: '20px' }}>
                - Why isn't your channel popular?
              </Typography>} />
            </ListItem>
            <ListItem>
              <ListItemText primary={<Typography variant="body1" style={{ fontFamily: 'Raleway', fontSize: '20px' }}>
                - Why are some videos not getting views?
              </Typography>} />
            </ListItem>
            <ListItem>
              <ListItemText primary={<Typography variant="body1" style={{ fontFamily: 'Raleway', fontSize: '20px' }}>
                - What strategies can you use to get more views and a lot more?
              </Typography>} />
            </ListItem>
          </List>

        </Box>
        <Box style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-start' }}>
          <img src={img} alt="your-image" style={{ width: '500px', height: '500px', paddingLeft: '150px', paddingRight: '100px', }} />
        </Box>


      </Box>

      <Box mt ={2} style={{ backgroundColor: '#f3ebff', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '200px', paddingRight: '500px', height: '100px' }}>

        <Typography variant="h3" style={{ fontFamily: 'Raleway', color: '#000000' }}>
          How it works
        </Typography>
      </Box>

      <Box style={{ backgroundColor: '#f3ebff', display: 'flex', paddingLeft: '100px', paddingRight: '100px', gap: '40px', justifyContent: 'flex-start' }}>

        <Card sx={{ width: '180px', height: '220px', padding: '20px', borderRadius: '32px', boxShadow: '0px 4px 4px rgba(01 1, 1, 1)' , margin: '10px'}}>
          <CardContent>
            <Typography variant="h3" sx={{ fontSize: 16, fontFamily: 'Raleway' }} gutterBottom>
              Grant access to your YouTube data
            </Typography>
            <Typography sx={{ fontSize: 14, fontFamily: 'Raleway' }} color="text.secondary" gutterBottom>
              When you allow us to access your YouTube data, we'll store it securely in the backend to assist with analysis    </Typography>
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
      </Box> */}
    // </>



