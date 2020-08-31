import React from "react";
import {Heading, Box, Flex, Text, Image} from "@chakra-ui/core";

const Download = () => {
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
        <Box>
          <Image src="/images/mobile.jpg" />
        </Box>
        <Box py={{md: 10}}>
          <Heading as="h1" fontSize="5xl">
            Download your shows to watch offline.
          </Heading>
          <Text fontSize="3xl" py={{md: 6}}>
            Save your favorites easily and always have something to watch.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Download;
