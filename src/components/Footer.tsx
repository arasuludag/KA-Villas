import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";

export default function SmallWithLogoLeft() {
  return (
    <Box color={useColorModeValue("gray.700", "gray.200")}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Image src={logo} objectFit="scale-down" htmlWidth="100px" alt="Logo" />
        <Text>{`© ${new Date().getFullYear()} KA Exclusive Villas. All rights reserved`}</Text>
        <Text>Pazaryeri Mahallesi 443. Sokak No:30/4 Muğla, Fethiye</Text>
      </Container>
    </Box>
  );
}
