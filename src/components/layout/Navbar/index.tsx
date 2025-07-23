import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Input,
  InputGroup,
  //   InputRightElement,
  useBreakpointValue,
  HStack,
  Text,
  Link,
} from "@chakra-ui/react";
//import { SearchIcon } from "@chakra-ui/icons";
//import { FaUser, FaShoppingCart } from "react-icons/fa";
//import { useColorModeValue } from "../../ui/color-mode";

const Navbar = () => {
  // const bg = useColorModeValue("white", "gray.800");

  const showText = useBreakpointValue({ base: false, md: true });

  return (
    <Box bg={"red"} px={6} py={4} shadow="sm">
      <Flex align="center">
        {/* Logo */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="brand.500">
            mascopies
          </Text>
        </Box>

        {/* Search */}
        <Box flex="1" px={6}>
          {/* <InputGroup size="md">
            <Input placeholder="Ingresá lo que querés buscar..." />
            <InputRightElement>
              <IconButton
                aria-label="Buscar"
                icon={<SearchIcon />}
                size="sm"
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup> */}
        </Box>

        {/* Account / Cart */}
        <HStack gap={4}>
          <Link href="/login">
            <Flex align="center" gap={2}>
              {/* <FaUser /> */}
              {showText && <Text fontSize="sm">Ingresar</Text>}
            </Flex>
          </Link>

          <Link href="/carrito">
            <Flex align="center" gap={2}>
              <Box position="relative">
                {/* <FaShoppingCart /> */}
                {/* Badge (puede reemplazarse con Chakra Badge) */}
                <Box
                  position="absolute"
                  top="-1"
                  right="-2"
                  bg="green.400"
                  color="white"
                  fontSize="xs"
                  px={1}
                  borderRadius="full"
                >
                  1
                </Box>
              </Box>
              {showText && <Text fontSize="sm">Mi carrito</Text>}
            </Flex>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
