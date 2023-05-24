import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import Welcome1 from './components/welcome1.js';
import GoogleLoginButton from './components/GoogleLoginButton';
import ChannelListDropdown from './components/ChannelListDropdown';
import img from './img/images12.jpeg';
import { Box, Typography } from '@mui/material';
import ChatWindow from "./components/ChatWindow";
import Test from "./components/Test";


const App = () => {
  const [channelList, setChannels] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [messages, setMessages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [selectedChannels, setSelectedChannels] = useState([]);


  const handleSendMessage = (text, outputText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: text && (<Box sx={{mt:'10px',width: '300px',padding:'10px', backgroundColor: '#779eb2', borderRadius:'30px' }}>
        <Typography sx={{ padding:'2px',whiteSpace: 'pre-wrap', fontWeight:'bold' }}>{text}</Typography> </Box>) ,
        sender: 
        outputText && ( <Box sx={{display:"flex",position:'relative', justifyContent:"flex-end",marginLeft:'30px', marginRight:'0px',padding:'10px',backgroundColor: '#C8C8C8',borderRadius:'30px'}}><Typography sx={{ padding:'2px',whiteSpace: 'pre-wrap' }}>{outputText}</Typography></Box>)
    
        // sender: outputText,
        
      },
    ]);
  };

  const handleSuccess = (response) => {
    const { accessToken } = response;
    setAccessToken(accessToken);
  }

  const handleChannelList = (channelList) => {
    setChannels(channelList);
  }

  const handleSelectedVideos=(selectedVideos)=>{
    setSelectedVideos(selectedVideos)
  }

  const handleSelectedVChannel=(selectedChannels)=>{
    setSelectedChannels(selectedChannels)
  }

  const styles = {
    container: {
      // backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridGap: '2rem',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
    },
    content: {
      gridColumn: '1 / 2',
      display: 'grid',
      placeItems: 'center',
    },
    content1: {
      gridColumn: '1 / -1',
      placeItems: 'center',
    },
    button: {
      gridColumn: '2 / 3',
      display: 'grid',
      placeItems: 'center',
    },
  }

  return (
    <Box  sx={{
      position: 'fixed',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width:'100vw',
      height:'100vh'
      
    }}>
      <Routes>
        <Route path="/" element={
          // <Welcome1 onSuccess={handleSuccess} onChannelList={handleChannelList} />
          <WelcomePage onSuccess={handleSuccess} onChannelList={handleChannelList} />
        } />
      </Routes>
        <Routes>
          <Route path="/channel-list" element={<ChannelListDropdown channelList={channelList} accessToken={accessToken}  selectedChannel={handleSelectedVideos} selectedVid={handleSelectedVChannel}/>} />
        </Routes>
        <Routes>
          <Route path="/chatApp" element={<ChatWindow messages={messages} onSendMessage={handleSendMessage} selectedChannel={selectedVideos} accessToken={accessToken} />} />
        </Routes> 
        {/* {<ChatWindow */}
      {/* chatName="My Chat"
      messages={messages}
      onSendMessage={handleSendMessage} */}
    {/* /> */} 
    </Box>
  );
}

export default App;
