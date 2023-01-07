import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import Header from "../components/Header";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import Socials from "../components/Socials";
import Profile from "../components/Profile";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <VStack p={5}>
        <Flex w={"100%"}>
          <Heading ml={"8"} size="md" fontWeight={"semibold"} color="cyan.400">
            Sufian
          </Heading>

          <Spacer />
          <IconButton ml={2} icon={<FaLinkedin />} isRound="true"></IconButton>
          <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>
          <IconButton ml={2} icon={<FaInstagram />} isRound="true"></IconButton>
          <IconButton
            ml={8}
            icon={colorMode == "dark" ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header />
        <Socials />
        <Profile />
      </VStack>
    </>
  );
}
