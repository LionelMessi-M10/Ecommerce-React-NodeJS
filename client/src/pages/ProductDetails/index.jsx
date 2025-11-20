import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import ProductZoom from '../../components/ProductZoom';

const ProductDetails = () => {
  return (
      <>
      <div className="py-5">
        <div className='container'>
          <Breadcrumbs aria-label='breadcrumb'>
            <Link underline='hover' color='inherit' to='/' className='link transition text-[14px]'>
              Home
            </Link>
            <Link underline='hover' color='inherit' to='/' className='link transition text-[14px]'>
              Fashion
            </Link>
            <Link underline='hover' color='inherit' className='link transition text-[14px]'>
              Clothes
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className='bg-white py-5'>
        <div className='container flex gap-8'>
          <div className='productZoomContainer w-[40%]'>
            <ProductZoom />
          </div>

          <div className='productContent w-[60%]'>
            <h1 className='text-[22px] font-[600] mb-2'>Women Kurta</h1>
            
            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-[13px]'>
                Brands: <span className='font-[500] text-black opacity-75'>House of Chikankari</span>
              </span>

              <Rating name='half-rating' defaultValue={4} precision={1} size='small' readOnly />
              <span className='text-[13px] cursor-pointer'>Review (5)</span>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <h5 className='oldPrice line-through text-[18px] font-[500]'>1.500.000 đ</h5>
              <span className='price text-[18px] text-[#ff5252] font-[600]'>1.000.000 đ</span>
            </div>

            <br/>

            <p>
              Learn How To Create Full Stack Ecommerce Website Using React JS, MongoDB, Express JS and Node JS | React JS Project to Make Full Stack E-Commerce Website
            </p>

          </div>
        </div>
      </section>
    </>
  )
}
export default ProductDetails