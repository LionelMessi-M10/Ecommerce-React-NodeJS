import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import { FaRegHeart } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart, MdZoomOutMap } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './style.css';

const ProductItemListView = () => {
  return (
    <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0, 0, 0, 0.1)] flex items-center'>

			{/* Ảnh sản phẩm */}
      <div className='imgWrapper w-[25%] overflow-hidden relative group'>
        <Link to={'/'}>
          <div className='img h-[250px] overflow-hidden'>
            <img
              src='https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg'
              className='w-full'
            />

						{/* Ảnh sản phẩm hover */}
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9n1r-hPZNOg8xrSgpxmC_R0V4mmunMcP6Nw&s'
              className='w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100  group-hover:scale-105 transition-all duration-700'
              alt='product'
            />
          </div>
        </Link>

        <span className='discount flex items-center justify-center absolute top-[10px] left-[10px] z-50 bg-primary text-white text-[12px] font-[500] px-2 py-1 rounded-md'>
          -10%
        </span>

        {/* Icon tính năng của sản phẩm */}
        <div className='actions absolute top-[-200px] right-[5px] z-50 flex items-center flex-col gap-2 w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
          {/* Icon wishlist */}
          <Tooltip title='Add wishlist' arrow placement='left-start' className='!z-50'>
            <Button className='!w-[35px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white !min-w-0 !p-0 flex items-center justify-center'>
              <FaRegHeart className='text-[18px]' />
            </Button>
          </Tooltip>

          {/* Icon so sánh sản phẩm */}
          <Tooltip title='Compare' arrow placement='left-start' className='!z-50'>
            <Button className='!w-[35px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white !min-w-0 !p-0 flex items-center justify-center'>
              <IoGitCompareOutline className='text-[18px]' />
            </Button>
          </Tooltip>

					{/* Icon xem chi tiết sản phẩm */}
          <Tooltip title='View Product' arrow placement='left-start' className='!z-50'>
            <Button className='!w-[35px] !h-[35px] !rounded-full !bg-white !text-black hover:!bg-primary hover:!text-white !min-w-0 !p-0 flex items-center justify-center'>
              <MdZoomOutMap className='text-[18px]' />
            </Button>
          </Tooltip>
        </div>
      </div>

			{/* Thông tin sản phẩm */}
      <div className='info p-3 py-5 px-8 w-[75%] flex items-start justify-center flex-col'>
        <h6 className='text-[15px]'>
          <Link to={'/'} className='link transition-all'>
            Product 1
          </Link>
        </h6>
        <h3 className='text-[18px] title mt-3 mb-3 font-[500] text-[#000]'>
          <Link to={'/'} className='link transition-all'>
            San pham chat luong cao, gia ca phai chang
          </Link>
        </h3>

        <p className='text-[14px] mb-3'>
          Sản phẩm chất lương cao, hoàn toàn có lợi cho sức khỏe, xuất sứ nguồn gốc rõ ràng, minh bạch, có
          giấy tờ kiểm định từ châu âu, tổ chức uy tín
        </p>

				{/* Đánh giá sản phẩm */}
        <Rating name='half-rating' defaultValue={4} precision={1} size='small' readOnly />

				{/* Giá sản phẩm */}
        <div className='price flex items-center justify-between mt-2'>
          <h5 className='text-[16px] font-[600] text-[#ff5252]'>1.000.000 đ</h5>
          <span className='text-[12px] text-[#999] line-through'>1.500.000 đ</span>
        </div>

        <div className='mt-3'>
          <Button className='btn-org flex gap-2'>
            <MdOutlineShoppingCart className='text-[20px]' /> Add to Cart
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ProductItemListView;
