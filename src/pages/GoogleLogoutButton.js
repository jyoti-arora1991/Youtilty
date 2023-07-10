import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const GoogleLogoutButton = () => {
    const navigate = useNavigate();
    const clientId = '890593488111-o10mtf4ka43e97vdnntv1cev714ipo64.apps.googleusercontent.com';
    const [loggedOut, setLoggedOut] = React.useState(false);


  
    const onSuccess = () => {
      // Perform any additional logout actions if needed
      console.log("logout")
      setLoggedOut(true);

      

      navigate('/'); // Redirect to the desired page after logout
    };
  
    const onFailure = (error) => {
      console.error('Google logout failed:', error);
    };
  
    return (
        <>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
        render={({ onClick, disabled }) => (
          <IconButton
            variant="contained"
            sx={{
                // position: 'absolute',
                top: '5x',
                right: '5px',
                color: '#000',
                position: 'relative',
                width: '32px',
                height: '32px',
                overflow: 'hidden',
                flexShrink:'0'
              }}
            onClick={onClick}
            disabled={disabled}>
            <LogoutIcon />
            {loggedOut && (
            <Alert severity="info">
              <AlertTitle>User logged out</AlertTitle>
            </Alert>
          )}
            
          </IconButton>
           
          
        )}
      />
      </>
    );
  };
  
  export default GoogleLogoutButton;
  