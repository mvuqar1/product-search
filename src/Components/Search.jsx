import React, { useEffect, useState } from 'react'

export default function Search({ cb }) {
    const [value, setValue] = useState("")

    useEffect(() => {
        cb(value)
    }, [cb, value])
  
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
