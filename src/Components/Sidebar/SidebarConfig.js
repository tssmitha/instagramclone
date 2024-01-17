import { AiFillCompass, AiFillPlusCircle, AiOutlineCompass, AiOutlineHome, AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { RiVideoFill } from "react-icons/ri";
import { RiVideoLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const menu = [
    { title: "Home", icon: <AiOutlineHome className="text-2xl mr-5" />, activeIcon: <AiFillHome /> },
    {title:"Search", icon:<AiOutlineSearch className="text-2xl mr-5" />,activeIcon:<AiOutlineSearch />},
    {title:"Explore", icon:<AiOutlineCompass className="text-2xl mr-5" />,activeIcon:<AiFillCompass />},
    {title:"Reels", icon:<RiVideoLine className="text-2xl mr-5" />,activeIcon:<RiVideoFill />},
    {title:"Message", icon:<AiOutlineMessage className="text-2xl mr-5" />,activeIcon:<AiFillMessage />},
    {title:"Notification", icon:<AiOutlineHeart className="text-2xl mr-5" />,activeIcon:<AiFillHeart />},
    {title:"Create", icon:<AiOutlinePlusCircle className="text-2xl mr-5" />,activeIcon:<AiFillPlusCircle />},
    {title:"Profile", icon:<CgProfile className="text-2xl mr-5" />,activeIcon:<CgProfile />}
]