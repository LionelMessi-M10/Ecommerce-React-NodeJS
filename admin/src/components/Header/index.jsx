import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import { RiMenu2Line } from 'react-icons/ri';

import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { FaRegBell } from 'react-icons/fa';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 5,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
  return (
    <header className='w-full h-[50px] pl-52 pr-7 bg-[#f1f1f1] flex items-center justify-between'>
      <div className='part1'>
        <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]'>
          <RiMenu2Line className='text-[18px] text-[rgba(0,0,0,0.8)]' />
        </Button>
      </div>

      <div className='part2 w-[40%] flex items-center justify-end gap-3'>
        <IconButton aria-label='cart'>
          <StyledBadge badgeContent={4} color='secondary'>
            <FaRegBell />
          </StyledBadge>
        </IconButton>
      </div>
    </header>
  );
};
export default Header;
