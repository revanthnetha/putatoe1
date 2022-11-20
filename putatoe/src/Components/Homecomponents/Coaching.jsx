// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
	Box,
	Container,
	Heading,
	Text,
	Center,
	Image,
} from "@chakra-ui/react";
import { Mousewheel, Keyboard } from "swiper";

const Dailyneeds = () => {
	return (
		<>
			<Box my={20}>
				<Container my={20}>
					<Center>
						<Heading >Education</Heading>
					</Center>
				</Container>
				<Swiper
					spaceBetween={50}
					breakpoints={{
						10: {
							slidesPerView: 1,
						},
						400: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 3,
						},
						1000: {
							slidesPerView: 4,
						}
					}}
					grabCursor={true}
					mousewheel={true}
					keyboard={true}
					modules={[Mousewheel, Keyboard]}
				>
					
						<SwiperSlide >
							<Center maxW={"5xl"} height={{ base: "auto", md: "25rem" }}>
								<Cards
									img='https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668948073/putatoe/Coaching/photo-1659770308526-1d1df0bd410c_idnmzx.avif'
									name="IIT"
									
								/>
							</Center>
						</SwiperSlide>

                        <SwiperSlide >
							<Center maxW={"5xl"} height={{ base: "auto", md: "25rem" }}>
								<Cards
									img='https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668948036/putatoe/Coaching/photo-1595134561159-11a5fbf6b3f4_g19yij.avif'
									name="University"
									
								/>
							</Center>
						</SwiperSlide>
                        <SwiperSlide >
							<Center maxW={"5xl"} height={{ base: "auto", md: "25rem" }}>
								<Cards
									img='https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668948022/putatoe/Coaching/photo-1612201801118-0ccdd547d51e_ykvrsj.avif'
									name="University"
									
								/>
							</Center>
						</SwiperSlide>
                        <SwiperSlide >
							<Center maxW={"5xl"} height={{ base: "auto", md: "25rem" }}>
								<Cards
									img='https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668948011/putatoe/Coaching/photo-1592150053369-ed15a7f68b92_nybv6u.avif'
									name="NIT"
									
								/>
							</Center>
						</SwiperSlide>
                        <SwiperSlide >
							<Center maxW={"5xl"} height={{ base: "auto", md: "25rem" }}>
								<Cards
									img='https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947985/putatoe/Coaching/photo-1557425955-df376b5903c8_kxounj.avif'
									name="Coaching"
									
								/>
							</Center>
						</SwiperSlide>
						<SwiperSlide >
							<Center maxW={"5xl"} height={{ base: "auto", md: "25rem" }}>
								<Cards
									img='https://res.cloudinary.com/dvcksw7qc/image/upload/c_scale,h_400,w_400/v1668947977/putatoe/Coaching/photo-1551836022-d5d88e9218df_o7qhqv.avif'
									name="Coaching"
									
								/>
							</Center>
						</SwiperSlide>
					
				</Swiper>
			</Box>
		</>
	);
};

export default Dailyneeds;

const Cards = ({ img, name}) => {
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
			<Center>
				<Image
					rounded={"xl"}
					height={"20rem"}
					width={"20rem"}
					boxSize="90%"
					src={img}
					boxShadow={"2xl"}
				/>
			</Center>
			<Center pt={"1rem"}>
				<Heading fontSize={"1rem"}>{name}</Heading>
			</Center>
			
		</Box>
	);
};
