import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/core";
import {ImFacebook2} from "react-icons/im";

const SignInCard = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      align="center"
      w={{md: "33%"}}
      h={{md: "600px"}}
      bg="rgba(0,0,0,0.8)"
      color="white"
      rounded={4}
      mx="auto"
    >
      <Heading
        as="h5"
        fontSize="3xl"
        color="white"
        align="left"
        w={{md: "70%"}}
        pt={{md: "45px"}}
        pb={{md: "25px"}}
      >
        Sign In
      </Heading>
      <Box w={{md: "70%"}}>
        <Input
          placeholder="Email or phone number"
          size="lg"
          color="black"
          mb={{md: 4}}
        />
        <InputGroup size="lg">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            color="black"
          />
          <InputRightElement width="4.5rem">
            <Text
              as="button"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              color="black"
              p={{md: 1}}
            >
              {show ? "Hide" : "Show"}
            </Text>
          </InputRightElement>
        </InputGroup>
        <Button
          size="lg"
          color="white"
          colorScheme="red"
          w={{md: "100%"}}
          mt={{md: "37px"}}
        >
          Sign In
        </Button>
        <Flex color="white" justify="space-between" fontSize="sm" mt={{md: 3}}>
          <Checkbox size="sm" colorScheme="red" defaultIsChecked>
            Remember me
          </Checkbox>
          <Link>Need help?</Link>
        </Flex>
      </Box>
      <Link align="left">
        <Flex
          align="center"
          justify="space-between"
          ml={{md: 60}}
          w={{md: 155}}
          fontSize="sm"
          mt={{md: 38}}
        >
          <ImFacebook2 /> Login with Facebook
        </Flex>
      </Link>
      <Flex ml={{md: 60}} mt={{md: 3}}>
        <Text mr={{md: 2}}>New to Netflix?</Text>
        <Link href="#">Sign up now</Link>
      </Flex>

      <Text
        w={{md: "80%"}}
        align="left"
        fontSize="sm"
        ml={{md: 6}}
        mt={{md: 2}}
      >
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        <Link ml={{md: 2}} color="blue.400">
          Learn more
        </Link>
      </Text>
    </Box>
  );
};

export default SignInCard;
