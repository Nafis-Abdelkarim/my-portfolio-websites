import React from "react";
import MyImg from '../assets/my-pic-with-3D-icons.jpg'


const Home = ()=>{

    const handleDownloadMyCv = () => {
        const fileUrl = "my-protofolio-website/src/assets/Nefis Abdelkrim junior Front-End developer cv 2023.pdf";
        window.location.href = fileUrl;
    }

    return(
        <div className="w-full flex flex-col max-w-[1240px] text-center items-center md:flex-row justify-between mx-auto text-left items-start">
            <div className="my-6">
                <h4 className="text-white text-xl mb-6 md:text-3xl md:text-left">Hey there! my name is</h4>
                <h2 className="text-white text-4xl font-bold my-1 md:text-6xl md:text-left">Nefis <span className="text-[#facd00]">Abdelkrim</span></h2>
                <h2 className="text-[#facd00] text-3xl font-bold my-1 md:text-5xl md:text-left">Front-End <span className="text-white">Developer</span></h2>
                <div className="mx-2">
                    <h4 className="text-white font-bold text-xl mb-6 md:text-3xl">Get my <span className="text-[#facd00]">CV !</span></h4>
                    <a href="#" className="bg-[#facd00] px-8 py-3 rounded-full hover:bg-black hover:text-[#facd00] hover:border-2 border-yellow-500 hover:cursor-pointer mx-2" onClick={handleDownloadMyCv}>Download</a>
                </div>
            </div>
            <div>
                <img className="w-[400px] md:w-[600px]" src={MyImg} alt="" />
            </div>
        </div>
    )
}

export default Home