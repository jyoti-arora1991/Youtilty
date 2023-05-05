import React from 'react';
import {Typography, Paper} from '@mui/material'

const Response = ({ message }) => {
  console.log("my message")
  console.log(message)
  return (

    // <p>{message}</p>
    // <Paper elevation={10} style={{ padding: 10 }}>
      <Typography variant="body1" sx={{
        color: 'black',
        textAlign: 'center',
        mt: 2,
        mb: 2
      }}>{message}</Typography>
    // </Paper>
  );
};

export default Response;