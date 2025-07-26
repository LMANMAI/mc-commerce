import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  VStack,
  Spinner,
  Center,
  Stack,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { useEffect } from "react";
import {
  /*fetchProducts, */ setProducts,
} from "../../features/products/ProductSlice";
import MainLayout from "../../components/layout/MainLayout";
import useFetch from "../../hooks/useFetch";
import type { Product } from "../../types";
import { PRODUCT } from "../../config/constans";

const Home = () => {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state: RootState) => state.products);

  //consulto al ep los productos
  const {
    data,
    isLoading,
    error: errorMessage,
  } = useFetch<Product[]>(PRODUCT.GET_PRODUCTS, {
    useInitialFetch: true,
  });

  useEffect(() => {
    if (data) {
      console.log(data, "data");
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  return (
    <Box>
      <Heading mb={6} size="lg">
        Home
      </Heading>

      {loading || isLoading ? (
        <Stack
          py={20}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Spinner size="xl" />
          <Text>Obteniendo productos</Text>
        </Stack>
      ) : error ? (
        <Text color="red.500">Error: {error}</Text>
      ) : products.length === 0 ? (
        <Center py={20}>
          <Text fontSize="lg" color="gray.500">
            No se encontraron productos.
          </Text>
        </Center>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
          {products.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="md"
              overflow="hidden"
              bg="white"
              _hover={{ shadow: "md" }}
            >
              <Image
                src={product.image || ""}
                alt={product.name}
                objectFit="cover"
                width="100%"
                height="200px"
              />
              <VStack gap={2} p={4} align="start">
                <Text fontWeight="bold">{product.name}</Text>
                {/* <Text color="gray.600">
                    ${product.price.toLocaleString()}
                  </Text> */}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Home;
