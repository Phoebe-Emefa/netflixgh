import React from "react";
import {Box, Text, Flex, Heading, Button, Input, Icon} from "@chakra-ui/core";
import {ChevronRightIcon} from "@chakra-ui/icons";

const Main = () => {
  return (
    <Box
      bgImage="linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('/images/netflix-home.jpg')"
      bgSize="cover"
    >
      <Flex justify="space-between" align="center" mx={{md: 30}} py={{md: 2}}>
        <Heading fontSize="5xl" color="red.500">
          NETFLIX
        </Heading>
        <Button colorScheme="red" color="white">
          Sign Up
        </Button>
      </Flex>

      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        color="white"
        py={{md: 32}}
      >
        <Heading as="h1" fontSize="5xl" w="lg">
          Unlimited movies, TV shows, and more.
        </Heading>
        <Text as="h6" fontSize="3xl" py={{md: 30}} w="lg">
          Watch anywhere. Cancel anytime.
        </Text>
        <Text fontSize="xl" w="2xl">
          Ready to watch? Enter your email to create or restart your membership.
        </Text>
        <Flex w={{md: "60%"}} mt={{md: 30}} w="2xl">
          <Input
            placeholder="Email address"
            size="lg"
            w={{md: "70%"}}
            h={{md: 16}}
          />
          <Button
            colorScheme="red"
            color="white"
            w={{md: 230}}
            h={{md: 16}}
            fontSize="2xl"
            size="lg"
          >
            GET STARTED <ChevronRightIcon />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Main;
