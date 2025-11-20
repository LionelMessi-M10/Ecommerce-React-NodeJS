import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import ProductListing from "./pages/ProductListing"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route path={"/productListing"} exact={true} element={<ProductListing />} />
          <Route path={"/productDetails/:id"} exact={true} element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
