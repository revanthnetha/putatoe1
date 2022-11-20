import React from "react";
import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	Grid,
	GridItem,
	Container,
	SimpleGrid,
} from "@chakra-ui/react";

const PopularService = () => {
	return (
		<Box my={40} pt={30} >
			<Center>
				<Heading>PopularServices</Heading>
			</Center>
			<Box my={10} pt={35} mx={{ base: "-2", sm: "20" }}>
				<SimpleGrid
					minChildWidth={{ base: "180px", sm: "200", md: "300px" }}
					spacing="40px"
				>
					<Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947114/putatoe/Cosmetics/photo-1583784561105-a674080f391e_d9grnq.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947615/putatoe/Construction/photo-1623489254637-a2dd8375243d_niny2n.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947258/putatoe/Cosmetics/photo-1603569283847-aa295f0d016a_ens0rg.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668948036/putatoe/Coaching/photo-1595134561159-11a5fbf6b3f4_g19yij.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947576/putatoe/Construction/photo-1531834685032-c34bf0d84c77_hwo8gj.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947083/putatoe/Cosmetics/photo-1598440947619-2c35fc9aa908_uigkmc.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668948011/putatoe/Coaching/photo-1592150053369-ed15a7f68b92_nybv6u.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947071/putatoe/Cosmetics/photo-1512496015851-a90fb38ba796_uijrgi.avif'} />
					</Center>
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export default PopularService;

const Cards = ({ img }) => {
	return (
		<Box
			maxW={{ base: "200px", sm: "250px", md: "300px" }}
			boxShadow={"2xl"}
			rounded={"lg"}
			pos={"relative"}
			zIndex={1}
			_hover={{
				cursor: "pointer",
				transition: "all .3s ease",
				transform: "scale(1.03)",
			}}
		>
			<Image
				rounded={"xl"}
				height={"20rem"}
				width={"20rem"}
				boxSize="100%"
				src={img}
				boxShadow={"2xl"}
			/>
		</Box>
	);
};
