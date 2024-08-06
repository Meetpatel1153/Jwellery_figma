import React from "react"
import { Box, Grid, Typography, Container } from "@mui/material"

const images = [
  {
    src: "./assets/f1.png",
    alt: "f1",
  },
  {
    src: "./assets/f2.png",
    alt: "f2",
  },
  {
    src: "./assets/f3.png",
    alt: "f3",
  },
  {
    src: "./assets/f4.png",
    alt: "f4",
  },
  {
    src: "./assets/f5.png",
    alt: "f5",
  },
  {
    src: "./assets/f6.png",
    alt: "f6",
  },
  {
    src: "./assets/f8.png",
    alt: "f7",
  },
  {
    src: "./assets/f9.png",
    alt: "f8",
  },
]

const FollowUSPage = () => {
  return (
    <Box sx={{ py: 6 }} id='follow'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            mb: 1,
          }}
        >
          <Typography variant='h4' sx={{ fontFamily: "Optima, sans-serif" }}>
            Follow us on Instagram
          </Typography>
        </Box>
        <Box
          sx={{
            margin: {
              lg: "0px 150px",
              md: "0px 120px",
              sm: "0px 30px",
              xs: "0px 20px",
            },
          }}
        >
          <Typography
            container
            variant='body1'
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              mb: 5,
              mt: 1,
              fontFamily: "Optima, sans-serif",
              fontWeight: "300px",
              textAlign: "center",
            }}
          >
            @SHOPJEWELSBOUTIQUE #JEWELS
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent='center'>
          {images.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "70%",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FollowUSPage
