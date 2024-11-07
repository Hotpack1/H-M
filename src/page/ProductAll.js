import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList,setProductList] = useState([])
  const [query,setQuery] = useSearchParams()
  const getProducts = async () => {
    let searchQuery = query.get("q")||""

    let url = `https://my-json-server.typicode.com/Hotpack1/HnM/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
    
  }

  useEffect(()=>{
    getProducts()
  },[query])

  return (
    <div>
      <Container>
        
        <Row>
          {productList.map((menu)=>(<Col lg ={3}><ProductCard item={menu}/></Col>))}
          
        </Row>
      </Container>
      
    </div>
  )
}

export default ProductAll
