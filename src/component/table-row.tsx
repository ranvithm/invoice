import { Box } from "@mui/material";

const style = {
  display: "flex",
  alignItems: "center",
  flex: 1,
};

const TableRow: React.FC = () => {
  const data = {
    id: 1,
    name: "Red Bijili",
    amt: 2000,
    qty: 20,
  };

  return (
    <Box height={50} display="flex">
      <Box {...style} justifyContent="center" flex="0 0 50px">
        {data.id}
      </Box>
      <Box {...style} pl={1} flex={3}>
        {data.name}
      </Box>
      <Box {...style} justifyContent="center">
        {data.amt}
      </Box>
      <Box {...style} justifyContent="center">
        {data.qty}
      </Box>
      <Box {...style} justifyContent="center">
        70000
      </Box>
    </Box>
  );
};

export default TableRow;
