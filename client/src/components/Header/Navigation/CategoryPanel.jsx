import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import Divider from "@mui/material/Divider";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./style.css";

const CategoryPanel = ({ isOpenCategotyPanel, setIsOpenCategoryPanel }) => {
  const [submenuIndex, setSubMenuIndex] = React.useState(1);
  const [innerSubmenuIndex, setInnerSubMenuIndex] = React.useState(1);

  const toggleDrawer = (newOpen) => () => {
    setIsOpenCategoryPanel(newOpen);
  };

  const openSubMenu = () => {
    setSubMenuIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const openInnerSubMenu = () => {
    setInnerSubMenuIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <div className="p-3">
        <Link to={"/"}>
          <img src="/logo.jpg" alt="Logo" className="w-[170px]" />
        </Link>
      </div>
      <div className="flex items-center justify-between p-3">
        <h3 className="text-[16px] font-[500]">Shop By Categories</h3>
        <IoMdClose onClick={toggleDrawer(false)} />
      </div>
      <Divider />

      <div class="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center justify-between relative">
            <Link to={"/"} className="w-full">
              <Button className="!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize">
                Fashions
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={openSubMenu}
              />
            ) : (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={openSubMenu}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu absolute top-[100%] left-[0%] w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"}>
                    <Button className="!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 1 ? (
                    <FiPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={openInnerSubMenu}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={openInnerSubMenu}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu absolute top-[100%] left-[0%] w-full pl-4">
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]"
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]"
                        >
                          Casual Shirts
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]"
                        >
                          Blazers & Coats
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link
                          to={"/"}
                          className="link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]"
                        >
                          Jeans
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpenCategotyPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
