import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import MainMenu from "./MainMenu";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => (
  <Box minH="100vh" display="flex" flexDirection="column">
    <Navbar />
    <MainMenu />
    <Box flex="1" px={6} py={4}>
      {children}
    </Box>
    <Footer />
  </Box>
);

export default MainLayout;
