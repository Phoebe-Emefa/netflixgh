import {Box, Flex, Link} from "@chakra-ui/core";
import React from "react";

const LogInFooter = () => {
  return (
    <Box bg="rgba(0,0,0,0.8)" color="gray.400">
      <Flex direction="column" w={{md: "60%"}} mx="auto">
        <Link pb={{md: 6}}>Questions? &nbsp; Contact Us.</Link>
        <Flex align="center" justify="space-between">
          <Flex direction="column">
            <Link>FAQ</Link>
            <Link>Cookie Preferences</Link>
          </Flex>
          <Flex direction="column">
            <Link>Help Center</Link>
            <Link>Corporate Information</Link>
          </Flex>
          <Box>
            <Link>Terms of Use</Link>
          </Box>
          <Box>
            <Link>Privacy</Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LogInFooter;
