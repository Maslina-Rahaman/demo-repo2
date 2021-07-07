import React from 'react'

const Input = ({name,label,autoFocus,handleChange,type}) => {
    return (
        <>
        <div className="field">
            <label>{label}</label>
            <input 
                name={name}
                onChange={handleChange}
                required
                autoFocus={autoFocus}
                type={type}
                    />
        </div>
        </>
       
    )
}

export default Input
