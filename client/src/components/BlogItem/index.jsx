import { IoIosArrowForward, IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';

const BlogItem = () => {
  return (
    <div className="blogItem group"> 
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img src="https://serviceapi.spicezgold.com/download/1760239113701_NewProject(4).jpg" alt="Blog 1" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1">
          <IoMdTime className="text-[16px]" /> 25 Jan 2024
        </span>
      </div>

      <div className="blogInfo py-4">
        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">The Ultimate Guide to Choosing the Perfect Jewelry for Every Occasion</Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link className="link font-[500] text-[14px] flex items-center gap-1">Read more <IoIosArrowForward /></Link>
      </div>
    </div>
  )
}
export default BlogItem