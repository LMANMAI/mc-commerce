import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <Box maxW="4xl" mx="auto" px={6} py={10}>
      {/* Título con subrayado */}
      <Box borderBottom="1px solid" borderColor="gray.200" pb={2} mb={8}>
        <Box
          as="h2"
          fontSize="xl"
          fontWeight="bold"
          borderBottom="3px solid"
          borderColor="teal.400"
          display="inline-block"
          pb={1}
        >
          Contacto
        </Box>
      </Box>

      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          <Stack gap={5}>
            <Field.Root>
              <Field.Label>Nombre</Field.Label>
              <Input placeholder="Ingrese su nombre..." />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input type="email" placeholder="Ingrese su email..." />
            </Field.Root>

            <Field.Root>
              <Field.Label>Mensaje</Field.Label>
              <Textarea placeholder="Ingrese su mensaje..." rows={5} />
            </Field.Root>
          </Stack>
        </Fieldset.Content>

        <Box textAlign="right" mt={6}>
          <Button
            //leftIcon={<FaPaperPlane />}
            colorScheme="gray"
            variant="solid"
          >
            Enviar
          </Button>
        </Box>
      </Fieldset.Root>
    </Box>
  );
};

export default ContactPage;
