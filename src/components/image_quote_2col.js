import React from "react";

const ImageQuote2 = ({title, image, col1, col2, author, date}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div style={{
                    display: 'flex'
                }}>
                <div style={{
                        flexGrow: 1
                    }}>
                    <img src={image}/>
                </div>
                <div style={{
                        flexGrow: 2
                    }}>
                    {col1.map((row, i)=>{
                        return (
                            <span key={i}>
                                {row}
                                <br/>
                            </span>
                        )
                    })}
                </div>
                <div style={{
                        flexGrow: 2
                    }}>
                    {col2.map((row, i)=>{
                        return (
                            <span key={i}>
                                {row}
                                <br/>
                            </span>
                        )
                    })}
                </div>
            </div>
            {author}
            <br />
            {date}
        </div>
    )
}

export default ImageQuote2;