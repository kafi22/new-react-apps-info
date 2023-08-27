
import React from "react";
import {Box, Container} from "@mui/material"
import Hero from "./Component/Hero";
import Projects from "./Component/Projects";

const Apps = () => {


  return (
    <Container>
    <Box component={"div"} >
      <Hero />
      <Projects  />
    </Box>
    </Container>
  )
}

export default Apps