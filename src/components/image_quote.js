import React from "react";

const ImageQuote = ({title, image, html, author}) => {
    return (
        <div>
            <div>
                <img src={image}/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }}>                
            </div>            
            {author}            
        </div>
    )
}

export default ImageQuote;