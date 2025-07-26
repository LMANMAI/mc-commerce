import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductDetailPage,
  AuthPage,
  CartPage,
  ContactPage,
} from "../pages";
import MainLayout from "../components/layout/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:id" element={<ProductDetailPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
