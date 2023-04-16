import React from 'react'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getIdApi } from '../Api/Api'
import Preloader from '../Components/Preloader'
import FotoList from '../Components/FotoList'


export default function Foto() {

  const { id } = useParams()
  const [fotoId, setFotoId] = useState([false])


 

  useEffect(() => {
    getIdApi(id).then((data) => {
      setFotoId(data)
    })

  }, [id])

  return (
    <div>
      
      {!fotoId.length?(
        <FotoList fotoId={fotoId} />
    
        ) : (
        <Preloader />
      )
      }
    </div>
  )
}
