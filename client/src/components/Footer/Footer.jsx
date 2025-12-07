import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Drawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useContext } from 'react';
import { BiSupport } from 'react-icons/bi';
import { BsWallet2 } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";
import { IoChatboxOutline, IoCloseSharp } from 'react-icons/io5';
import { LiaGiftSolid, LiaShippingFastSolid } from 'react-icons/lia';
import { PiKeyReturnLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import CartPanel from '../CartPanel';

const Footer = () => {

  const context = useContext(MyContext)

  return (
    <>
      <footer className='py-6 bg-[#fafafa]'>
        <div className='container'>
          <div className='flex items-center justify-center gap-2 py-8'>
            <div className='col flex items-center justify-center flex-col group w-[15%]'>
              <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600] mt-3'>Free Shipping</h3>
              <p className='text-[12px] font-[500]'>For all Orders Over $100</p>
            </div>

            <div className='col flex items-center justify-center flex-col group w-[15%]'>
              <PiKeyReturnLight className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600] mt-3'>30 Days Returns</h3>
              <p className='text-[12px] font-[500]'>For an Exchange Product</p>
            </div>

            <div className='col flex items-center justify-center flex-col group w-[15%]'>
              <BsWallet2 className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600] mt-3'>Secured Payment</h3>
              <p className='text-[12px] font-[500]'>Payment Cards Accepted</p>
            </div>

            <div className='col flex items-center justify-center flex-col group w-[15%]'>
              <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600] mt-3'>Special Gifts</h3>
              <p className='text-[12px] font-[500]'>Our First Product Order</p>
            </div>

            <div className='col flex items-center justify-center flex-col group w-[15%]'>
              <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600] mt-3'>Support 24/7</h3>
              <p className='text-[12px] font-[500]'>Contact us Anytime</p>
            </div>
          </div>

          <br />
          <hr />

          <div className='footer flex items-center py-8'>
            <div className='part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]'>
              <h2 className='text-[18px] font-[600] mb-4'>Contact us</h2>
              <p className='text-[13px] font-[400] pb-4'>
                Classyshop - Mega Super Store 507-Union Trade France
              </p>

              <Link className='link text-[13px]' to='mailto:info@classyshop.com'>
                info@classyshop.com
              </Link>

              <span className='text-[22px] font-[600] block w-full mt-3 text-primary'>
                +123 456 7890
              </span>

              <div className='flex items-center gap-2'>
                <IoChatboxOutline className='text-[40px] text-primary' />
                <span className='text-[16px] font-[600]'>
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className='part2 w-[40%] flex pl-8'>
              <div className='part2_col1 w-[50%]'>
                <h2 className='text-[18px] font-[600] mb-4'>Product</h2>

                <ul className='list'>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Prices drop
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      New Products
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Best Sales
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Contact Us
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Sitemap
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Store
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='part2_col2 w-[50%]'>
                <h2 className='text-[18px] font-[600] mb-4'>Our Company</h2>

                <ul className='list'>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Delivery
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Legal Notice
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Terms And Conditions Of Use
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      About Us
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Secure Payment
                    </Link>
                  </li>
                  <li className='list-none text-[14px] w-full mb-2'>
                    <Link to='/' className='link'>
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='part3 w-[35%] flex flex-col pl-8 pr-8'>
              <h2 className='text-[18px] font-[600] mb-4'>Subscribe To Newsletter</h2>
              <p className='text-[13px]'>
                Subscribe to our latest newsletter to get news about special discounts.
              </p>

              <form className='mt-5'>
                <input
                  type='text'
                  className='w-full h-[45px] border outline-none pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0, 0, 0, 0.3)]'
                  placeholder='Your Email Address'
                />

                <Button className='btn-org'>SUBSCRIBE</Button>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label='I agree to the terms and conditions and the privacy policy'
                  />
                </FormGroup>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className='bottomStrip border-t border-[rgba(0,0,0,0.1)] py-4 bg-white'>
        <div className='container flex items-center justify-between'>
          <ul className='flex items-center gap-2'>
            <li className='list-none'>
              <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0, 0, 0, 0.1)] flex items-center justify-center  group hover:bg-primary transition-all duration-300'>
                <FaFacebookF className='text-[15px] group-hover:text-white' />
              </Link>
            </li>

            <li className='list-none'>
              <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0, 0, 0, 0.1)] flex items-center justify-center  group hover:bg-primary transition-all duration-300'>
                <FaYoutube className='text-[15px] group-hover:text-white' />
              </Link>
            </li>

            <li className='list-none'>
              <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0, 0, 0, 0.1)] flex items-center justify-center  group hover:bg-primary transition-all duration-300'>
                <FaInstagram className='text-[15px] group-hover:text-white' />
              </Link>
            </li>

            <li className='list-none'>
              <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0, 0, 0, 0.1)] flex items-center justify-center  group hover:bg-primary transition-all duration-300'>
                <FaPinterestP className='text-[15px] group-hover:text-white' />
              </Link>
            </li>
          </ul>

          <p className='text-[13px] text-center mb-0'>
            © 2025 - Ecommerce Template
          </p>

          <div className='flex items-center'>
            <img src="/carte_bleue.png" alt="Carte" />
            <img src="/visa.png" alt="Visa" />
            <img src="/master_card.png" alt="MasterCard" />
            <img src="/american_express.png" alt="American express" />
            <img src="/paypal.png" alt="PayPal" />
          </div>
        </div>
      </div>

      {/* Cart panel */}
      <Drawer open={context.openCartPanel} onClose={context.toggleCartPanel(false)} anchor='right' className='cartPanel overflow-hidden'>
        <div className='flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0, 0, 0, 0.1)]'>
          <h4>Shopping Cart (1)</h4>
          <IoCloseSharp className='text-[20px] cursor-pointer' onClick={context.toggleCartPanel(false)} />
        </div>

        <CartPanel />
      </Drawer>
    </>
  );
};
export default Footer;
