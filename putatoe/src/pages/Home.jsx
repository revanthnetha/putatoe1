import { Box } from "@chakra-ui/react";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../Components/Homecomponents/Banner";
import Construction from "../Components/Homecomponents/Construction";
import Dailyneeds from "../Components/Homecomponents/Coaching";
import Intro from "../Components/Homecomponents/Intro";
import PopularService from "../Components/Homecomponents/Popularservices";
import Service from "../Components/Homecomponents/Services";
import Swiper from "../Components/Homecomponents/Swiper";

const Home = () => {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Putatoe</title>
				<meta name="description" content="Get the latest interiors" />
				<link rel="canonical" href="/" />
			</Helmet>
			<Box w={"100%"} h={"550px"}  pb={5} pt={6} mt={11}>
				<Swiper/>
			</Box>
			<Box w={"100%"} pt={10} pb={2}>
				<Banner/>
			</Box>
			<Box w={"100%"} pt={10}>
				<Intro/>
			</Box>
            <Box w={"100%"} >
				<Service/>
			</Box>
			<Box w={"100%"} >
				<Dailyneeds/>
			</Box>
            <Box w={"100%"} >
				<Construction/>
			</Box>
            <Box w={"100%"} >
				<PopularService/>
			</Box>
		</HelmetProvider>
	);
};

export default Home;
