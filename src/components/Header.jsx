import React from 'react'

<<<<<<< HEAD
const Header = () => {
    return (
        <div>
            
=======
const Header = ({category, title}) => {
    return (
        <div className="mb-10">
            <p className="text-fray-400">
                {category}
            </p>
            <p className="text-3xl font-extrabold tracking-tight text-slate-900">{title}</p>
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
        </div>
    )
}

export default Header
