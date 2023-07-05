/* eslint-disable react-hooks/rules-of-hooks */
import {
  Container,
  Box,
  chakra,
  SimpleGrid,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import leaf from "../assets/leaf1.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdBeachAccess } from "react-icons/md";
import { IoMdRestaurant } from "react-icons/io";
import { BiHealth } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { BsAirplane } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { ReactElement } from "react";

interface IFeature {
  heading: string;
  content: string;
  icon: ReactElement;
}

const iconStyle = {
  fontSize: "36px",
};

const Features = () => {
  const { t } = useTranslation();
  const [isMobile] = useMediaQuery("(max-width: 480px)");

  const features: IFeature[] = [
    {
      heading: t("Feature2.Airport"),
      content: "52km",
      icon: <BsAirplane style={iconStyle} />,
    },
    {
      heading: t("Feature2.Beach"),
      content: "8km",
      icon: <MdBeachAccess style={iconStyle} />,
    },
    {
      heading: t("Feature2.Shopping"),
      content: "400m",
      icon: <AiOutlineShoppingCart style={iconStyle} />,
    },
    {
      heading: t("Feature2.Restaurant"),
      content: "500m",
      icon: <IoMdRestaurant style={iconStyle} />,
    },
    {
      heading: t("Feature2.MedicalCenter"),
      content: "280m",
      icon: <BiHealth style={iconStyle} />,
    },
    {
      heading: t("Feature2.CityCenter"),
      content: "3km",
      icon: <FaCity style={iconStyle} />,
    },
  ];
  return (
    <Container
      maxW="6xl"
      p={{ base: 5, md: 10 }}
      bgImage={leaf}
      backgroundPosition={isMobile ? "right" : "-25px"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={isMobile ? "150%" : "60%"}
    >
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
        margin={"100px auto"}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue("gray.100", "gray.700")}
            p={6}
            rounded="lg"
            textAlign="left"
            pos="relative"
            display="flex"
            alignItems="center"
            width="100%"
            backdropFilter="blur(5px)"
            opacity={0.9}
          >
            <div>
              <chakra.h3 fontWeight="semibold" fontSize="2xl" mb={2}>
                {feature.heading}
              </chakra.h3>
              <chakra.h3 fontWeight="light" fontSize="2xl" mb={2}>
                {feature.content}
              </chakra.h3>
            </div>
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #22e681, #15aabf)"
              rounded="md"
              marginLeft="auto"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
