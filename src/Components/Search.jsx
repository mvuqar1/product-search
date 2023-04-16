import React, { useEffect, useState } from 'react'

export default function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("")
    // const handlerKey = (e) => {
    //     if (e.key ==="Enter") {
    //         handlerSubmit()
    //     }
    // }

    useEffect(() => {
        cb(value)
    }, [value])
    // const handlerSubmit = () => {
    //     console.log('inside handleSUBMIT: ', value)
    //     cb(value);
    // }

    return (
        <div className='search-container'>

            <input
            className='search'
                id='search-field'
                type="search"
                placeholder='search'
                onChange={(e) => setValue(e.target.value)}
                value={value}>
            </input>

        </div>
    )
}
