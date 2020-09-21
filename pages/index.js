import React from "react";
import {Box} from "@chakra-ui/core";
import Main from "../components/Home/Main";
import TV from "../components/Home/TV";
import Download from "../components/Home/Download";
import Watch from "../components/Home/Watch";
import FAQ from "../components/Home/FAQ/FAQ";
import Footer from "../components/Home/Footer";

const index = () => {
  return (
    <Box>
      <Main />
      <Box borderBottomWidth="7px" borderBottomColor="gray.900"></Box>
      <TV />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <Download />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <Watch />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <FAQ />
      <Box borderBottomWidth="7px" borderBottomColor="gray.800"></Box>
      <Footer />
    </Box>
  );
};

export default index;
