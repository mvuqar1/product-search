import React from 'react'
import {useEffect,useCallback} from 'react';

import { useNavigate } from 'react-router-dom'

export default function FotoItem(props) {

  const { fotoId } = props
  const navigate = useNavigate()
 
  const goBack = useCallback(() => {
    navigate('/');
  }, [navigate]);     // const goBack = () => navigate("-1")

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Backspace') {
        // event.preventDefault();
        goBack();
      }
    };
    
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    };
  }, [goBack]);
  return (
    <div className='container-foto'>
      <button className='foto-goBack' onClick={goBack}>Go Back</button>
      <div className='foto-title' >{fotoId.title}</div>
      <img className='foto-width' src={fotoId.image} alt={fotoId.title} />
      <span className='foto-price'>{fotoId.price} AZN</span>
    </div>
  )
}
