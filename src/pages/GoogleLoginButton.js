import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@mui/material';
import httpRequest from '../services/api';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

const clientId = '890593488111-o10mtf4ka43e97vdnntv1cev714ipo64.apps.googleusercontent.com';

function GoogleLoginButton() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '890593488111-o10mtf4ka43e97vdnntv1cev714ipo64.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/youtube.readonly',
      }); 
    }

    gapi.load('client:auth2', start);
  }, []);
  

  const navigate = useNavigate();
  let channel_id;

  const onSuccess = async(response) => {
    const { accessToken } = response;
    console.log(accessToken)
    
    try {
      const channel_dict = await httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/channels', 'POST', { headers: accessToken }, { 'Content-Type': 'application/json' });
      console.log("channel_dict");
      console.log(channel_dict);
  
      const a = await httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/fetch_data', 'POST', { 'channelId': channel_id, headers: accessToken }, { 'Content-Type': 'application/json' });
  
      navigate('/questionPage', { state: { accessToken, channel_dict } });
    } catch (error) {
      console.error(error);
    
    }
  }
  

  const onFailure = (error) => {
    console.error(error)
  }

  return (

    <GoogleLogin
    clientId={clientId}
    buttonText="Get Started"
    onSuccess={onSuccess}
    onFailure={onFailure}
    scope={'https://www.googleapis.com/auth/youtube.readonly'}
    render={({ onClick, disabled }) => (
      <Button
        variant="contained"
        sx={{
          width:'300px',
          backgroundColor: '#fff',
          color: '#000',
          display: 'flex',
          justifyContent: 'center',
          margin: '40px',
          marginTop: '10px',
        }}
        onClick={onClick}
        disabled={disabled}
        startIcon={<GoogleIcon style={{ color: '#4285F4' }}/>}
      >
        Sign in with Google 
      </Button>
    )}
  />

  
  
  
  
  
  
  );
}

export default GoogleLoginButton;