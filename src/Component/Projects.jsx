import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material'
import useGetAPI from '../useGetAPi';


const Projects = () => {

  const {isLoading, projects} = useGetAPI()

  console.log(projects);

  if(isLoading) {
    return <h3>Loading...</h3>
  }


  const getItems = projects?.map((project) => {

    const {title, id, img, url} = project;

    return (
      
      <Box key={id}  sx={{display : "flex", flexDirection : "column", justifyContent : "flex-start", alignItems : "center"}}>
        <img src={img} alt="image" style={{Height : "100%", width : "100%", objectFit : "cover"}} />

        <Stack>
          <Typography>{title}</Typography>
        </Stack>
          <Button variant='contained' type='button' href={url} target='_blank' >Click here</Button>
      </Box>
    )
  })

 
 
  return (
    
    <Box component={"div"} width={"90%"} sx={{m : "0 auto"}}>
      <Box sx={{
        display : "grid",
        justifyContent : "space-between",
        alignItems : "stretch",
        gridTemplateColumns : "1fr 1fr ",
        gap : "2rem",
        height : "100%"

      }}>
        
        {getItems}
      </Box>
    </Box>
  )
}

export default Projects