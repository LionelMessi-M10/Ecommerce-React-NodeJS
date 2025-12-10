import Button from '@mui/material/Button';
import { useState } from 'react';
import OtpBox from '../../components/OtpBox';

const Vertify = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const vertifyOTP = (e) => {
    e.preventDefault();
    alert(otp);
  }

  return (
    <section className='section py-10'>
      <div className='container'>
        <div className='card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10'>
          <div className='text-center flex items-center justify-center'>
            <img src='/vertify2.png' alt='Icon security' width={80} />
          </div>
          <h3 className='text-center text-[18px] text-black mt-4 mb-1'>Vertify OTP</h3>

          <p className='text-center mb-4'>
            OPT send to <span className='text-primary font-bold'>khanh@gmail.com</span>
          </p>

          <form onSubmit={vertifyOTP}>
            <OtpBox length={6} onChange={handleOtpChange} />

            <div className='flex items-center justify-center mt-5 px-3'>
              <Button type='submit' className='w-full btn-org btn-lg'>Vertify OTP</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Vertify;
