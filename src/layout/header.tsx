import React from "react";
import { pink } from "@mui/material/colors";
import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box
      display="flex"
      height="120px"
      color="#fff"
      sx={{ bgcolor: (theme) => theme.palette.primary.main }}
    >
      <Box
        sx={{ bgcolor: "#000" }}
        display="flex"
        flex="1"
        gap={2}
        alignItems="center"
        justifyContent="center"
        borderRadius="0 100px 100px 0"
      >
        <Avatar sx={{ bgcolor: (theme) => theme.palette.primary.main }}>
          IC
        </Avatar>
        <Typography variant="h5">Indhiran Crackers</Typography>
      </Box>
      <Box
        display="flex"
        flex="1"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h4">INVOICE</Typography>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Typography>Invoice Number :</Typography>
          <Typography variant="button">#001</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <Typography>Invoice Date :</Typography>
          <Typography variant="button">08-Apr-2023</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
