import React from "react";
import { Box, Button, TextField } from "@mui/material";
import TableRow from "../component/table-row";

const Edit: React.FC<{ changeView: (_0: string) => void }> = ({
  changeView,
}) => {
  return (
    <Box p={4}>
      <Box display="flex" flexDirection="column" gap={3} pb={4}>
        <TextField size="small" label="name" />
        <TextField size="small" rows={3} label="address" />
        <TextField size="small" label="phone number" />
        <TextField size="small" label="Mail Id" />
      </Box>
      <Box>
        <Box display="flex" justifyContent="flex-end" py={2}>
          <Button variant="contained">Add</Button>
        </Box>
        <Box>
          <Box
            height={50}
            sx={{ bgcolor: "#000", color: "#fff" }}
            display="flex"
          >
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
          <Box>
            {[1, 2, 3].map((t) => (
              <TableRow key={`row-${t}`} />
            ))}
          </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end" py={2}>
          <Button onClick={() => changeView("view")} variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Edit;
