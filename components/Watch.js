import React from "react";
import {Box, Flex, Heading, Text, Image} from "@chakra-ui/core";

const Watch = () => {
  return (
    <Box bg="black">
      <Flex
        color="white"
        justify="space-between"
        align="center"
        w={{md: "80%"}}
        mx="auto"
        py={{md: 30}}
      >
        <Box w="2xl">
          <Heading as="h1" fontSize="5xl">
            Watch everywhere.
          </Heading>
          <Text fontSize="3xl" py={{md: 6}}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </Text>
        </Box>
        <Box w="3xl">
          <Image src="/images/watch.png" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Watch;
