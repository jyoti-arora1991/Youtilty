import React from "react";
import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box sx={{
        
        display: "flex",
        height:'auto',
        width:'auto',
        flexDirection:'column',
        // paddingLeft: { xs: "10px", sm: "32px", md: "64px" },
        // paddingRight: { xs: "10px", sm: "32px", md: "64px" },
        overflow: "hidden"
      }}>
      {children}
    </Box>
  );
}

export default Layout;