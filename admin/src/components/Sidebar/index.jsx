import Button from "@mui/material/Button";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiProductHuntLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [subMenuIndex, setSubMenuIndex] = useState(null);

  const isOpenSubMenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  }

  return (
    <>
      <div className="sidebar fixed top-0 left-0 bg-[#fff] w-[16%] h-full border-r border-[rgba(0, 0, 0, 0.1)] py-2 px-4">
        <div className="py-2 w-full">
          <Link to={'/'}>
            <img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" alt="Logo" className="w-[170px] min-w-[200px]" />
          </Link>
        </div>

        <ul className="mt-4">
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[#000] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]" component={Link} to={'/'}>
              <RxDashboard className="text-[18px]" /> <span>Dashboard</span>
            </Button>
          </li>
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[#000] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]" component={Link} to={'/'} onClick={() => isOpenSubMenu(1)}>
              <FaRegImage className="text-[18px]" /> <span>Home Slider</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                {subMenuIndex === 1 ? <FaAngleDown /> : <FaAngleRight />}
              </span>
            </Button>
            {/* Submenu for Home Slider */}
            <Collapse isOpened={subMenuIndex === 1}>
              <ul className="pl-6">
                <li>
                  <Button className="w-full !capitalize !justify-start flex gap-3 text-[13px] !text-[#000] !font-[500] items-center !py-1 hover:!bg-[#f9f9f9]" component={Link} to={'/add-slider'}>
                    <span className="block w-[5px] h-[5px] rounded-full bg-[#f1f1f1]"></span>
                    <span>Add Home Banner Slider</span>
                  </Button>
                </li>
                <li>
                  <Button className="w-full !capitalize !justify-start flex gap-3 text-[13px] !text-[#000] !font-[500] items-center !py-1 hover:!bg-[#f9f9f9]" component={Link} to={'/manage-slider'}>
                    <span className="block w-[5px] h-[5px] rounded-full bg-[#f1f1f1]"></span>
                    <span>Manage Slider</span>
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[#000] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]" component={Link} to={'/'}>
              <FiUsers className="text-[20px]" /> <span>Users</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown /></span>
            </Button>
          </li>
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[#000] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]" component={Link} to={'/'}>
              <TbCategory className="text-[20px]" /> <span>Category</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown /></span>
            </Button>
          </li>
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[#000] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]" component={Link} to={'/'}>
              <RiProductHuntLine className="text-[20px]" /> <span>Products</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown /></span>
            </Button>
          </li>
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[#000] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]" component={Link} to={'/'}>
              <IoBagCheckOutline className="text-[20px]" /> <span>Orders</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown /></span>
            </Button>
          </li>
          <li>
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[#000] !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]" component={Link} to={'/'}>
              <IoMdLogOut className="text-[20px]" /> <span>Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Sidebar