import { Button } from '@mui/material';
import { useState } from 'react';
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CategoryCollapse = () => {
  const [submenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubMenu = (index) => {
    setSubMenuIndex(submenuIndex === index ? null : index);
  };

  const openInnerSubMenu = (index) => {
    setInnerSubMenuIndex(innerSubmenuIndex === index ? null : index);
  };

  return (
    <>
      <div className='scroll'>
        <ul className='w-full'>
          {/* Menu */}
          <li className='list-none flex items-center justify-between relative flex-col'>
            <Link className='w-full'>
              <Button className='!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize'>
                Fashions
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare
                className='absolute top-[10px] right-[15px] cursor-pointer'
                onClick={() => openSubMenu(0)}
              />
            ) : (
              <FiPlusSquare
                className='absolute top-[10px] right-[15px] cursor-pointer'
                onClick={() => openSubMenu(0)}
              />
            )}

            {/* Submenu 1 */}
            {submenuIndex === 0 && (
              <ul className='submenu w-full pl-3'>
                <li className='list-none relative'>
                  <Link>
                    <Button className='!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize'>
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className='absolute top-[10px] right-[15px] cursor-pointer'
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FiPlusSquare
                      className='absolute top-[10px] right-[15px] cursor-pointer'
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}

                  {/* Submenu 2 */}
                  {innerSubmenuIndex === 0 && (
                    <ul className='inner_submenu w-full pl-4'>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
                        >
                          Casual Shirts
                        </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
                        >
                          Blazers & Coats
                        </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
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
        <ul className='w-full'>
          <li className='list-none flex items-center justify-between relative flex-col'>
            <Link className='w-full'>
              <Button className='!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize'>
                Fashions
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare
                className='absolute top-[10px] right-[15px] cursor-pointer'
                onClick={() => openSubMenu(1)}
              />
            ) : (
              <FiPlusSquare
                className='absolute top-[10px] right-[15px] cursor-pointer'
                onClick={() => openSubMenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className='submenu w-full pl-3'>
                <li className='list-none relative'>
                  <Link>
                    <Button className='!text-left w-full !text-black !px-3 !justify-start !font-bold !capitalize'>
                      Apparel
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 1 ? (
                    <FiMinusSquare
                      className='absolute top-[10px] right-[15px] cursor-pointer'
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    <FiPlusSquare
                      className='absolute top-[10px] right-[15px] cursor-pointer'
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className='inner_submenu w-full pl-4'>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
                        >
                          T-Shirts
                        </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
                        >
                          Casual Shirts
                        </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
                        >
                          Blazers & Coats
                        </Link>
                      </li>
                      <li className='list-none relative mb-1'>
                        <Link
                         
                          className='link transition !text-left w-full !text-black !px-3 !justify-start text-[14px]'
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
    </>
  );
};
export default CategoryCollapse;
