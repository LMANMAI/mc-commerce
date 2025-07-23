import {
  Box,
  Button,
  Image,
  Text,
  VStack,
  Heading,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { addToCart } from "../../features/cart/CartSlice";
import MainLayout from "../../components/layout/MainLayout";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) =>
    state.products.items.find((p) => p.id === id)
  );

  if (!product) {
    return (
      <MainLayout>
        <Center py={20}>
          <Spinner size="xl" />
        </Center>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Box display="flex" flexDir={{ base: "column", md: "row" }} gap={8}>
        <Image
          src={product.image || "https://via.placeholder.com/400"}
          alt={product.name}
          width="100%"
          maxW="400px"
          objectFit="cover"
        />
        <VStack align="start" gap={4}>
          <Heading>{product.name}</Heading>
          <Text fontSize="lg" color="gray.600">
            ${product.price.toLocaleString()}
          </Text>
          {product.description && <Text>{product.description}</Text>}

          <Button
            colorScheme="teal"
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            Agregar al carrito
          </Button>
        </VStack>
      </Box>
    </MainLayout>
  );
};

export default ProductDetail;
