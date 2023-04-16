import React from 'react'
import { useParams } from 'react-router-dom'

export default function Error() {
  let params=useParams()
  console.log(params[0]);
  console.log(params);
  return (
    <h1>Error #404 not found this serach</h1>
  )
}
