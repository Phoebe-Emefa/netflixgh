import React from "react";
import {Box, Flex, Text, Link} from "@chakra-ui/core";

const Footer = () => {
  return (
    <Box bg="black" py={{md: 16}} color="gray.400">
      <Flex direction="column" w={{md: "60%"}} mx="auto">
        <Link pb={{md: 6}}>Questions? &nbsp; Contact Us.</Link>
        <Flex align="center" justify="space-between">
          <Flex direction="column">
            <Link pb={{md: 2}}>FAQ</Link>
            <Link pb={{md: 2}}>Investor Relations</Link>
            <Link pb={{md: 2}}>Privacy</Link>
            <Link>Speed Test</Link>
          </Flex>
          <Flex direction="column">
            <Link pb={{md: 2}}>Help Center</Link>
            <Link pb={{md: 2}}>Jobs</Link>
            <Link pb={{md: 2}}>Cookie Preferences</Link>
            <Link>Watch for Free</Link>
          </Flex>
          <Flex direction="column">
            <Link pb={{md: 2}}>Account</Link>
            <Link pb={{md: 2}}>Ways to watch</Link>
            <Link pb={{md: 2}}>Corporate Information</Link>
            <Link>Legal Notices</Link>
          </Flex>
          <Flex direction="column">
            <Link pb={{md: 2}}>Media Center</Link>
            <Link pb={{md: 2}}>Terms of Use</Link>
            <Link pb={{md: 2}}>Contact Us</Link>
            <Link>Netflix Originals</Link>
          </Flex>
        </Flex>
        <Text pt ={{md: 6}}>Netflix Ghana</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
