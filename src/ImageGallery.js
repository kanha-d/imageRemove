import React from "react";
import ImageComp from "./ImageComp";


//Image Gallery Component to render the 
//all images which is passed in Links Props from the App.js
const ImageGallery = ({links}) => {
    return(
        <>
        {
            links.map((item,index) =>  <ImageComp key={index}  url={item}/> )
        }
        </>
    )
}

export default ImageGallery;