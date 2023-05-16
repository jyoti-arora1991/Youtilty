import React from "react";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box sx={{
        
        display: "flex",
        height:'1000px',
        width:'auto',
        flexDirection:'column',
        backgroundColor:'#d4d4d4',
        // paddingLeft: { xs: "10px", sm: "32px", md: "64px" },
        // paddingRight: { xs: "10px", sm: "32px", md: "64px" },
        overflow: "hidden"
      }}>
      {children}
    </Box>
  );
}

export default Layout;