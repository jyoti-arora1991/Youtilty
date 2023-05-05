import React, { useState } from 'react';
import { Box, Container, TextField, Typography, useMediaQuery, useTheme , Paper} from '@mui/material';
import httpRequest from '../services/api';
import InputAdornment from '@mui/material/InputAdornment';
import SendIcon from '@mui/icons-material/Send';
import {IconButton} from '@mui/material';
import Response from './Response';
import CircularProgress from '@mui/material/CircularProgress';






function ChannelListDropdown(props) {
  const { accessToken, channelList } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [value, setValue] = useState('');

  const channels=Array.from(channelList)
  const [selectedChannel, setSelectedChannel] = useState('');
  // const channels = ['j','k']
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChannelChange = (event) => {
    setSelectedChannel(event.target.value);

  
  
    
    
    httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/analytics','POST',{'channelId':event.target.value, headers:accessToken},  {'Content-Type': 'application/json'})
      
  };  
  const styles = {
    box: {
      backgroundColor: '#FFFFFF',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 1)',
    },
    content: {
      gridColumn: '1 / 2',
      display: 'grid',
      placeItems: 'center',
    },
    content1: {
      // gridColumn: '1 / -1',
      // display: 'grid',
      placeItems: 'center',
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
  const handleChannelIdChange = (event) => {
    setValue(event.target.value);
    // export const channelId=event.target.value
  };
  const [response, setResponse] = useState('');

  const handleSend = () => {
    setResponse('')
    const b = httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question','POST',{'question': value, 'channelId': selectedChannel,'accessToken':accessToken},  {'Content-Type': 'application/json'})
    b.then(d=>setResponse(d))};
 
    const responseContainerStyle = {
      maxHeight: '200px', // Set a fixed height to allow scroll
      overflow: 'scroll', // Enable scroll when the content exceeds the container height
    };
  return (
    <div style={styles.container}>
      <Box sx={styles.content}>

      <label htmlFor="channels" style={styles.text}>Select a channel:</label>
      <select name="channels" id="channels" onChange={handleChannelChange}>
      <option value="">Select a channel:</option>
        {channels.map((channel, index) => (
          <option key={index} value={channels[index]}>{channels[index]}</option>
        ))}
      </select>
      
    </Box >
    <Box sx={styles.content}>
    <Typography variant="h5" align="center" sx={{ mt: 2, mb: 2 , ...styles.text}}>Ask me something:</Typography>
    </Box >
    <Box sx={styles.content}>
    <TextField
        label="Enter your input"
        variant="outlined"
        fullWidth
        value={value}
        onChange={handleChannelIdChange}
        style={{ marginBottom: 50 ,  width: '100%' , maxWidth: '800px',  mt: 2, mb: 2 , ...styles.text,backgroundColor: 'white'}}
        InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSend} style={{ color: 'black' }}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
      />
      </Box>
       <div style={responseContainerStyle}>
       <Box sx={styles.content}>
       <Paper elevation={10} style={{ padding: 10 }}>
      {response && <Response message={response} />}
      </Paper>
      </Box>
      </div>
    </div>
  );
}

export default ChannelListDropdown;
