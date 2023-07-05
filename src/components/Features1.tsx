/* eslint-disable react-hooks/rules-of-hooks */
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import leaf from "../assets/leaf3.png";
import leafVertical from "../assets/leaf3-vertical.png";
import { FaHotTub, FaSwimmingPool } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { GiBarbecue, GiSteam } from "react-icons/gi";
import { LuParkingSquare } from "react-icons/lu";
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
      heading: t("Feature1.WiFi.Title"),
      content: t("Feature1.WiFi.Info"),
      icon: <AiOutlineWifi style={iconStyle} />,
    },
    {
      heading: t("Feature1.Pool.Title"),
      content: t("Feature1.Pool.Info"),
      icon: <FaSwimmingPool style={iconStyle} />,
    },
    {
      heading: t("Feature1.HotTub.Title"),
      content: t("Feature1.HotTub.Info"),
      icon: <FaHotTub style={iconStyle} />,
    },
    {
      heading: t("Feature1.Steam.Title"),
      content: t("Feature1.Steam.Info"),
      icon: <GiSteam style={iconStyle} />,
    },
    {
      heading: t("Feature1.Parking.Title"),
      content: t("Feature1.Parking.Info"),
      icon: <LuParkingSquare style={iconStyle} />,
    },
    {
      heading: t("Feature1.BBQ.Title"),
      content: t("Feature1.BBQ.Info"),
      icon: <GiBarbecue style={iconStyle} />,
    },
  ];

  return (
    <Container
      maxW="6xl"
      p={{ base: 5, md: 10 }}
      bgImage={isMobile ? leafVertical : leaf}
      backgroundPosition={isMobile ? "center" : "right"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={isMobile ? "250%" : "100%"}
    >
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        {t("Feature1.Title")}
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue("gray.100", "gray.700")}
            p={6}
            rounded="lg"
            textAlign="center"
            backdropFilter="blur(5px)"
            pos="relative"
            opacity={0.9}
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #22e681, #15aabf)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;
