import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const cartItems = [
  {
    id: 1,
    name: "Bajada Laser B&N",
    description: [
      "color: blanco y negro frente y dorso",
      "papel: papel vegetal",
      "medidas: 42cm. x 29.7cm.",
    ],
    image: "https://via.placeholder.com/60",
    price: 11169,
    quantity: 4,
  },
  {
    id: 1,
    name: "Bajada Laser B&N",
    description: [
      "color: blanco y negro frente y dorso",
      "papel: papel vegetal",
      "medidas: 42cm. x 29.7cm.",
    ],
    image: "https://via.placeholder.com/60",
    price: 11169,
    quantity: 4,
  },
  {
    id: 1,
    name: "Bajada Laser B&N",
    description: [
      "color: blanco y negro frente y dorso",
      "papel: papel vegetal",
      "medidas: 42cm. x 29.7cm.",
    ],
    image: "https://via.placeholder.com/60",
    price: 11169,
    quantity: 4,
  },
];

const CartPage = () => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box maxW="6xl" mx="auto" px={6} py={10}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Mi carrito
      </Text>

      <Table.Root variant="outline" size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Producto</Table.ColumnHeader>
            <Table.ColumnHeader>Descripción</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Precio</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Cantidad</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center"></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cartItems.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>
                <Image src={item.image} alt={item.name} boxSize="60px" />
              </Table.Cell>

              <Table.Cell>
                <Text fontWeight="bold">{item.name}</Text>
                <Stack gap={0} fontSize="sm" color="gray.600">
                  {item.description.map((line, i) => (
                    <Text key={i}>{line}</Text>
                  ))}
                </Stack>
              </Table.Cell>

              <Table.Cell textAlign="end">
                ${item.price.toLocaleString("es-AR")}
              </Table.Cell>

              <Table.Cell textAlign="center">{item.quantity}</Table.Cell>

              <Table.Cell textAlign="center">
                <IconButton
                  //   icon={<FiTrash2 />}
                  aria-label="Eliminar"
                  variant="ghost"
                  size="sm"
                  colorScheme="red"
                />
              </Table.Cell>
            </Table.Row>
          ))}
          {/* <Table.Row>
            <Table.Cell>
              <HStack>
                <Text fontWeight="bold">Total:</Text>
                <Text fontSize="lg">${total.toLocaleString("es-AR")}</Text>
              </HStack>
            </Table.Cell>
          </Table.Row> */}
        </Table.Body>
      </Table.Root>
      <Box
        mt={2}
        border="1px solid"
        borderColor="gray.200"
        borderTop="none"
        px={6}
        py={3}
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        bg="gray.50"
      >
        <Text fontWeight="bold" mr={4}>
          Total:
        </Text>
        <Text fontSize="lg" fontWeight="medium">
          ${total.toLocaleString("es-AR")}
        </Text>
      </Box>
      <Flex
        justify="space-between"
        align="center"
        mt={10}
        flexWrap="wrap"
        gap={4}
      >
        <Button
          //   leftIcon={<FaArrowLeft />}
          variant="outline"
          colorScheme="gray"
        >
          Continuar comprando
        </Button>

        <Button
          //   rightIcon={<FaCheck />}
          colorPalette="teal"
          fontWeight="bold"
        >
          Finalizar la compra
        </Button>
      </Flex>
    </Box>
  );
};

export default CartPage;
