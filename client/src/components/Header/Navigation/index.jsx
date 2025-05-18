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
      <nav>
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
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link to={"/"} className="link transition text-[14px]">
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
                    Fashions
                  </Button>
                </Link>

                <div className="submenu absolute !top-[120%] !left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                          Men
                        </Button>
                      </Link>

                      <div className="submenu absolute !top-[0%] !left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                                Men
                              </Button>
                            </Link>
                          </li>

                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                                Kids
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                                Girls
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                                Boys
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-black w-full !text-left !justify-start !rounded-none !font-bold">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
                    Electronic
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
                    Footwears
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="!text-black !capitalize link transition !font-bold !py-4">
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
