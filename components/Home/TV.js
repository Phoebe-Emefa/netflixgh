import React from "react";
import {Box, Heading, Text, Flex, Image} from "@chakra-ui/core";

const TV = () => {
  return (
    <Box bg="black">
      <Flex
        color="white"
        justify="space-between"
        align="center"
        w={{md: "80%"}}
        mx="auto"
      >
        <Box w="xl">
          <Heading as="h1" fontSize="5xl">
            Enjoy on your TV.
          </Heading>
          <Text fontSize="3xl" py={{md: 6}}>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Text>
        </Box>
        <Box>
          <Image src="/images/TV.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default TV;
