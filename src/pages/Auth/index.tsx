import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";

const AuthPage = () => {
  return (
    <Box px={6} py={8} maxW="6xl" mx="auto">
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={10}
        alignItems="start"
      >
        {/* Iniciar sesión */}
        <Fieldset.Root size="sm" gap={5}>
          <Stack>
            <Heading as="h2" size="md">
              Iniciar sesión
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Si ya tenés cuenta, iniciá sesión con tus datos.
            </Text>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Email / Usuario *</Field.Label>
              <Input name="login_email" type="email" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Contraseña *</Field.Label>
              <Input name="login_password" type="password" size="sm" />
            </Field.Root>
          </Fieldset.Content>

          <Button type="submit" size="sm" colorScheme="gray">
            Iniciar sesión
          </Button>
        </Fieldset.Root>

        {/* Registro */}
        <Fieldset.Root size="sm" gap={5}>
          <Stack>
            <Heading as="h2" size="md">
              Registrate
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Completá un formulario sencillo y registrate
            </Text>
          </Stack>

          <Fieldset.Content>
            <Field.Root>
              <Field.Label>Nombre *</Field.Label>
              <Input name="nombre" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Empresa</Field.Label>
              <Input name="empresa" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Razón social</Field.Label>
              <Input name="razon_social" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>C.U.I.T.</Field.Label>
              <Input name="cuit" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Dirección *</Field.Label>
              <Input name="direccion" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Teléfono *</Field.Label>
              <Input name="telefono" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email *</Field.Label>
              <Input name="email" type="email" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Nombre de usuario *</Field.Label>
              <Input name="username" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Contraseña *</Field.Label>
              <Input name="password" type="password" size="sm" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Repetir contraseña *</Field.Label>
              <Input name="password_repeat" type="password" size="sm" />
            </Field.Root>
          </Fieldset.Content>

          <Button
            type="submit"
            size="sm"
            colorScheme="gray"
            alignSelf="flex-start"
          >
            Continuar
          </Button>
        </Fieldset.Root>
      </Grid>
    </Box>
  );
};

export default AuthPage;
