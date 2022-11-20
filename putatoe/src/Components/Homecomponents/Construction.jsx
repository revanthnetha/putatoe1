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

const Construction = () => {
	return (
		<Box my={20} pt={6}>
			<Center>
				<Heading>Construction</Heading>
			</Center>
			<Box my={10} pt={35} mx={{ base: "-2", sm: "20" }}>
				<SimpleGrid
					minChildWidth={{ base: "180px", sm: "200", md: "300px" }}
					spacing="40px"
				>
					<Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947615/putatoe/Construction/photo-1623489254637-a2dd8375243d_niny2n.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947591/putatoe/Construction/photo-1504307651254-35680f356dfd_wy1etv.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947576/putatoe/Construction/photo-1531834685032-c34bf0d84c77_hwo8gj.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947564/putatoe/Construction/premium_photo-1663054710563-598f084bdd42_fyk7zg.avif'} />
					</Center>
					
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export default Construction;

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
