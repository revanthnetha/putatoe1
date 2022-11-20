import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Input,
} from '@chakra-ui/react';
import { FaBell, FaBriefcase, FaCartArrowDown, FaChevronLeft, FaFonticonsFi, FaLandmark, FaLocationArrow, FaMap, FaMapMarker, FaMapSigns, FaSearchLocation } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['About us', 'Business', 'Shop','Support'];

const NavLink = ({ children }) => (
  <Link
    px={4}
    py={1}
    rounded={'md'}
    fontSize="xl"
    fontWeight={"medium"}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('Aqua.200', 'Aqua.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('teal.100', 'teal.600')} position={"fixed"} w={"100%"} zIndex={4} top={0} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src="https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_50,w_50/v1668940707/download_xyfpag.png" rounded={"lg"}/>  
            </Box>
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Box>
                <Input width={"20rem"} variant={"filled"} placeholder={"Search"}/>
              </Box>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"black"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="25px"
              icon={<FaMapMarker />}
            />
            <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"black"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="25px"
              icon={<FaCartArrowDown />}
            />
               <IconButton
              height={"100%"}
              width={"100%"}
              rounded={"lg"}
              color={"black"}
              colorScheme={"white"}
              aria-label="Call Sage"
              fontSize="25px"
              icon={<FaBell />}
            />
           
            </Menu>
            
       
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={3} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

	  
    </>
  );
}