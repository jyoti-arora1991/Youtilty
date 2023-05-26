import { useState ,useEffect, useRef} from 'react';

import { Typography,InputAdornment, IconButton, TextField,ListItemText,ListItem, Divider, Box, createTheme, CircularProgress } from '@mui/material';
import httpRequest from '../services/api';
import Header from './Headers/Header';
import { Send } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';



const ChatMessage = ({ message, isUser }) => {

    return (
        <Box display="flex" alignItems="center" >
      <ListItem >
        <ListItemText
          primary={message.text}
          secondary={isUser}
         
        />
      </ListItem>
      </Box>
    );
  };



function ChatWindow({messages, onSendMessage, selectedChannel, accessToken }) {

  const [inputValue, setInputValue] = useState('');
  const [ans, setAns] = useState('');
  const chatWindowRef = useRef(null);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

  const [isAutoScroll, setIsAutoScroll] = useState(true);

  useEffect(() => {
    if (isAutoScroll) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isAutoScroll]);


  const handleInputChange = (event, value) => {
    console.log("getting clled now")
    setInputValue(value || event.target.value);
  };


  

const fetchAns = async () => {
    const timeout = 1800000; 
    const retryInterval = 10000; // 10 seconds (modified value)
    const startTime = Date.now();
    let retryCount = 0;
  
    while (Date.now() - startTime < timeout) {
      try {
        const requestPromise = httpRequest(
          'https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/get_ans',
          'POST',
          { 'channelId': selectedChannel[0] },
          { 'Content-Type': 'application/json' },
          retryInterval
        );
  
        const response = await requestPromise;
  
        if (response && response.data) {
          const ans = response.data;
          setAns(ans);
          setLoading(false);
          onSendMessage('', ans);
          console.log("Received ans:", ans);
          return; // Exit the function since we received the answer
          
        }
        else if (response.status === 500) {
            setError("AI not able to process the request right now")
        } 
        else {
          console.log("Request submitted");
          // Handle the case when the request is submitted but no answer is received
        }
      } catch (error) {
        console.log("Error occurred:", error.message);
        alert('Request timeout');
        // Handle the case when the request times out
      }
  
      await new Promise(resolve => setTimeout(resolve, retryInterval)); // Wait for the specified retry interval before the next iteration
    }
    setLoading(false)
    
    setError("Errir while processing your request")
    throw new Error("Request timeout"); // Throw an error if no response received within one minute
  };
  
  
  
  


  const handleSendClick =async () =>{
    console.log("inputeed value")
    console.log(inputValue)
    setLoading(true)
    if (inputValue !== '') {
      onSendMessage(inputValue);
      
      setIsAutoScroll(true);

      
       
      const e = await httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question', 'POST', { 'retry':false,'question': inputValue, 'channelId': selectedChannel[0], 'accessToken': accessToken }, { 'Content-Type': 'application/json' });
      console.log("sqlQuery")
      setInputValue('');
      console.log(e)
      await fetchAns();
      
      console.log("this is c")
      console.log(ans)
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

  const Suggestions = [
    "Help me identify any issues in my channel and provide suggestions for improvement?",
    "Determine the demographic of people who are enjoying my videos?",
    "Why some of my videos aren't very popular. Any insights or suggestions?",
    "What strategies do you recommend that would be effective for my channel?",
    "Which days would be the best for me to upload my videos considering the analysis of engagement and views?",
    "Aanalyze my videos and let me know which types are receiving the most views.",
    "Based on the comparative analysis, what successful strategies or areas for improvement can you identify for my channel?",
    "Can you provide insights on the traffic sources that are driving viewers to my channel and suggest strategies to optimize promotion?",
    "What actions can I take to improve viewer retention and keep my audience engaged throughout my videos?",
    "Could you elaborate on the types of videos that are receiving more views and provide further insights on what makes them successful?",
    "What is the ideal video length that I should aim for to maximize viewer engagement?",
    "How can I optimize my video thumbnails to increase click-through rates and attract more viewers?",
    "Are there any specific trends or emerging topics that you recommend I explore in my content creation?",
    "Can you suggest any tools or resources that would be helpful for implementing the recommended strategies?"
  ];

  
  return (
    <>
      

      
    <Box   sx={{ backgroundColor:'#fff', backgroundSize: 'cover',
  backgroundPosition: 'center', height:'100vh',width:'100vw',flexDirection: 'column'}}
>
      <Box >
      <Header/>
      <Divider sx={{ borderWidth: '2px',  borderStyle: 'solid', margin:'3px' }}/> 
        <Typography textAlign={'center'} variant="h5" > Hello! How can i assits you</Typography>
      </Box>
      <Box sx={{ display:'flex',height: "100%", flexWrap: 'nowrap', gridAutoFlow: "column" }}>

      <Box ref={chatWindowRef} sx={{ flexGrow: 1, height: "70%", overflowY: "auto" }}>
  
    <Box container direction="column" spacing={1}>
      {messages.map((message, index) => (
        <Box item key={index}>
            
          <ChatMessage message={message} isUser={message.isUser} />
          {index === messages.length - 1 && loading ? (
        <>
          <CircularProgress  />
          Loading...
        </>
      ) : index === messages.length - 1 && error ? (
        <div>Error occurred while loading</div>
      ) : (
        message.sender
      )}
        </Box>
        
      ))}
      
    </Box>
  
</Box>
      </Box>
      <Box sx={{  position: 'fixed', alignItems: 'center', width: '100%', bottom: 0, left: 0 }}>
      <Autocomplete
        freeSolo
        options={Suggestions}
        onInputChange={handleInputChange}
        renderInput={(params) => (
      <TextField
      {...params}
        variant="outlined"
        width='400px'
        label="Type your message"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={Suggestions[Math.floor(Math.random() * Suggestions.length)]}
        clearOnBlur
        InputProps={{
            ...params.InputProps,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSendClick}>
                <Send />
              </IconButton>
            </InputAdornment>
          ),
          sx: { borderRadius: '50px' }
        }}
        sx={{
          width: '100%',
          marginRight: '8px',
          '& .Mui-focused': {
            backgroundColor: '#FFFFFF'
          }
        }}
      />)}/>
    
  
</Box>
    </Box> 
    </>
  );
}

export default ChatWindow;
