import React from "react";
import MyImg from '../assets/my-pic-with-3D-icons.jpg'


const Home = ()=>{

    return(
        <div className="w-full flex flex-col max-w-[1240px] text-center items-center md:flex-row justify-between mx-auto text-left items-start">
            <div>
                <h4 className="text-white text-xl mb-6 md:text-3xl">Hey there! my name is</h4>
                <h2 className="text-white text-4xl font-bold my-1 md:text-6xl">Nefis <span className="text-[#facd00]">Abdelkrim</span></h2>
                <h2 className="text-[#facd00] text-3xl font-bold my-1 md:text-5xl">Front-End <span className="text-white">Developer</span></h2>
                <div className="bg-white py-0.5 px-auto rounded-3xl border-[#fadc00] mt-10 outline-yellow-500">
                    <input className="pl-8 py-2 focus:outline-none rounded-full" type="email" placeholder="Put your email here"/>
                    <button className="bg-[#facd00] py-2 px-8 rounded-full drop-shadow-md">Send</button>
                </div>
            </div>
            <div>
                <img className="w-[450px] md:w-[600px]" src={MyImg} alt="" />
            </div>
        </div>
    )
}

export default Home