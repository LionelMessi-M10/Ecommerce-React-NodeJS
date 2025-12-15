import Button from "@mui/material/Button";
import { useContext } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";

const CartPanel = () => {

  const context = useContext(MyContext)

  return <>

    <div className='scroll w-full max-h-[500px] overflow-y-scroll overflow-x-hidden py-3 px-4'>
      <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0, 0, 0, 0.1)] pb-4'>
        <div className='img w-[25%] overflow-hidden h-[80px] rounded-md' onClick={context.toggleCartPanel(false)}>
          <Link to={'product/123'} className="block group">
            <img src="https://htmediagroup.vn/wp-content/uploads/2021/08/Chup-anh-quan-ao-1.jpg" alt="Anh 1" className='w-full group-hover:scale-105' />
          </Link>
        </div>

        <div className='info w-[75%] pr-5 relative'>
          <h4 className='text-[14px] font-[500]' onClick={context.toggleCartPanel(false)}>
            <Link to={'product/123'} className="link transition-all">
              A-line kurty with shaharad & dupldata
            </Link>
          </h4>
          <p className="flex items-center gap-5 mt-2 mb-2">
            <span>Qty : <span>2</span></span>
            <span className="text-primary font-bold">Price : <span>2000000</span></span>
          </p>

          <IoTrashOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
        </div>
      </div>
      <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0, 0, 0, 0.1)] pb-4'>
        <div className='img w-[25%] overflow-hidden h-[80px] rounded-md' onClick={context.toggleCartPanel(false)}>
          <Link to={'product/123'} className="block group">
            <img src="https://htmediagroup.vn/wp-content/uploads/2021/08/Chup-anh-quan-ao-1.jpg" alt="Anh 1" className='w-full group-hover:scale-105' />
          </Link>
        </div>

        <div className='info w-[75%] pr-5 relative'>
          <h4 className='text-[14px] font-[500]' onClick={context.toggleCartPanel(false)}>
            <Link to={'product/123'} className="link transition-all">
              A-line kurty with shaharad & dupldata
            </Link>
          </h4>
          <p className="flex items-center gap-5 mt-2 mb-2">
            <span>Qty : <span>2</span></span>
            <span className="text-primary font-bold">Price : <span>2000000</span></span>
          </p>

          <IoTrashOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
        </div>
      </div>
      <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0, 0, 0, 0.1)] pb-4'>
        <div className='img w-[25%] overflow-hidden h-[80px] rounded-md' onClick={context.toggleCartPanel(false)}>
          <Link to={'product/123'} className="block group">
            <img src="https://htmediagroup.vn/wp-content/uploads/2021/08/Chup-anh-quan-ao-1.jpg" alt="Anh 1" className='w-full group-hover:scale-105' />
          </Link>
        </div>

        <div className='info w-[75%] pr-5 relative'>
          <h4 className='text-[14px] font-[500]' onClick={context.toggleCartPanel(false)}>
            <Link to={'product/123'} className="link transition-all">
              A-line kurty with shaharad & dupldata
            </Link>
          </h4>
          <p className="flex items-center gap-5 mt-2 mb-2">
            <span>Qty : <span>2</span></span>
            <span className="text-primary font-bold">Price : <span>2000000</span></span>
          </p>

          <IoTrashOutline className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
        </div>
      </div>
    </div>

    <div className="bottomSec absolute bottom-[10px] left-[10px] w-full overflow-hidden pr-5">
      <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0, 0, 0, 0.1)] flex items-center justify-center flex-col">
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">1 items</span>
          <span className="text-primary font-bold">$86.00</span>
        </div>

        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">Shipping</span>
          <span className="text-primary font-bold">$7.00</span>
        </div>
      </div>

      <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0, 0, 0, 0.1)] flex items-center justify-center flex-col">
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">Total (tax excl.)</span>
          <span className="text-primary font-bold">$93.00</span>
        </div>
      </div>

      <div className="flex items-center justify-between py-3 px-4 gap-5 w-full">
        <Link to={"/cart"} className="w-[50%] block">
          <Button className="btn-org btn-lg w-full">View Cart</Button>
        </Link>
        <Link to={"/checkout"} className="w-[50%] block">
          <Button className="btn-org btn-border btn-lg w-full">Checkout</Button>
        </Link>
      </div>
    </div>
  </>
}
export default CartPanel