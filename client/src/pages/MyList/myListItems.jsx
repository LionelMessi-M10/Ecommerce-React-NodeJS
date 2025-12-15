import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const MyListItems = () => {

  return (
    <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0, 0, 0, 0.1)]'>
      <div className='img w-[15%] overflow-hidden rounded-md'>
        <Link to={'/product/456'} className='group'>
          <img
            src='https://htmediagroup.vn/wp-content/uploads/2021/08/Chup-anh-quan-ao-1.jpg'
            alt='Anh 1'
            className='w-full group-hover:scale-105 transition-all'
          />
        </Link>
      </div>

      <div className='info w-[85%] relative'>
        <IoCloseSharp className='cursor-pointer absolute top-0 right-0 text-[22px] link transition-all' />
        <span className='text-[13px]'>Sangia</span>
        <h3 className='text-[15px]'>
          <Link className='link'>A-line kurti with shaharad & dupldata</Link>
        </h3>

        <Rating name='size-small' defaultValue={4} size='small' readOnly />

        <div className='price flex items-center gap-4 my-2'>
          <h5 className='text-[14px] font-[600]'>1.000.000 đ</h5>
          <span className='text-[14px] text-[#999] line-through'>1.500.000 đ</span>
          <span className='text-[14px] text-primary font-[600]'>50% OFF</span>
        </div>

        <Button className="btn-org btn-sm">Add to Cart</Button>

      </div>
    </div>
  );
};
export default MyListItems;
