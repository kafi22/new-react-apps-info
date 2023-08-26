import React from 'react';
import {Box, Stack, Button , Typography} from "@mui/material";
import heroImg from "../assets/image/undraw_code_review_re_woeb.svg"

const Hero = () => {
  return (
    
   
    <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} height={"70vh"} gap={"1.5rem"}>

        <Box>
            <Stack>
                <Typography variant='h2' >
                This is Me
                </Typography>
               
            </Stack>
            <Stack spacing={"10px"}>
            <Typography variant='h3' gutterBottom>
                Welcome to our website <br></br> 20<Typography variant='span' color={"palegreen"}>23</Typography>
            </Typography>

            <Typography variant='body2' component={"p"} sx={{lineHeight : "1.8", maxWidth : "70%"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro dolores officia sunt debitis cupiditate error, earum soluta quasi mollitia esse ea distinctio, delectus excepturi qui reprehenderit provident nostrum blanditiis illo. Harum, excepturi quidem!
            </Typography>
            </Stack>
        </Box>

        <Box >
            <img src={heroImg} alt="" style={{ height : "auto", width : "100%", objectFit : "cover"}} />
        </Box>
    </Box>

  )
}

export default Hero