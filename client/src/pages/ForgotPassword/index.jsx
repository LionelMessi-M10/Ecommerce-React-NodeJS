import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const ForgotPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  return (
    <section className='section py-10'>
      <div className='container'>
        <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
          <h3 className='text-center text-[18px] text-black'>Forgot Password</h3>

          <form className='w-full mt-5 relative'>
            <div className='form-group w-full mb-5'>
              <TextField
                type={isShowPassword === true ? 'text' : 'password'}
                id='password'
                label='Password *'
                variant='outlined'
                className='w-full'
                name='password'
              />
              <Button
                className='!absolute !top-3 right-[10px] !w-[35px] !h-[35px] !min-w-[35px] !text-black !rounded-full opacity-75'
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <IoMdEye className='text-[20px]' />
                ) : (
                  <IoMdEyeOff className='text-[20px]' />
                )}
              </Button>
            </div>
            <div className='form-group w-full mb-5 relative'>
              <TextField
                type={isShowPassword2 === true ? 'text' : 'password'}
                id='confirm_password'
                name='confirmPassword'
                label='Confirm password *'
                variant='outlined'
                className='w-full'
              />
              <Button
                className='!absolute !top-3 right-[10px] !w-[35px] !h-[35px] !min-w-[35px] !text-black !rounded-full opacity-75'
                onClick={() => setIsShowPassword2(!isShowPassword2)}
              >
                {isShowPassword2 ? (
                  <IoMdEye className='text-[20px]' />
                ) : (
                  <IoMdEyeOff className='text-[20px]' />
                )}
              </Button>
            </div>

            <div className='flex items-center w-full mt-3 mb-3'>
              <Button className='btn-org btn-lg w-full'>Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ForgotPassword;
