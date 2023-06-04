import React from "react";
import Button from "./Button";

const AboutMe = ()=>{

    return(
        <div className="py-72 text-lg text-center">
            <h2 className="text-[#facd00] text-4xl font-bold text-center md:text-6xl">About Me</h2>
            <p className="text-white text-xl mt-10 mb-8 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iusto sit officia, reprehenderit doloribus omnis ducimus adipisci quod enim, perspiciatis, praesentium necessitatibus ullam molestiae consequatur animi fuga voluptatem voluptas recusandae.</p>
            <Button buttonText="Connect with me"/>
        </div>
    )
}

export default AboutMe