import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Home from "./home";

const App: React.FC = () => {

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IC
          </Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" flexDirection="column" margin="auto" width="100%">
        <Toolbar />
        <Home />
      </Box>
    </Box>
  );
};

export default App;
