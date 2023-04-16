import React from 'react'
import AllApiListItem from "./AllApiListItem"

export default function AllApiList(props) {
  const{cataloq}=props
  
  return (
    <div className='products-items'>
      {cataloq.map(el=>(
        <AllApiListItem key={el.id} {...el} />
      ))}
    </div>
  )
}
