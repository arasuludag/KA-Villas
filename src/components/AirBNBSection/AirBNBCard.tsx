import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import villa from "../../interfaces/villa.interface";
import { useTranslation } from "react-i18next";

export default function ProductCard(props: { villa: villa }) {
  const { t } = useTranslation();
  const image = new URL(`../../assets/${props.villa.image}`, import.meta.url)
    .href;

  return (
    <Center py={16}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Ka Exclusive
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {props.villa.title}
          </Heading>
          <Link href={props.villa.href} isExternal>
            <Button leftIcon={<FaAirbnb />} colorScheme="green" variant="ghost">
              {t("DisplayOnAirBNB")}
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}
