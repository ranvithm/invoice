import React, { useState } from "react";
import { Container, Paper } from "@mui/material";
import View from "./view";
import Edit from "./edit";

const Home: React.FC = () => {
  const [module, setModule] = useState<string>("edit");
  return (
    <Container>
      <Paper elevation={3}>
        {
          {
            view: <View changeView={setModule} />,
            edit: <Edit changeView={setModule} />,
          }[module]
        }
      </Paper>
    </Container>
  );
};

export default Home;
