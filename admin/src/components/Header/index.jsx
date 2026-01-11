import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { FaRegBell } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMenu2Line } from 'react-icons/ri';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);

  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };

  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };

  return (
    <header className='w-full h-[auto] py-2 pl-80 pr-7 bg-[#fff] shadow-md flex items-center justify-between'>
      <div className='part1'>
        <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]'>
          <RiMenu2Line className='text-[18px] text-[rgba(0,0,0,0.8)]' />
        </Button>
      </div>

      <div className='part2 w-[40%] flex items-center justify-end gap-5'>
        <IconButton aria-label='cart'>
          <StyledBadge badgeContent={4} color='secondary'>
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        <div className='relative'>
          <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
            <img
              className='w-full h-full object-cover'
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
              alt='profile'
              onClick={handleClickMyAcc}
            />
          </div>

          <Menu
            anchorEl={anchorMyAcc}
            id='account-menu'
            open={openMyAcc}
            onClose={handleCloseMyAcc}
            onClick={handleCloseMyAcc}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleCloseMyAcc}>
              <div className='flex items-center justify-center gap-3'>
                <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                  <img
                    className='w-full h-full object-cover'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                    alt='profile'
                    onClick={handleClickMyAcc}
                  />
                </div>

                <div className='info'>
                  <p className='text-[14px] font-semibold text-[rgba(0,0,0,0.8)]'>John Doe</p>
                  <p className='text-[12px] text-[rgba(0,0,0,0.6)]'>
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </MenuItem>
            <Divider />

            <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
              <FaRegUser className='text-[16px]' />
              <span className='text-[14px]'>Profile</span>
            </MenuItem>
            <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
              <IoSettingsOutline className='text-[16px]' />
              <span className='text-[14px]'>Settings</span>
            </MenuItem>
            <MenuItem onClick={handleCloseMyAcc} className='flex items-center gap-3'>
              <IoMdLogOut className='text-[18px]' />
              <span className='text-[14px]'>Logout</span>
            </MenuItem>

          </Menu>
        </div>
      </div>
    </header>
  );
};
export default Header;
