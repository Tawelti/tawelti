import PropTypes from 'prop-types';
// @mui
import { Box, Card,Typography, Stack,Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import Typography from 'src/theme/overrides/Typography'
const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});
SellerAproved.propTypes = {
  data: PropTypes.object,
};

function SellerAproved({setOneSeller,idSeller}) {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get(`http://127.0.0.1:3000/api/seller/get/${idSeller}`)
    .then((res)=>setData(res.data))
    .catch((err)=>{console.log(err)})
  },[])
  const acceptSeller=()=>{
    axios.put(`http://127.0.0.1:3000/api/seller/accept/${idSeller}`)
    .then(()=>{alert('done')})
  }
  console.log('fares')
  return (
    <div>
      <Button onClick={()=>{setOneSeller(true)}} size="large" >Go back</Button>
      {data[0]? (
             <Grid key={data[0].id} item xs={12} sm={6} md={3}>
             <Card>
             <Box sx={{ pt: '100%', position: 'relative' }}>
               <StyledProductImg alt='cover' src={data[0].patentimage} />
             </Box>
       
             <Stack spacing={2} sx={{ p: 3 }}>
               <Typography variant="subtitle2" noWrap>
                 {data[0].name}
               </Typography>
               <Typography variant="subtitle2" noWrap>
               
                  <Button variant="contained" color="success" style={{marginRight:'15px'}}
                  onClick={acceptSeller}>
                  Accept
                  </Button>
                  <Button variant="outlined" color="error">
                  Reject
                  </Button>
               </Typography>
             </Stack>
           </Card>
               </Grid>
      ) :(<div>go back please there's an error </div>)}
   
    </div>
  )
}

export default SellerAproved
