import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import GoogleLoginButton from './components/GoogleLoginButton';
import ChannelListDropdown from './components/ChannelListDropdown';
import img from './img/img3.jpeg';
import { Box } from '@mui/material';

const App = () => {
  const [channelList, setChannels] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  
  const handleSuccess = (response) => {
    const { accessToken } = response;
    setAccessToken(accessToken);
  }

  const handleChannelList = (channelList) => {
    setChannels(channelList);
  }

  const styles = {
    container: {
      backgroundImage: `url(${img})`,
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
    <div style={styles.container}>
      <Box sx={styles.content}>
        <Routes>
        <Route path="/" element={
  <>
    <WelcomePage />
    <GoogleLoginButton onSuccess={handleSuccess} onChannelList={handleChannelList} />
  </>
}/>
        </Routes>
      </Box>
      <Box sx={styles.content1}>
      <Routes>
        <Route path="/channel-list" element={<ChannelListDropdown channelList={channelList} accessToken={accessToken} />} />
      </Routes>
      </Box>
    </div>
  );
}

export default App;
