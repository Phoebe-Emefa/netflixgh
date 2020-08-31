import React from "react";
import {Box} from "@chakra-ui/core";
import Main from "../components/Home/Main";
import TV from "../components/TV";
import Download from "../components/Download";
import Watch from "../components/Watch";
import FAQ from "../components/FAQ";

const index = () => {
  return (
    <Box>
      <Main />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <TV />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <Download />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <Watch />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <FAQ />
    </Box>
  );
};

export default index;
