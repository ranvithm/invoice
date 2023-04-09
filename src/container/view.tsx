import React from "react";
import { Box, Button } from "@mui/material";
import Header from "../layout/header";
import Address from "../layout/address";
import Footer from "../layout/footer";
import Table from "../layout/table";

const View: React.FC<{ changeView: (_0: string) => void }> = ({
  changeView,
}) => {
  return (
    <Box height="100%" width="100%">
      <Header />
      <Address />
      <Table />
      <Footer />
      <Box display="flex" justifyContent="flex-end" py={2}>
        <Button onClick={() => changeView("edit")} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default View;
