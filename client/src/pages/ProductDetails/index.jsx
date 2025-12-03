import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetailsComponent from '../../components/ProductDetails';
import ProductsSlider from '../../components/ProductsSlider';
import ProductZoom from '../../components/ProductZoom';

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

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

          <div className='productContent w-[60%] pr-10 pl-10'>
            <ProductDetailsComponent />
          </div>
        </div>

        <div className='container pt-10'>
          <div className='flex items-center gap-8 mb-5'>
            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 && 'text-primary'}`} onClick={() => setActiveTab(0)}>Description</span>
            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 && 'text-primary'}`} onClick={() => setActiveTab(1)}>Product Details</span>
            <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 && 'text-primary'}`} onClick={() => setActiveTab(2)}>Review (5)</span>
          </div>

          {
            activeTab === 0 && 
            (
              <div className='shadow-md w-full px-8 py-5 rounded-md'>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <h4>
                  Lightweight Design
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                
                <h4>
                  Free Shipping And Return
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                
                <h4>
                  Money back guarantee
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            )
          }

          {
            activeTab === 1 &&
            (
              <div className='shadow-md w-full px-8 py-5 rounded-md'>
                <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base">
                    <table class="w-full text-sm text-left rtl:text-right text-body">
                        <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                            <tr>
                                <th scope="col" class="px-6 py-3 font-medium">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3 font-medium">
                                    Color
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-neutral-primary-soft border-b  border-default">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                            </tr>
                            <tr class="bg-neutral-primary-soft border-b  border-default">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">
                                    White
                                </td>
                            </tr>
                            <tr class="bg-neutral-primary-soft">
                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">
                                    Black
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

              </div>
            )
          }

          {
            activeTab === 2 &&
            (
              <div className='shadow-md w-[80%] px-8 py-5 rounded-md'>
                <div className='w-full productReviewsContainer'>
                  <h2 className='text-[18px]'>Customer questions & answer</h2>

                  <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5'>
                    <div className='review pt-5 pb-5 border-b border-[rgba(0, 0, 0, 0.1] w-full flex items-center justify-between'>
                      <div className='info w-[60%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user image" className='w-full' />
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Huy kaka</h4>
                          <h5 className='text-[13px] mb-0'>2025-01-01</h5>
                          <p className='mt-0 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                      </div>

                      <Rating name='half-rating' defaultValue={4} precision={1} readOnly />

                    </div>
                    <div className='review pt-5 pb-5 border-b border-[rgba(0, 0, 0, 0.1)] w-full flex items-center justify-between'>
                      <div className='info w-[60%] flex items-center gap-3'>
                        <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                          <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="user image" className='w-full' />
                        </div>

                        <div className='w-[80%]'>
                          <h4 className='text-[16px]'>Huy kaka</h4>
                          <h5 className='text-[13px] mb-0'>2025-01-01</h5>
                          <p className='mt-0 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                      </div>

                      <Rating name='half-rating' defaultValue={4} precision={1} readOnly />

                    </div>
                  </div>

                  <br/>

                  <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                    <h2 className='text-[18px]'>Add a review</h2>
                    <form className='w-full mt-5'>
                      <TextField
                        id="outlined-multiline-static"
                        label="Write a review..."
                        className='w-full !mb-5'
                        multiline
                        rows={5}
                      />
                      <Rating name='size-small' precision={1} />
                      <div className='flex items-center mt-4'>
                        <Button className='btn-org'>Submit Review</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )
          }
        </div>

        <div className='container pt-8'>
          <h2 className='text-[20px] font-[600]'>Related Products</h2>
          <ProductsSlider items={6} />
        </div>

      </section>
    </>
  );
};
export default ProductDetails;
