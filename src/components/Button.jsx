import React from 'react'

<<<<<<< HEAD
const Button = () => {
    return (
        <div>
            
        </div>
=======
const Button = ({bgColor, color, size, text, borderRadius}) => {
    return (
        <button
        type="buttom"
        style={{backgroundColor: bgColor, color, borderRadius}}
        className={`text-${size} p-3
        hover:drop-shadow-xl`}
        >
            {text}
        </button>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
    )
}

export default Button
