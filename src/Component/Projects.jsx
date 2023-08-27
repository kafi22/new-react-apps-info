import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react';
import useGetAPI from '../useGetAPi';


const Projects = () => {

  const {isLoading, projects} = useGetAPI()

  if(isLoading) {
    return <h3>Loading...</h3>
  }

  if(projects) {
    return (
      <h1>{projects.length}</h1>
    )
  }

  const allItems = projects?.map((item) => {
    console.log(item);
    const {title, id, img, url} = item

    return (
      <Stack key={id}>
        <Card>
          <CardMedia image={img} src={url} sx={{height : "200px", width : "100%", objectFit : "cover"}}  />
          
          <CardContent>
            <Typography variant='h6'>
              {title}
            </Typography>
         
          </CardContent>
          <Button variant='contained' color='primary' size='medium'>
            Click here
          </Button>
        </Card>
      </Stack>
    )
  })



 
  return (
    
    <Box component={"div"}>
      <Box sx={{
        display : "flex",
        justifyContent : "space-between",
        alignItems : "center",
        gap : "1.5rem"
      }}>
        {allItems}
      </Box>
    </Box>
  )
}

export default Projects