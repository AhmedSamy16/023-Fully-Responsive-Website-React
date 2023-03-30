import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/sign-up",
    element: <Signup />
  }
])

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;