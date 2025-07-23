import { Box, Text } from "@chakra-ui/react";
//import { useColorModeValue } from "../../ui/color-mode";

const Footer = () => {
  // const bg = useColorModeValue("gray.100", "gray.800");
  // const color = useColorModeValue("gray.600", "gray.300");

  return (
    <Box bg={"black"} py={4} textAlign="center">
      <Text fontSize="sm" color={"white"}>
        DattaGraf es un producto de <strong>Dattar</strong>.
      </Text>
    </Box>
  );
};

export default Footer;
