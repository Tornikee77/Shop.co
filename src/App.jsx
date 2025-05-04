import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import SuccessfullyLogin from "./components/SuccessfullyLogin/SuccessfullyLogin";
import Home from "./Home";
import Product from "./Procuct/Product";

const App = () => {
  return (
    <Routes>
      <Route path="/saba" element={<RegisterForm />} />
      <Route path="/successfully" element={<SuccessfullyLogin />} />
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
};

export default App;
