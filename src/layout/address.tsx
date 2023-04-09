import React from "react";
import { Box, Typography } from "@mui/material";

const Address: React.FC = () => {
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Typography color="primary" fontWeight={600}>
          INVOICE TO:
        </Typography>
        <Typography pl={1} fontWeight={600}>
          INDHIRAN CRACKERS
        </Typography>
        <Typography pl={1}>MARANERI – 626124</Typography>
        <Typography pl={1}>9876543210</Typography>
        <Typography pl={1}>ameen@crackers.com</Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap={0.5}>
        <Typography color="primary" fontWeight={600}>
          INVOICE FROM:
        </Typography>
        <Typography pl={1} fontWeight={600}>
          INDHIRAN CRACKERS
        </Typography>
        <Typography pl={1}>ALAMGULAM MAIN ROAD, MARANERI – 626124</Typography>
        <Typography pl={1}>9876543210</Typography>
        <Typography pl={1}>ameen@crackers.com</Typography>
      </Box>
    </Box>
  );
};

export default Address;
