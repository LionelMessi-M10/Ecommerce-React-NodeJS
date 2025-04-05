import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

const Navigation = () => {
  const [isOpenCategotyPanel, setIsOpenCategoryPanel] = React.useState(false);

  const handleCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-8">
          <div className="col1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full !font-bold"
              onClick={handleCategoryPanel}
            >
              <HiOutlineMenuAlt1 className="text-[18px]" />
              Shop By Categories
              <FaAngleDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col2 w-[65%]">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link to={"/"} className="link transition text-[14px]">
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Fashions
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Electronic
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Footwears
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold">
                    Weelness
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col3 w-[15%] flex items-center justify-end gap-5">
            <p className="flex items-center gap-3 text-[14px] font-[500]">
              <GoRocket className="text-[20px]" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCategotyPanel={isOpenCategotyPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;
