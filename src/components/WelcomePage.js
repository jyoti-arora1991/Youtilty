import React from 'react';
import img from '../img/background_ana.jpeg'
import {  Typography } from '@mui/material';
import { Box } from '@mui/material';

   

const styles = {
  box: {
    backgroundColor: '#FFFFFF',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)',
  },
  button: {
    marginTop: '2rem',
    backgroundColor: '#FF686B',
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#E05154',
    },
  },
  text: {
    color: '#FFFFFF', // set text color to white
  },
};

function WelcomePage() {
  

  return (
    <div style={styles.container}>
      <Box sx={{ display: 'grid', }}>
      <Box>
        <Typography variant="h4" align="center" sx={{ mt: 2, mb: 2 , ...styles.text}}>
          Welcome to Youtility
        </Typography>
        </Box>
       <Box>
        <Typography variant="subtitle1" align="left" sx={{ mb: 2 ,...styles.text}}>
          Our user-friendly interface allows you to quickly and easily see how your channel is performing, including metrics such as views, engagement, and demographics.
        </Typography>
        </Box>
       
        </Box>
     </div>
  );
}

export default WelcomePage;
