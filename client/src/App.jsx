import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { createContext, useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import ProductDetailsComponent from './components/ProductDetails';
import ProductZoom from './components/ProductZoom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductListing from './pages/ProductListing';

const MyContext = createContext();

function App() {

  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxwidth] = useState('lg');

  const handleCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const values = {
    setOpenProductDetailsModel
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={'/'} exact={true} element={<Home />} />
            <Route path={'/productListing'} exact={true} element={<ProductListing />} />
            <Route path={'/productDetails/:id'} exact={true} element={<ProductDetails />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>

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
