import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import CategoryCollapse from '../../CategoryCollapse';
import './style.css';

const CategoryPanel = ({ isOpenCategotyPanel, setIsOpenCategoryPanel }) => {
  
  const toggleDrawer = (newOpen) => () => {
    setIsOpenCategoryPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' className='categoryPanel'>
      <div className='p-3'>
        <Link to={'/'}>
          <img src='/logo.jpg' alt='Logo' className='w-[170px]' />
        </Link>
      </div>
      <div className='flex items-center justify-between p-3'>
        <h3 className='text-[16px] font-[500]'>Shop By Categories</h3>
        <IoMdClose onClick={toggleDrawer(false)} />
      </div>
      <Divider />

      <CategoryCollapse />
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
