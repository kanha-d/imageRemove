import React from "react";


// funciton to remove image by access there 
//parent Element & Remove it from the HTML source 
function removeImg(e) {
    e.target.parentElement.remove()
}


const ImageComp = ({url}) => {
    return(
        <>
		<div className="image">
                <img src={`${url}`}/>
                <button onClick={(e)=>{removeImg(e)}}>X</button>
        </div>							
        </>
    )
}

export default ImageComp;