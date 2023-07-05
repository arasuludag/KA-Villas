import {
  Box,
  Link,
  Heading,
  Flex,
  Text,
  Button,
  Image,
  useColorMode,
  Select,
  Stack,
} from "@chakra-ui/react";
import heroImage from "../assets/hero/KAHero2.jpg";
import logo from "../assets/white logo.png";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n, t } = useTranslation();

  return (
    <Box
      position="relative"
      background={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${heroImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={6}
    >
      <Heading as="h1" size="4xl">
        <Box
          as="span"
          height="1px"
          width="1px"
          position="absolute"
          overflow="hidden"
        >
          KA Exclusive Villas
        </Box>
        <Image width={"100px"} src={logo} />
      </Heading>

      <Stack
        direction={"row"}
        spacing={7}
        position="absolute"
        display={"flex"}
        justifyContent={"flex-end"}
        top={"1%"}
        right={"1%"}
      >
        <Select
          bgColor={"green.500"}
          border={"0px"}
          iconColor="white"
          sx={{
            color: "white",
            option: { color: "black" },
          }}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
        </Select>
        <Button onClick={toggleColorMode} bgColor={"green.500"}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
      <Box margin="0 auto" maxW="64rem" py={{ base: "1rem", lg: "8rem" }}>
        <Heading
          as="h2"
          fontSize={{ base: "2.25rem", lg: "3rem" }}
          mb="4"
          color="#fff"
        >
          {t("Hero.Title")}
        </Heading>
        <Flex
          justify="start"
          flexDirection={{ base: "column", lg: "row" }}
          align-items="center"
          maxWidth="42rem"
          marginX={{ base: "auto", lg: "0" }}
        >
          <Box
            pr={{ base: 0, lg: 5 }}
            width={{ base: "100%", lg: "50%" }}
            mb={{ base: "1rem", lg: "0" }}
          >
            <Text mb="0.5rem" color="#fff">
              {t("Hero.ButtonExp1")}
            </Text>
            <Link href="https://wa.me/905345606914" isExternal>
              <Button
                as={Link}
                bg="#fff"
                color="#000000"
                fontWeight="bold"
                px="2.5rem"
                py="1.5rem"
                width="full"
                border="2px solid #fff"
                rounded="md"
                leftIcon={<BsWhatsapp />}
                _hover={{ bg: "gray.300", textDecoration: "none" }}
              >
                WhatsApp
              </Button>
            </Link>
          </Box>
          <Box pl={{ base: 0, lg: 5 }} width={{ base: "100%", lg: "50%" }}>
            <Text mb="0.5rem" color="#fff">
              {t("Hero.ButtonExp2")}
            </Text>
            <Link
              href="https://www.instagram.com/kaexclusivevillas/"
              isExternal
            >
              <Button
                as={Link}
                bg="transparent"
                color="#fff"
                fontWeight="bold"
                px="2.5rem"
                py="1.5rem"
                width="full"
                border="2px solid #fff"
                rounded="md"
                leftIcon={<BsInstagram />}
                _hover={{ bg: "gray.800", textDecoration: "none" }}
              >
                Instagram
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
