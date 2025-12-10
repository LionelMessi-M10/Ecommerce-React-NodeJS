import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';

const Login = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    email: '',
    password: ''
  });

  const context = useContext(MyContext);

  const history = useNavigate();

  const forgotPassword = () => {
    if(formFields.email !== "") {
      history("/vertify");
      context.openAlertBox("success", "OTP Send");
    }
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <h3 className="text-center text-[18px] text-black">Login to your account</h3>

          <form className='w-full mt-5'>
            <div className='form-group w-full mb-5'>
              <TextField
                type='email' id="email" label="Email Id *" variant="outlined" className='w-full' name='email'
                onChange={(e) => setFormFields(e.target.value)}
              />
            </div>
            <div className='form-group w-full mb-5 relative'>
              <TextField type={isShowPassword === true ? 'text' : 'password'} id="password" name='password' label="Password *" variant="outlined" className='w-full' />
              <Button
                className='!absolute !top-3 right-[10px] !w-[35px] !h-[35px] !min-w-[35px] !text-black !rounded-full opacity-75'
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {
                  isShowPassword ? <IoMdEye className='text-[20px]' /> : <IoMdEyeOff className='text-[20px]' />
                }
              </Button>
            </div>

            <a className='link cursor-pointer text-[14px] font-[600]' onClick={forgotPassword}>
              Forgot password ?
            </a>

            <div className='flex items-center w-full mt-3 mb-3'>
              <Button className='btn-org btn-lg w-full'>Login</Button>
            </div>

            <p className='text-center'>
              Not Registered ? <Link to={'/register'} className='link text-[14px] font-[600] text-primary'>Sign Up</Link>
              </p>
            <p className='text-center font-[500]'>Or continue with social account</p>

            <Button
              className='flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black !font-[600]'
            >
              <FcGoogle className='text-[30px]' /> Login with Google
            </Button>

          </form>
        </div>
      </div>
    </section>
  )
}
export default Login