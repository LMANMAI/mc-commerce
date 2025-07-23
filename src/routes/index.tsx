import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, ProductDetailPage } from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producto/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
