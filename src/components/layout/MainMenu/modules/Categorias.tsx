import {
  Box,
  Button,
  Menu,
  //   MenuButton,
  //   MenuList,
  Portal,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";

const CategoriesMegaMenu = () => {
  return (
    <Menu.Root /*isLazy*/>
      <Menu.Trigger
        as={Button}
        //variant="ghost"
        //rightIcon={<ChevronDownIcon />}
        _hover={{ bg: "teal.600" }}
        _expanded={{ bg: "teal.600" }}
        color="white"
      >
        Categorías
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner
          p={6}
          minW="800px"
          borderRadius="md"
          boxShadow="lg"
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          gap={20}
          zIndex="popover"
        >
          {/* COLUMNA 1 - IMPRENTA */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Imprenta
            </Text>
            <VStack align="flex-start" gap={1}>
              <Text fontSize="sm">Carpetas</Text>
              <Text fontSize="sm">Tarjetas</Text>
              <Text fontSize="sm">Folletos</Text>
              <Text fontSize="sm">Catálogos</Text>
              <Text fontSize="sm">Bajadas Láser</Text>
              <Text fontSize="sm">Diseños</Text>
              <Text fontSize="sm">Sobres</Text>
              <Text fontSize="sm">Stickers</Text>
              <Text fontSize="sm">Plastificados</Text>
              <Text fontSize="sm">Postales</Text>
              <Text fontSize="sm">Sellos</Text>
              <Text fontSize="sm">Puntillado</Text>
              <Text fontSize="sm">Dato variable</Text>
              {/* Agregá más ítems si querés */}
            </VStack>
          </Box>

          {/* COLUMNA 2 - LIBRERÍA */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Librería
            </Text>
            <VStack align="flex-start" gap={1}>
              <Text fontSize="sm">Papeles</Text>
              <Text fontSize="sm">Anillados</Text>
              <Text fontSize="sm">Cuadernos</Text>
            </VStack>
          </Box>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default CategoriesMegaMenu;
