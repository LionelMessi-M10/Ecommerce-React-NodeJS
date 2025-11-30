import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import QtyBox from '../../components/QtyBox';

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(null);

  return (
    <>
      <div className='py-5'>
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
        <div className='container flex gap-8 items-center'>
          <div className='productZoomContainer w-[40%]'>
            <ProductZoom />
          </div>

          <div className='productContent w-[60%] pr-10'>
            <h1 className='text-[24px] font-[600] mb-2'>Women Kurta</h1>

            <div className='flex items-center gap-3'>
              <span className='text-gray-400 text-[13px]'>
                Brands:{' '}
                <span className='font-[500] text-black opacity-75'>House of Chikankari</span>
              </span>

              <Rating name='half-rating' defaultValue={4} precision={1} size='small' readOnly />
              <span className='text-[13px] cursor-pointer'>Review (5)</span>
            </div>

            <div className='flex items-center gap-4 mt-4'>
              <h5 className='oldPrice line-through text-[20px] font-[500]'>1.500.000 đ</h5>
              <span className='price text-[20px] text-[#ff5252] font-[600]'>1.000.000 đ</span>

              <span className='text-[14px]'>
                Available In Stock:{' '}
                <span className='text-green-600 text-[14px] font-bold'>147 items</span>
              </span>
            </div>

            <p className='mt-3 pr-10'>
              Learn How To Create Full Stack Ecommerce Website Using React JS, MongoDB, Express JS
              and Node JS | React JS Project to Make Full Stack E-Commerce Website
            </p>

            <div className='flex items-center gap-3 mt-4'>
              <span className='text-[16px]'>Size:</span>
              <div className='flex items-center gap-1 actions'>
                <Button
                  className={`${productActionIndex == 0 ? '!bg-primary !text-white' : ''}`}
                  onClick={() => setProductActionIndex(0)}
                >
                  S
                </Button>
                <Button
                  className={`${productActionIndex == 1 ? '!bg-primary !text-white' : ''}`}
                  onClick={() => setProductActionIndex(1)}
                >
                  M
                </Button>
                <Button
                  className={`${productActionIndex == 2 ? '!bg-primary !text-white' : ''}`}
                  onClick={() => setProductActionIndex(2)}
                >
                  L
                </Button>
                <Button
                  className={`${productActionIndex == 3 ? '!bg-primary !text-white' : ''}`}
                  onClick={() => setProductActionIndex(3)}
                >
                  XL
                </Button>
              </div>
            </div>

            <p className='text-[14px] mt-4 mb-2'>Free Shipping (Est. Delivary Time 2-3 Days)</p>

            <div className='flex items-center gap-4'>
              <div className='qtyBoxWrapper w-[70px]'>
                <QtyBox />
              </div>

              <Button className='btn-org flex gap-2'>
                <MdOutlineShoppingCart className='!text-[22px]' />
                Add to Cart
              </Button>
            </div>

            <div className='flex items-center gap-4 mt-6'>
              <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                <FaRegHeart className='text-[18px]' /> Add to Wishlist
              </span>
              <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'>
                <IoGitCompareOutline className='text-[18px]' /> Add to Compare
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
