import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Rating from "@mui/material/Rating";
import { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartItems = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState(null);
  const [selectedSize, setCartItems] = useState(props.size);
  const openSize = Boolean(sizeAnchorEl);

  const [qtyAnchorEl, setQtyAnchorEl] = useState(null);
  const [selectedQty, setSelectedQty] = useState(props.qty);
  const openQty = Boolean(qtyAnchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };

  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setCartItems(value);
    }
  };

  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };

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

        <div className='flex items-center gap-4 mt-2'>
          <div className='relative'>
            <span
              className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer'
              onClick={handleClickSize}
            >
              Size: {selectedSize} <GoTriangleDown />
            </span>

            <Menu
              id='size-menu'
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => handleCloseSize(null)}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem onClick={() => handleCloseSize('S')}>S</MenuItem>
              <MenuItem onClick={() => handleCloseSize('M')}>M</MenuItem>
              <MenuItem onClick={() => handleCloseSize('L')}>L</MenuItem>
              <MenuItem onClick={() => handleCloseSize('XL')}>XL</MenuItem>
              <MenuItem onClick={() => handleCloseSize('XXL')}>XXL</MenuItem>
            </Menu>
          </div>

          <div className='relative'>
            <span
              className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer'
              onClick={handleClickQty}
            >
              Qty: {selectedQty} <GoTriangleDown />
            </span>

            <Menu
              id='size-menu'
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => handleCloseQty(null)}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
              <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
              <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
              <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
              <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
            </Menu>
          </div>
        </div>

        <div className='price flex items-center gap-4 mt-2'>
          <h5 className='text-[14px] font-[600]'>1.000.000 đ</h5>
          <span className='text-[14px] text-[#999] line-through'>1.500.000 đ</span>
          <span className='text-[14px] text-primary font-[600]'>50% OFF</span>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
