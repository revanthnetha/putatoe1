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

const Service = () => {
	return (
		<Box my={30} pt={10}>
			<Center>
				<Heading>Essential Needs</Heading>
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
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,w_400/v1668947097/putatoe/Cosmetics/photo-1596462502278-27bfdc403348_uf4x7a.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947258/putatoe/Cosmetics/photo-1603569283847-aa295f0d016a_ens0rg.avif'} />
					</Center>
                    <Center w="100%" h="100%">
						<Cards img={'https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947232/putatoe/Cosmetics/photo-1563636619-e9143da7973b_hwnnpg.avif'} />
					</Center>
					
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export default Service;

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
