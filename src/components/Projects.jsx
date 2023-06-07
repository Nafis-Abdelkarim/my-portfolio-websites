import React from "react";
import Button from "./Button";

const Projects = ()=>{

    return(
        <div className="bg-black py-64 text-xl text-center">
            <h2 className="text-[#facd00] text-4xl font-bold md:text-6xl">My Projects</h2>
            <div className="flex flex-col mt-32 md:flex-row justify-between mx-28">
                <div className="text-white px-10 bg-[#191919] rounded-3xl">
                    <h1 className="text-2xl">Project Name</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem hic vitae repellendus, reiciendis est!</p>
                    <Button buttonText="See More"/>
                </div>
                <div className="text-white px-4 bg-[#191919] rounded-3xl">
                    <h1 className="text-2xl">Project Name</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem hic vitae repellendus, reiciendis est!</p>
                    <Button buttonText="See More"/>
                </div>
                <div className="text-white px-4 bg-[#191919] rounded-3xl">
                    <h1 className="text-2xl">Project Name</h1>
                    <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum exercitationem hic vitae repellendus, reiciendis est!</p>
                    <Button buttonText="See More"/>
                </div>
            </div>
        </div>
    )
}

export default Projects