import {
  Box,
  Flex,
  Input,
  InputGroup,
  useBreakpointValue,
  HStack,
  Text,
  Link,
  Menu,
  Portal,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useColorModeValue } from "../../ui/color-mode";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const showText = useBreakpointValue({ base: false, md: true });
  const navigate = useNavigate();
  return (
    <Box bg={bg} px={6} py={4} shadow="sm">
      <Flex align="center" justifyContent={"space-between"}>
        {/* Logo */}
        <Box>
          <Text fontSize="xl" fontWeight="bold" color="brand.500">
            mascopies
          </Text>
        </Box>

        <Box flex="1" px={6} maxW={"500px"}>
          <InputGroup endElement={<FaSearch />}>
            <Input placeholder="Ingresa lo que quieras buscar" size={"sm"} />
          </InputGroup>
        </Box>

        <HStack gap={4}>
          <Link href="/auth">
            <Flex align="center" gap={2}>
              <FaUser />
              {showText && <Text fontSize="sm">Ingresar</Text>}
            </Flex>
          </Link>

          <Menu.Root>
            <Menu.Trigger
              as={Flex}
              /*align="center" */ gap={2}
              cursor="pointer"
            >
              <Box position="relative">
                <FaShoppingCart />
                <Box
                  position="absolute"
                  top="-1"
                  right="-2"
                  bg="teal.400"
                  color="white"
                  fontSize="xs"
                  px={1}
                  borderRadius="full"
                >
                  1
                </Box>
              </Box>
              {showText && <Text fontSize="sm">Mi carrito</Text>}
            </Menu.Trigger>

            <Portal>
              <Menu.Positioner
                w="300px"
                p={4}
                bg="white"
                shadow="lg"
                borderRadius="md"
              >
                <Flex gap={3}>
                  <Image
                    src="https://via.placeholder.com/60"
                    alt="Producto"
                    boxSize="60px"
                    objectFit="cover"
                  />
                  <Box>
                    <Text fontWeight="semibold">Bajada Laser B&N</Text>
                    <Text fontSize="sm" color="gray.600">
                      $11.169,00
                    </Text>
                  </Box>
                </Flex>

                {/* <Divider my={3} /> */}

                <Flex justify="space-between" fontWeight="bold">
                  <Text>Subtotal:</Text>
                  <Text>$11.169,00</Text>
                </Flex>

                <HStack mt={4}>
                  <Button
                    size="sm"
                    colorScheme="yellow"
                    flex="1"
                    onClick={() => {
                      navigate("/carrito");
                    }}
                  >
                    🛒 Ver carrito
                  </Button>
                  <Button size="sm" colorScheme="gray" flex="1">
                    ✔ Finalizar
                  </Button>
                </HStack>
              </Menu.Positioner>
            </Portal>
          </Menu.Root>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
