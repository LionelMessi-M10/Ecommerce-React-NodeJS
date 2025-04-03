import React from 'react';
import './style.css';
import Button from '@mui/material/Button';

const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'>
        <input type='text' placeholder='Search for products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]' />
        <Button variant="contained">Hello world</Button>
    </div>
  )
}

export default Search