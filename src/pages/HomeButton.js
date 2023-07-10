import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './HomeButton.css'

const HomeButton = () => {
    return (
      <Button  component={Link} to="/" startIcon={<HomeIcon  style={{ fontSize: 32, color:'#000' }} />}>
        
      </Button>
    );
  };
  
  export default HomeButton;