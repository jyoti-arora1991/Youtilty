import React from 'react';
import {TextField, Typography} from '@mui/material';
// import {IconButton, SendIcon} from '@mui/icons-material/'
import SendIcon from '@mui/icons-material/Send';
import {IconButton} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
const Input = ({ label, value, onChange , handleSendClick, onSend}) => {
    const handleSend = () => {
        onSend(value);
      };


  return (
    <>
    <Typography variant="h5">Ask me something:</Typography>
    <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        style={{ marginBottom: 20 }}
        InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSend}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
      />

      </>

  );
};

export default Input