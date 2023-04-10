import React, { useRef } from "react";
//@ts-ignore
import ReactToPdf from "react-to-pdf";
import { Box, Button } from "@mui/material";
import Header from "../layout/header";
import Address from "../layout/address";
import Footer from "../layout/footer";
import Table from "../layout/table";

const options = {
  orientation: "landscape",
  unit: "in",
  format: [4, 2],
};

const View: React.FC<{ changeView: (_0: string) => void }> = ({
  changeView,
}) => {
  const ref = useRef(null);
  return (
    <Box height="100%" width="100%">
      <Box ref={ref} p={4} height="100%" width="100%">
        <Header />
        <Address />
        <Table />
        <Footer />
      </Box>
      <Box display="flex" justifyContent="flex-end" py={2}>
        <ReactToPdf
          targetRef={ref}
          filename="invoice.pdf"
          x={0.5}
          y={0.5}
          scale={0.8}
        >
          {({ toPdf }: any) => (
            <Button onClick={toPdf} variant="contained">
              PDF
            </Button>
          )}
        </ReactToPdf>
      </Box>
    </Box>
  );
};

export default View;
