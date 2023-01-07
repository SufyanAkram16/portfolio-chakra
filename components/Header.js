import {
  Stack,
  Circle,
  Flex,
  Box,
  Text,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();

  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  return (
    <Stack>
      <Circle
        position={"absolute"}
        w="300px"
        h="300px"
        bg="blue.100"
        opacity={"0.1"}
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi. I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight={"bold"}
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip={"text"}
          >
            Sufian Akram
          </Text>
          <Text color={colorMode == "dark" ? "gray.200" : "gray.500"}>
            GDE - Flutter, Firebase. Founder of https://codepur.dev &
            https://velocityx.dev. Building @frontierdotxyz, YouTuber &
            Entrepreneur 🗣
          </Text>
          <Button mt={8} colorScheme="blue">
            Hire Me
          </Button>
        </Box>
        <Spacer />
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "4"}
          mb={isNotSmallerScreen ? "0" : "4"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/76099540?s=400&u=1e1b70fccc2203bda65fd2f8c03211c436dbb50f&v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
