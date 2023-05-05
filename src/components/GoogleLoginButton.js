import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@mui/material';
import httpRequest from '../services/api';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

const clientId = '890593488111-o10mtf4ka43e97vdnntv1cev714ipo64.apps.googleusercontent.com';

function GoogleLoginButton(props) {

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

  const onSuccess = (response) => {
    const { accessToken } = response;
    props.onSuccess(response);
    console.log(accessToken)

    const a = httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/channels', 'POST', { headers: accessToken }, { 'Content-Type': 'application/json' })
      console.log("issue")  
      console.log(a)
      // a.then(d=>console.log(d))
      a.then(d=>props.onChannelList(d))
      navigate('/channel-list');
     
  
  }

  const onFailure = (error) => {
    console.log("no token")
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
          <Button variant="contained" style={{ backgroundColor: '#FF686B', color: '#FFFFFF' }} onClick={onClick} disabled={disabled} sx={{ display: 'flex', justifyContent: 'center' }}>
            Get started
          </Button>
      )}
    />
  );
}

export default GoogleLoginButton;
