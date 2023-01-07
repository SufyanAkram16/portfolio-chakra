import { Box, Heading,useMediaQuery,Flex,Text,Icon } from "@chakra-ui/react";
import { FaEthereum, FaDev } from 'react-icons/fa'
import {SiHiveBlockchain} from 'react-icons/si'
import React from "react";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w={"100%"}
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
        <Box alignSelf='center' px={32} py={16}>
            <Heading fontWeight={'extrabold'} color="cyan.500" size={'4xl'}>
                2+
            </Heading>
            <Text fontSize={'2xl'} color="gray.400">
                Years of Experience
            </Text>
        </Box>
        <Box alignSelf={'center'} px={16} py={16} >
            <Text fontWeight={'bold'} fontSize={'2xl'}>Blockchain, web2.0 & web3.0 Developer. </Text>
            <Flex direction={isNotSmallerScreen? 'row' : "column"} mt={8}  >
                <Flex rounded={'xl'} direction="column" mt={4} bg="blue.400" h={'30vh'} w={"30vh"} justify="flex-end" _hover={{ bg: "green.400", }}>
                    <Icon color={'white'} p={4} as={FaEthereum} w={24} h={24} />
                    <Text color={'white'} p={4} fontSize="xl" fontWeight={"semibold"}>
                        Smart contracts
                    </Text>
                </Flex>
                <Flex rounded={'xl'} direction="column" mt={4} mx={isNotSmallerScreen? 2 : 0 } bg="blue.400" h={'30vh'} w={"30vh"} justify="flex-end" _hover={{ bg: "green.400", }}>
                    <Icon color={'white'} p={4} as={FaDev} w={24} h={24} />
                    <Text color={'white'} p={4} fontSize="xl" fontWeight={"semibold"}>
                        Websites
                    </Text>
                </Flex>
                <Flex rounded={'xl'} direction="column" mt={4} bg="blue.400" h={'30vh'} w={"30vh"} justify="flex-end" _hover={{ bg: "green.400", }}>
                    <Icon color={'white'} p={4} as={SiHiveBlockchain} w={24} h={24} />
                    <Text color={'white'} p={4} fontSize="xl" fontWeight={"semibold"}>
                        DApps
                    </Text>
                </Flex>
            </Flex>
        </Box>
    </Flex>
  );
}

export default Profile;
