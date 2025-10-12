import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./style.css";

const CategoryPanel = ({ isOpenCategotyPanel, setIsOpenCategoryPanel }) => {
  const [submenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubMenuIndex] = useState(null);

  const toggleDrawer = (newOpen) => () => {
    setIsOpenCategoryPanel(newOpen);
    if (!newOpen) {
      setSubMenuIndex(null);
      setInnerSubMenuIndex(null);
    }
  };

  const openSubMenu = (index) => {
    setSubMenuIndex(submenuIndex === index ? null : index);
  };

  const openInnerSubMenu = (index) => {
    setInnerSubMenuIndex(innerSubmenuIndex === index ? null : index);
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

      <div className="scroll">
        <ul className="w-full">
          {/* Menu */}
          <li className="list-none flex items-center justify-between relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize">
                Fashions
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            ) : (
              <FiPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(0)}
              />
            )}

            {/* Submenu 1 */}
            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"}>
                    <Button className="!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

                  {/* Submenu 2 */}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-4">
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
        
        {/* Menu 2 */}
        <ul className="w-full">
          <li className="list-none flex items-center justify-between relative flex-col">
            <Link to={"/"} className="w-full">
              <Button className="!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize">
                Fashions
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            ) : (
              <FiPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubMenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to={"/"}>
                    <Button className="!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize">
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 1 ? (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-4">
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
