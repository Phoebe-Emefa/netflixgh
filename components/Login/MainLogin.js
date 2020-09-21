import React from "react";
import {Box, Heading} from "@chakra-ui/core";
import SignInCard from "./SignInCard";
import LogInFooter from "./LogInFooter";

const MainLogin = () => {
  return (
    <Box
      bgImage="linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('https://assets.nflxext.com/ffe/siteui/vlv3/838a77eb-572a-4eb5-8e3a-364069b24d29/4bb028a8-2688-4235-a0fe-44411e947232/GH-en-20200907-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
      bgSize="cover"
    >
      <Heading fontSize="5xl" color="red.500" textAlign="left">
        NETFLIX
      </Heading>
      <SignInCard />
      <LogInFooter />
    </Box>
  );
};

export default MainLogin;
