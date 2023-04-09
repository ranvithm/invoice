import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100px" color="#fff">
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Typography fontWeight={600} color="primary">
          Thank you for your business with us
        </Typography>
      </Box>
      <Box
        sx={{ bgcolor: "#000" }}
        display="flex"
        gap={2}
        flex="1"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Typography>987654321</Typography>
        <Typography>ameen@cracker.com</Typography>
        <Typography>Sivakasi</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
