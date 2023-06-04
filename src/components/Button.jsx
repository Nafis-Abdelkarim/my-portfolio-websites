import React from "react";

function Button({buttonText, onClick}){
    return(
        <a href="#" onClick={onClick} className="bg-[#facd00] px-8 py-3 rounded-full hover:bg-black hover:text-[#facd00] hover:border-2 border-yellow-500 hover:cursor-pointer mx-2">
            {buttonText}
        </a>
    )
}

export default Button