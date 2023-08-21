import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// @mui
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import { BlogPostCard} from '../sections/@dashboard/blog';
// mock
// import POSTS from '../_mock/blog';



// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

export default function BlogPage({claim}) {
    // const [claim,setClaim]=useState([])
    // useEffect(()=>{
    //     axios.get('http://127.0.0.1:3000/api/Claim/getAllClaim')
    //     .then((response)=>setClaim(response.data))
    //     .catch((err)=>{console.log(err)})
    // },[])
    // console.log('claim',claim)

    const POSTS = claim.map((e ) => ({
        id: e.id,
        cover: e.Place.images,
        title: e.content,
        createdAt: faker.date.past(),
        author: {
          name:e.Client.name,
          avatarUrl:e.Client.image,
        },
      }));
  return (
    <>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Claims
          </Typography>
        </Stack>


        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
