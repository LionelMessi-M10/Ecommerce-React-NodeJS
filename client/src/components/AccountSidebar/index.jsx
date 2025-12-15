import Button from "@mui/material/Button";
import { BsBagCheckFill } from "react-icons/bs";
import { FaCloudUploadAlt, FaHeart, FaRegUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
  return (
    <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
      <div className="w-full p-5 flex items-center justify-center flex-col">
        {/* Avatar */}
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
          <img
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEyL3Jhd3BpeGVsb2ZmaWNlMTBfYWR1bHRfaW5kaWFuX2xhdWdoaW5nX2FuZF9oYXZpbmdfZnVuX2luZGlhbl9idV8yNTNkNzMyYy03M2FiLTRlMDEtYTkwYy0zYjE1MGE2OTEzNWVfMS5wbmc.png" alt="User logo"
            className="w-full h-full object-cover"
          />

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
            <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
            <input type="file" className="absolute top-0 right-0 w-full h-full opacity-0" />
          </div>
        </div>

        <h3>Tran Quoc Khanh</h3>

        <h6 className="text-[14px] font-[500]">khanh@gmail.com</h6>

      </div>

      <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
        <li className="w-full">
          <NavLink to={'/my-account'} exact={true} activeClassName="isActive" >
            <Button className="w-full !capitalize !justify-start !px-5 !py-2 !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <FaRegUser className="text-[17px]" /> User Profile
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to={'/my-list'} exact={true} activeClassName="isActive" >
            <Button className="w-full !capitalize !justify-start !px-5 !py-2 !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <FaHeart className="text-[17px]" /> My List
            </Button>
          </NavLink>
        </li>

        <li className="w-full">
          <NavLink to={'/my-orders'} exact={true} activeClassName="isActive" >
            <Button className="w-full !capitalize !justify-start !px-5 !py-2 !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
              <BsBagCheckFill className="text-[17px]" /> My Orders
            </Button>
          </NavLink>
        </li>
        
        <li className="w-full">
          <Button className="w-full !capitalize !justify-start !px-5 !py-2 !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
            <IoExitOutline className="text-[18px]" /> Logout
          </Button>
        </li>

      </ul>
    </div>
  )
}
export default AccountSidebar