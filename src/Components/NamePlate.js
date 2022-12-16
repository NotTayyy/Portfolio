import React from 'react'

export default function NamePlate({ Names }) {

    return (
    <>
        { Names.map(function(char, index){
            let style = {"animationDelay": (0.2 + index / 25) + "s"};
            return <span
                aria-hidden="true"
                key={index}
                style={style}>
                {char}
            </span>
        })}
    </>
    )
}
