import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import AccountSidebar from '../../components/AccountSidebar';
import Badge from '../../components/Badge';

const Orders = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);

  const setIsShowOrderProduct = (index) => {
		if (isOpenOrderProduct === index) {
			setIsOpenOrderProduct(null);
		} else {
			setIsOpenOrderProduct(index);
		}
  };

  return (
    <section className='py-10 w-full'>
      <div className='container flex gap-5'>
        <div className='col1 w-[20%]'>
          <AccountSidebar />
        </div>

        <div className='col2 w-[80%]'>
          <div className='shadow-md rounded-md bg-white'>
            <div className='py-2 px-3 border-b border-[rgba(0, 0, 0, 0.1)]'>
              <h2>My Orders</h2>
              <p className='mt-0'>
                There are <span className='font-bold text-primary'>2</span> order
              </p>

              <div className='relative overflow-x-auto mt-5'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                  <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                      <th scope='col' className='px-6 py-3'>
                        &nbsp;
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Order Id
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Payment Id
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Product
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Name
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Phone Number
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Address
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Pincode
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Total
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Email
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        User Id
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Order Status
                      </th>
                      <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-white border-b'>
                      <td className='px-6 py-4 font-[500]'>
                        <Button
                          className='!w[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]'
                          onClick={() => setIsShowOrderProduct(0)}
                        >
                          {isOpenOrderProduct === 0 ? (
                            <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                          ) : (
                            <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                          )}
                        </Button>
                      </td>
                      <td className='px-6 py-4 font-[500]'>
                        <span className='text-primary'>9089242084290490292399</span>
                      </td>
                      <td className='px-6 py-4 font-[500]'>
                        <span className='text-primary'>pay_PTP0qEEXhjkm</span>
                      </td>
                      <td className='px-6 py-4 font-[500]'>Silver</td>
                      <td className='px-6 py-4 font-[500] whitespace-nowrap'>Reku vena</td>
                      <td className='px-6 py-4 font-[500]'>0988989988</td>
                      <td className='px-6 py-4 font-[500]'>
                        <span className='block w-[400px]'>
                          1928 nguywn van troi, hai ba trung, ha noi, viet nam
                        </span>
                      </td>
                      <td className='px-6 py-4 font-[500]'>110053</td>
                      <td className='px-6 py-4 font-[500]'>3800</td>
                      <td className='px-6 py-4 font-[500]'>kahnh@gmail.com</td>
                      <td className='px-6 py-4 font-[500]'>
                        <span className='text-primary'>luongthanh.huy</span>
                      </td>
                      <td className='px-6 py-4 font-[500]'>
                        <Badge status='delivered' />
                      </td>
                      <td className='px-6 py-4 font-[500] whitespace-nowrap'>2025-12-12</td>
                    </tr>

                    {isOpenOrderProduct === 0 && (
                      <tr>
                        <td className='pl-20' colSpan={6}>
                          <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                                <tr>
                                  <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                                    Product Id
                                  </th>
                                  <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                                    Product Title
                                  </th>
                                  <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                                    Image
                                  </th>
                                  <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                                    Quantity
                                  </th>
                                  <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                                    Price
                                  </th>
                                  <th scope='col' className='px-6 py-3 whitespace-nowrap'>
                                    SubTotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className='bg-white border-b'>
                                  <td className='px-6 py-4 font-[500]'>
                                    <span className='text-gray-600'>9089242084290490292399</span>
                                  </td>
                                  <td className='px-6 py-4 font-[500]'>Quan ao thu dong</td>
                                  <td className='px-6 py-4 font-[500]'>
                                    <img
                                      src='https://htmediagroup.vn/wp-content/uploads/2021/08/Chup-anh-quan-ao-1.jpg'
                                      alt='product'
                                      className='w-[40px] h-[40px] object-cover rounded-md'
                                    />
                                  </td>
                                  <td className='px-6 py-4 font-[500] whitespace-nowrap'>2</td>
                                  <td className='px-6 py-4 font-[500]'>13000</td>
                                  <td className='px-6 py-4 font-[500]'>26000</td>
                                </tr>
                                <tr className='bg-white border-b'>
                                  <td className='px-6 py-4 font-[500]'>
                                    <span className='text-gray-600'>9089242084290490292399</span>
                                  </td>
                                  <td className='px-6 py-4 font-[500] whitespace-nowrap'>Quan ao thu dong</td>
                                  <td className='px-6 py-4 font-[500]'>
                                    <img
                                      src='https://htmediagroup.vn/wp-content/uploads/2021/08/Chup-anh-quan-ao-1.jpg'
                                      alt='product'
                                      className='w-[40px] h-[40px] object-cover rounded-md'
                                    />
                                  </td>
                                  <td className='px-6 py-4 font-[500] whitespace-nowrap'>2</td>
                                  <td className='px-6 py-4 font-[500]'>13000</td>
                                  <td className='px-6 py-4 font-[500]'>26000</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}

										
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Orders;
