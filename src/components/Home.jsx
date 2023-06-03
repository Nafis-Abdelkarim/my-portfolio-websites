import React from "react";
import MyImg from '../assets/my-pic-with-3D-icons.jpg'


const Home = ()=>{

    return(
        <div className="w-full flex flex-col max-w-[1240px] text-center items-center md:flex-row justify-between mx-auto text-left items-start">
            <div>
                <h4 className="text-white text-xl mb-6 md:text-3xl md:text-left">Hey there! my name is</h4>
                <h2 className="text-white text-4xl font-bold my-1 md:text-6xl md:text-left">Nefis <span className="text-[#facd00]">Abdelkrim</span></h2>
                <h2 className="text-[#facd00] text-3xl font-bold my-1 md:text-5xl md:text-left">Front-End <span className="text-white">Developer</span></h2>
                <div className="bg-white border-[#facd00] py-0.5 rounded-3xl mt-10 md: mt-2">
                    <input className="outline-none rounded-full text-lg md:mx-0" type="email" placeholder="Put your email here"/>
                    <button className="bg-[#facd00] py-2 px-8 rounded-full drop-shadow-md md:ml-20">Send</button>
                </div>
            </div>
            <div>
                <img className="w-[400px] md:w-[600px]" src={MyImg} alt="" />
            </div>
        </div>
    )
}

export default Home