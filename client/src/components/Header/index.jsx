import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { IoIosGitCompare, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Navigation from './Navigation';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className='relative'>
      {/* Thanh tiêu đề cho web, nằm trên navbar */}
      <div className='top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='col1 w-[50%]'>
              <p className='text-[12px] font-[500]'>
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className='col2 flex items-center justify-end'>
              <ul className='flex items-center gap-3'>
                <li className='list-none'>
                  <Link to='/help-center' className='text-[13px] link font-[500] transition'>
                    Help Center
                  </Link>
                </li>

                <li className='list-none'>
                  <Link to='/order-tracking' className='text-[13px] link font-[500] transition'>
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Thanh navbar điều hướng trang web */}
      <div className='header py-2 lg:py-4 border-b-[1px] border-gray-250'>
        <div className='container flex items-center justify-between'>
          {/* Logo */}
          <div className='col1 w-[25%]'>
            <Link to={'/'}>
              <img src='/logo.jpg' alt='Logo' />
            </Link>
          </div>

          {/* Thanh search */}
          <div className='col2 w-[45%]'>
            <Search />
          </div>

          {/* Điều hướng login/register, cart, ... */}
          <div className='col3 w-[30%] flex items-center'>
            <ul className='flex items-center justify-end gap-3 w-full'>
              <li className='list-none'>
                <Link to='/login' className='link transition text-[15px] font-[500] pl-7'>
                  Login
                </Link>{' '}
                |&nbsp;
                <Link to='/register' className='link transition text-[15px] font-[500]'>
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title='Compare' placement='top'>
                  <IconButton aria-label='compare'>
                    <StyledBadge badgeContent={4} color='secondary'>
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title='Wishlist' placement='top'>
                  <IconButton aria-label='wishlist'>
                    <StyledBadge badgeContent={4} color='secondary'>
                      <IoMdHeartEmpty />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title='Cart' placement='top'>
                  <IconButton aria-label='cart'>
                    <StyledBadge badgeContent={4} color='secondary'>
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Thanh điều hướng chính */}
      <Navigation />
    </header>
  );
};

export default Header;
