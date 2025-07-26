import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import MainMenu from "./MainMenu";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <Box minH="100vh" display="flex" flexDirection="column">
    <Navbar />
    <MainMenu />
    <Box flex="1" px={6} py={4}>
      <Outlet />
    </Box>
    <Footer />
  </Box>
);

export default MainLayout;
