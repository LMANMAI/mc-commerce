import { Box, Flex, HStack, Link, useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue } from "../../ui/color-mode";
import CategoriesMegaMenu from "./modules/Categorias";

const MainMenu = () => {
  const bg = useColorModeValue("teal.500", "gray.700");
  const blue = useColorModeValue("white", "gray.100");
  const green = useColorModeValue("whiteAlpha.800", "white");
  const spacing = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Box bg={bg} py={2} px={6}>
      <Flex justify="start">
        <HStack gap={spacing} fontSize={"14px"} padding={2}>
          <Link
            href="/"
            fontWeight="medium"
            color={blue}
            _hover={{ color: green }}
          >
            HOME
          </Link>
          <CategoriesMegaMenu />
          <Link
            href="/sistema"
            fontWeight="medium"
            color={blue}
            _hover={{ color: green }}
          >
            IR AL SISTEMA
          </Link>
          <Link
            href="/contacto"
            fontWeight="medium"
            color={blue}
            _hover={{ color: green }}
          >
            CONTACTO
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default MainMenu;
