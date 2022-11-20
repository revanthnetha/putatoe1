import { Center, Heading, Box, Image, Text, Stack,useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Intro = () => {
  return (
    <div>
      <Box>
        <Center pb={"20px"} flexDirection={"row"}> 
        <Stack>
            <Center>
          <Heading>PUTATOE</Heading>
          </Center>
          <Box
							color={"black"}
							fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
							fontWeight={600}
						>
          <ReactTypingEffect
            speed={70}
            eraseSpeed={100}
            fontSize={"30px"}
            text={[
              "One Stop for all ESSENTIAL NEEDS",
              "Get all services in one app",
            ]}
          />
          </Box>
          </Stack>
        </Center>
        <Image
          width="100%"
          px={"100px"}
          rounded="2xl"
          height={"400px"}
          src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668945745/putatoe/Swiper/285290688_2126853847475764_3287433965836451005_n_bswfu5.png"
        ></Image>
      </Box>
    </div>
  );
};

export default Intro;
