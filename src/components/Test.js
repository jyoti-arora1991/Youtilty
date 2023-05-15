import { Box } from '@mui/material';
import React, { useState } from 'react';


const Test = () => {
  const [show, setShow] = useState(false);
  return(
    <>
      <button onClick={() => setShow(prev => !prev)}>Click</button>
      {show && <Box>This is your component</Box>}
    </>
  );
}

export default Test