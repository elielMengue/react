import { CiBookmarkPlus } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineComment } from "react-icons/md";
import { useState } from "react";
import logo from '../assets/images/télécharger (1).jpg';
import image from '../assets/images/logo.png';
import { FaArrowRight } from "react-icons/fa6";


export default function App01 () {

    const [like, setLike] = useState(false);
    return (
        <div className="bg-blue-200 w-screen h-screen flex items-center place-content-center">
            <div className="bg-white rounded shadow w-44 h-72 flex flex-col">
            <div className=" containter h-8 flex mb-1.5">
                <img src={image}  className="w-10 rounded-2xl h-10"/>
                <div>
                <h2 className="text-sm/6 font-normal -mx-2">@vitalityhub</h2>
                <h3 className="text-xs/snug text-gray-500 font-light -mt-2 -mx-2">Colombia, Indonesia</h3>
                </div>
              
            </div>
            <div className="bg-yellow-100 flex-1">
             <FaArrowRight  className="mx-3 mt-3"/>
                <img src={logo} />
                <p className="text-blue-600 text-center font-bold">The importance of quality sleep</p>
            </div>
            <div className="h-8 flex items-center px-2">
                <div className=" flex text-left w-1/2 space-x-2">
                {
                    like ? <IoMdHeart className="text-red-500" onClick={() => setLike(!like)} /> : <CiHeart onClick={() => setLike(!like)} />
                }
                <MdOutlineComment />
                <FiSend />

                </div>
                <div className=" flex place-content-end text-right w-1/2 ">
                <CiBookmarkPlus />
                </div>
            </div>

            </div>
         
        </div>
    );
};

