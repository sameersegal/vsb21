import React from "react";

const ImageQuote2 = ({title, image, col1, col2, author, date}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <img src={image}/>
            </div>
            <div>
                {col1.map((row)=>{
                    return (
                        <span>
                            {row}
                            <br/>
                        </span>
                    )
                })}
            </div>
            <div>
                {col2.map((row)=>{
                    return (
                        <span>
                            {row}
                            <br/>
                        </span>
                    )
                })}
            </div>
            {author}
            <br />
            {date}
        </div>
    )
}

export default ImageQuote2;