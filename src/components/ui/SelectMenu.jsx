import React from 'react'

function SelectMenu({ id, name, value, onChange, options,defaultOption, iserror, error }) {
    return (
        <>
            <select
                id={id}
                className=' bg-gray-700 focus:outline-0 rounded-2xl p-3 w-full'
                name={name}
                value={value}
                onChange={onChange}
            >
                {defaultOption &&  <option value="">{defaultOption}</option> }
               {options.map((o,i) => {
                    return <option key={i} value={o}>{o}</option>
               })}
            </select>

            {iserror ? <p className='text-error text-end mx-3'>{error}</p> : ""}

        </>
    )
}

export default SelectMenu
