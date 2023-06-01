import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'
function Navbar() {

    const [nav, setNav] = useState(false)

    const handelClick = ()=>{
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-[#FACD00] bg-[#191919]">
            <h1 className="ml-5 w-full text-3xl font-bold">Nefis <span className="text-white">Abdelkrim</span></h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handelClick} className="cursor-pointer block mr-6 md:hidden">
                {!nav ? <FontAwesomeIcon icon={faBars} style={{color: "#facd00",}} size="2xl" /> : <FontAwesomeIcon icon={faX} style={{color: "#fadc00",}} size="2xl" />}
            </div>
            <div className={!nav ? "fixed left-[-100%]" : "fixed left-0 top-0 w-[70%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"}>
            <h1 className="w-full text-3xl font-bold text-[#FACD00] m-4">Nefis <span className="text-white">Abdelkrim</span></h1>
                <ul className="mx-auto">
                    <li className="px-44 py-4 cursor-pointer hover:bg-[#FADC00] hover:text-black border-b border-gray-600">Home</li>
                    <li className="px-44 py-4 cursor-pointer hover:bg-[#FADC00] hover:text-black border-b border-gray-600">About</li>
                    <li className="px-44 py-4 cursor-pointer hover:bg-[#FADC00] hover:text-black border-b border-gray-600">Projects</li>
                    <li className="px-44 py-4 cursor-pointer hover:bg-[#FADC00] hover:text-black ">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar