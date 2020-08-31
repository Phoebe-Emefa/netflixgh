import React from "react";
import {Box, Heading, Accordion} from "@chakra-ui/core";

const FAQ = () => {
  return (
    <Box bg="black" color="white">
      <Box>
        <Heading as="h1" fontSize="5xl">
          Frequently Asked Questions
        </Heading>
      </Box>
      <Box>
        <Accordion></Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
