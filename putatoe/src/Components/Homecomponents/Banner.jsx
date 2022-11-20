import React from "react";
import {
  Box,
  Container,
  Image,
  Center,
  SimpleGrid,
  IconButton,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaAmazonPay,
  FaBeer,
  FaBlog,
  FaBriefcase,
  FaBuffer,
  FaBullhorn,
  FaConnectdevelop,
  FaDollarSign,
  FaDoorOpen,
  FaEyeDropper,
  FaHandHoldingWater,
  FaLightbulb,
  FaMicrophone,
  FaMoneyBill,
  FaNewspaper,
  FaRupeeSign,
  FaSearchDollar,
  FaShoppingBag,
  FaTv,
  FaWater,
} from "react-icons/fa";
import { ArrowRightIcon} from '@chakra-ui/icons'

const Banner = () => {
  return (
    <Box mx={{ base: "20px", sm: "80px", md: "200px" }}  p={"30px"} rounded="2xl"> 
      <SimpleGrid
        minChildWidth={{ base: "40px", sm: "120", md: "180px" }}
        spacing="40px"
      >
        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<FaAmazonPay />}
              _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
				transform: "scale(1.30)",
                brightness:"100px"
               
			}}
            />
            <Center pt={2}>
              <Text fontSize={20}>Recharge</Text>
            </Center>
          </Box>
        </Center>

        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<FaTv />}
         
           _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
            transform: "scale(1.30)",
                brightness:"100px"
			}}/>
            <Center pt={2}>
              <Text fontSize={20}>DTH Recharge</Text>
            </Center>
          </Box>
        </Center>
      
        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<FaRupeeSign />}
  
    _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
        transform: "scale(1.30)",
                brightness:"100px"
			}}/>
            <Center pt={2}>
              <Text fontSize={20}>Loans</Text>
            </Center>
          </Box>
        </Center>
        
        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<FaNewspaper />}
  
    _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
        transform: "scale(1.30)",
                brightness:"100px"
			}}/>
            <Center pt={2}>
              <Text fontSize={20}>Newspaper</Text>
            </Center>
          </Box>
        </Center>
        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<FaBlog />}
       
         _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
            transform: "scale(1.30)",
                brightness:"100px"
			}}/>
            <Center pt={2}>
              <Text fontSize={20}>Blog</Text>
            </Center>
          </Box>
        </Center>
        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<FaBriefcase />}
  
    _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
        transform: "scale(1.30)",
                brightness:"100px"
			}}/>
            <Center pt={2}>
              <Text fontSize={20}>Jobs</Text>
            </Center>
          </Box>
        </Center>
        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<FaLightbulb />}
  
    _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
    transform: "scale(1.30)",
                brightness:"100px"
			}}/>
            <Center pt={2}>
              <Text fontSize={20}>Electricity Bill</Text>
            </Center>
          </Box>
        </Center>
        
        <Center w="100%" h="100%">
          <Box>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"teal"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="60px"
              icon={<ArrowRightIcon />}
                _hover={{
				cursor: "pointer",
				transition: "all .3s ease",
                transform: "scale(1.30)",
                brightness:"100px"
			}}
            />
            <Center pt={2}>
              <Text fontSize={20}>Know More</Text>
            </Center>
          </Box>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default Banner;

// const Cards = ({ img }) => {
//   return (
//     <Box
//       maxW={{ base: "40px", sm: "38", md: "80px" }}
//       boxShadow={"2xl"}
//       rounded={"lg"}
//       pos={"relative"}
//       zIndex={1}
//       _hover={{
//         cursor: "pointer",
//         transition: "all .3s ease",
//         transform: "scale(1.03)",
//       }}
//     >
//       <Image
//         rounded={"lg"}
//         height={"15rem"}
//         width={"20rem"}
//         boxSize="100%"
//         src={img}
//         boxShadow={"2xl"}
//       />
//     </Box>
//   );
// };
