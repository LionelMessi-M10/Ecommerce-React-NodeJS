import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { createContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoCloseSharp } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import ProductDetailsComponent from './components/ProductDetails';
import ProductZoom from './components/ProductZoom';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import ProductDetails from './pages/ProductDetails';
import ProductListing from './pages/ProductListing';
import Register from './pages/Register';
import Vertify from './pages/Vertify';

const MyContext = createContext();

function App() {

  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxwidth] = useState('lg');
  const [isLogin, setIsLogin] = useState(true);

  const [openCartPanel, setOpenCartPanel] = useState(false);

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    } else if (status === "error") {
      toast.error(msg);
    }
  }

  const values = {
    setOpenProductDetailsModel,
    openCartPanel,
    setOpenCartPanel,
    toggleCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={'/'} exact={true} element={<Home />} />
            <Route path={'/productListing'} exact={true} element={<ProductListing />} />
            <Route path={'/product/:id'} exact={true} element={<ProductDetails />} />
            <Route path={'/login'} exact={true} element={<Login />} />
            <Route path={'/register'} exact={true} element={<Register />} />
            <Route path={'/cart'} exact={true} element={<CartPage />} />
            <Route path={'/vertify'} exact={true} element={<Vertify />} />
            <Route path={'/forgot-password'} exact={true} element={<ForgotPassword />} />
            <Route path={'/checkout'} exact={true} element={<Checkout />} />
            <Route path={'/my-account'} exact={true} element={<MyAccount />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

      <Toaster />

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModel}
        onClose={handleCloseProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >
        <DialogContent>
          <div className='flex items-center w-full productDetailsModalContainer relative'>
            <Button 
              className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-4 right-4 !bg-[#f1f1f1]'
              onClick={handleCloseProductDetailsModel}
            >
              <IoCloseSharp className='text-[20px]' />
            </Button>
            <div className='col1 w-[40%] px-3 py-8'>
              <ProductZoom />
            </div>

            <div className='col2 w-[60%] px-8 py-8 productContent'>
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default App;
export { MyContext };

