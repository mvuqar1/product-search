import React from 'react'

import { useState, useEffect,useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { getAllApi } from "../Api/Api"
import Preloader from "../Components/Preloader"
import AllApiList from '../Components/AllApiList'
import Search from '../Components/Search'

import "./Products.css"

export default function Products() {

  const [cataloq, setCataloq] = useState([]);
  const [filteredCataloq, setFilteredCataloq] = useState([]);
  const [strValue, setStrValue] = useState("")
  const { pathname } = useLocation()      //  /products ?search=....
  const navigate = useNavigate();


  const hadlerSearch = useCallback((str) => {
    setStrValue(str);
    setFilteredCataloq(
      cataloq.filter((item) => (
        item.title.toLowerCase().includes(str.toLowerCase())
      ))
    );
  }, [cataloq]);

  useEffect(() => {
    navigate({ pathname, search: `?search=${strValue}` })
  }, [navigate, pathname, strValue])

  useEffect(() => {
    getAllApi().then((data) => {
      setCataloq(data);
      setFilteredCataloq(data);
    })
  }, [])

  return (

    <div className='container-products'>

      <h1 className='title'>Products</h1>
      <br />

      <Search cb={hadlerSearch} />

      {!cataloq.length ? (
        <Preloader />
      ) : (
        <AllApiList cataloq={filteredCataloq} />
      )
      }
    </div>

  )
}
