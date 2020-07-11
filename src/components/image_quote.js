import React from "react";

const ImageQuote = ({title, image, html, author}) => {
    return (
        <div style={{
                display:'flex',
                flexDirection: 'column'
            }}>
            <div style={{
                    display: 'flex',
                    justifyContent: true                    
                }}>
                <div style={{
                    flexGrow: 1,
                    margin: "auto 0"                    
                }}>
                    <img src={image}/>
                </div>
                <div style={{
                    flexGrow: 4,
                    margin: "0 auto"
                }} dangerouslySetInnerHTML={{ __html: html }}>                
                </div>            
            </div>
            <div style={{
                    flexGrow: 1
                }}>
                {author}            
            </div>
        </div>
    )
}

export default ImageQuote;