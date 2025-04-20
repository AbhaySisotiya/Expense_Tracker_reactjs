import React from 'react'

function Input({ id, type, name, placeholder, value, onChange, iserror, error }) {
    return (
        <>
            <input
                id={id}
                className=' bg-gray-700 focus:outline-0 rounded-2xl p-3 w-full'
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
            {iserror ? <p className='text-error text-end mx-3'>{error}</p> : ""}

        </>

    )
}

export default Input
