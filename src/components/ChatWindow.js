import { useState ,useEffect, useRef} from 'react';

import { Typography,List,Avatar,Grid,ListItemAvatar, Button,InputAdornment,ImageListItem, ImageList, IconButton, TextField,ListItemText,ListItem,Paper, Divider, Box, createTheme, CircularProgress, } from '@mui/material';
import httpRequest from '../services/api';
import Layout from './Layout/Layout';
import Header from './Headers/Header';
import { Send } from '@mui/icons-material';
import img from '../img/img7.jpeg'
import { blue, green } from '@mui/material/colors';



const theme = createTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
      secondary: {
        main: '#4caf50',
      },
    },
  });

  const ChatMessage = ({ message, isUser }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            // Replace this with your actual loading action
            // Set setLoading(false) when the loading action is complete
            setLoading(false);
            // Uncomment the line below to simulate an error
            // setError(true);
          }, 2000);
    };
    
    useEffect(() => {
        handleLoading();
        // Add dependencies to useEffect if needed
      }, []);

    return (
        <Box>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: isUser ? 'primary.main' : 'secondary.main' }}>
            {isUser ? 'U' : 'B'}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={message.text}
          secondary={
            <Typography
              component="span"
              variant="body2"
              sx={{ color: isUser ? '#808080':'#000000'  }}
            >
                
              { loading ? <CircularProgress size={16} />: error ? (
              'Error occurred while loading'
            ) :message.sender}
            </Typography>
          }
          primaryTypographyProps={{ sx: { fontWeight: 'bold' } }}
        />
      </ListItem>
      </Box>
    );
  };



function ChatWindow({messages, onSendMessage, selectedChannel, accessToken }) {
//   const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');
  const chatWindowRef = useRef(null);

  const [isAutoScroll, setIsAutoScroll] = useState(true);

  useEffect(() => {
    if (isAutoScroll) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isAutoScroll]);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue !== '') {
      onSendMessage(inputValue, '');
      setIsAutoScroll(true);

  
      const b = httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question', 'POST', { 'question': inputValue, 'channelId': selectedChannel[0], 'accessToken': accessToken }, { 'Content-Type': 'application/json' });
      
        b.catch(error => {
          console.error('An error occurred during the request:', error);
        });
        const c = httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question1', 'POST', { 'question': inputValue, 'channelId': selectedChannel[0], 'accessToken': accessToken }, { 'Content-Type': 'application/json' });
      c.then(d => onSendMessage('', d))
        .catch(error => {
          console.error('An error occurred during the request:', error);
          onSendMessage('', 'An error occurred');
        });
      setInputValue('');
      console.log("hi tibs ddtgj");
      console.log(selectedChannel);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue !== '') {
        onSendMessage(inputValue,'')
        setIsAutoScroll(true);


        const b = httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question', 'POST', { 'question': inputValue, 'channelId': selectedChannel[0], 'accessToken': accessToken }, { 'Content-Type': 'application/json' })
      b.then(d => onSendMessage('',d))
      setInputValue('');
      console.log("hi tibs ddtgj")
      console.log(selectedChannel)
    }
  };

  
  return (
    <Layout>
      

      
    <Box   sx={{backgroundImage: `url(${img})`, backgroundSize: 'cover',
  backgroundPosition: 'center', height:'100vh', filter: 'brightness(1.2)'}}
>
      <Box  >
      <Header/>
      <Divider sx={{ borderWidth: '2px',  borderStyle: 'solid', margin:'3px' }}/> 
        <Typography textAlign={'center'} variant="h5" sx={{fontFamily:'cursive'}}> Hello! How can i assit you</Typography>
      </Box>
      <Box sx={{ display:'flex',height: "100%", flexWrap: 'nowrap', gridAutoFlow: "column" }}>

      <Box ref={chatWindowRef} sx={{ flexGrow: 1, height: "70%", overflowY: "auto" }}>
  
    <Grid container direction="column" spacing={1}>
      {messages.map((message, index) => (
        <Grid item key={index} sx={{ alignSelf: message.isUser ? 'flex-end' : 'flex-start' }}>
          <ChatMessage message={message} isUser={message.isUser} />
        </Grid>
      ))}
    </Grid>
  
</Box>
      </Box>
      <Box sx={{ display: 'flex',position: 'fixed', alignItems: 'center', width:'100%' ,bottom: 0, left: 0}}>
  <TextField
    variant="outlined"
    label="Type your message"
    value={inputValue}
    onChange={handleInputChange}
    onKeyDown={handleKeyDown}
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={handleSendClick}>
            <Send />
          </IconButton>
        </InputAdornment>
        
      ),
      sx: { borderRadius: '50px' }
    }}
    sx={{ width: '100%', marginRight: '8px','& .Mui-focused': {
        backgroundColor: '#FFFFFF'
      }}}

  />
</Box>
    </Box> 
    </Layout>
  );
}

export default ChatWindow;
