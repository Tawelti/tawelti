import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';


// ----------------------------------------------------------------------


export default function App() {
  const [claim,setClaim]=useState([])
  const [places,setPlaces]=useState([])
  const [sellers,setSellers]=useState([])
  const [clients,setClietns]=useState([])
  useEffect(()=>{
    getAllClaim()
    getAllPlaces()
    getAllSeller()
    getAllClients()
  },[])
  
  const getAllClaim=()=>{
    axios.get('http://127.0.0.1:3000/api/Claim/getAllClaim')
    .then((response)=>setClaim(response.data))
    .catch((err)=>{console.log(err)})
  }
  const getAllPlaces=()=>{
    axios.get('http://127.0.0.1:3000/api/places/getPlaces')
    .then((respons)=>{setPlaces(respons.data)})
    .catch((err)=>console.log(err))
  }
  const getAllSeller=()=>{
    axios.get('http://127.0.0.1:3000/api/seller/all')
    .then((response)=>{setSellers(response.data)  }) 
    .catch((err)=>{console.log(err)})
  }
  const getAllClients=()=>{
    axios.get('http://127.0.0.1:3000/api/client/getAllClient')
    .then((response)=>{setClietns(response.data)  }) 
    .catch((err)=>{console.log(err)})
  }
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router claim={claim} places={places} sellers={sellers} clients={clients}/>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
