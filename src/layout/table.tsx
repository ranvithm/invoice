import { Box } from "@mui/material";
import React from "react";
import TableRow from "../component/table-row";

const Table: React.FC = () => {
  const head = [{}];
  return (
    <Box display="flex" flexDirection="column" p={2}>
      <Box height={50} sx={{ bgcolor: "#000", color: "#fff" }} display="flex">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex="0 0 50px"
        >
          #
        </Box>
        <Box
          display="flex"
          alignItems="center"
          pl={1}
          sx={{ bgcolor: (theme) => theme.palette.primary.main }}
          flex={3}
        >
          PARTICULARS
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          Price
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          QTY.
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          Total
        </Box>
      </Box>
      {[1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6,1, 2, 3, 4, 5, 6].map((t) => (
        <TableRow key={`row-${t}`} />
      ))}
    </Box>
  );
};

export default Table;
