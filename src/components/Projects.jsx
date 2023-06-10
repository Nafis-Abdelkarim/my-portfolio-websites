import React from "react";
import Button from "./Button";
import MyImg from '../assets/my-pic-with-3D-icons.jpg'
import DataFinance from '../assets/datafinance.png'

const Projects = ()=>{

    return(
        <div className="bg-black py-64 text-xl text-center">
            <h2 className="text-[#facd00] text-4xl font-bold md:text-6xl">My Projects</h2>
            <div className="flex flex-col mt-32 md:flex-row justify-between mx-28">
                <div className="text-white px-4 py-6 bg-[#191919] rounded-3xl mx-2">
                    <div className="border-2 border-[#facd00] rounded-lg p-4 flex justify-center">
                        <img className=" w-[200px] md:w-[300px]" src={MyImg} alt="" />
                    </div>
                    <h1 className="text-3xl text-[#facd00] font-bold mt-4">Project Name</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem hic vitae repellendus, reiciendis est!</p>
                    <Button buttonText="See More"/>
                </div>
                <div className="text-white px-4 py-6 bg-[#191919] rounded-3xl mx-2">
                    <div className="border-2 border-[#facd00] rounded-lg p-4 flex justify-center">
                        <img className=" w-[200px] md:w-[300px]" src={MyImg} alt="" />
                    </div>
                    <h1 className="text-3xl text-[#facd00] font-bold mt-4">Data Finance Website</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem hic vitae repellendus, reiciendis est!</p>
                    <Button buttonText="See More"/>
                </div>
                <div className="text-white px-4 py-6 bg-[#191919] rounded-3xl mx-2">
                    <div className="border-2 border-[#facd00] rounded-lg p-4 flex justify-center">
                        <img className=" w-[200px] md:w-[300px]" src={MyImg} alt="" />
                    </div>
                    <h1 className="text-3xl text-[#facd00] font-bold mt-4">Project Name</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem hic vitae repellendus, reiciendis est!</p>
                    <Button buttonText="See More"/>
                </div>
            </div>
        </div>
    )
}

export default Projects