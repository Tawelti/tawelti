import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import axios from 'axios';
// @mui
import { Container,Typography } from '@mui/material';
// components
import { ProductList } from '../sections/@dashboard/products';
// mock
// import PRODUCTS from '../_mock/products';


// ----------------------------------------------------------------------

export default function ProductsPage() {
const [places,setPlaces]=useState([])
useEffect(()=>{
  axios.get('http://127.0.0.1:3000/api/places/getPlaces')
  .then((respons)=>{setPlaces(respons.data)})
  .catch((err)=>console.log(err))
  
},[])
const PRODUCTS = places.map(e => ({
  id: e.id,
  cover: e.images,
  name: e.name
}));

  return (
    <>
      <Helmet>
        <title> Dashboard: Places </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Places
        </Typography>


        <ProductList products={PRODUCTS} />
        {/* <ProductCartWidget /> */}
      </Container>
    </>
  );
}
