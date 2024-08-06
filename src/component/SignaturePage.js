import React from "react"
import { Box, Grid, Typography, Button, Container } from "@mui/material"

const images = [
  {
    src: "./assets/earrings1.png",
    alt: "earrings1",
  },
  {
    src: "./assets/earrings2.png",
    alt: "earrings2",
  },
  {
    src: "./assets/earrings3.png",
    alt: "earrings3",
  },
  {
    src: "./assets/earrings4.png",
    alt: "earrings4",
  },
]

const SignaturePage = () => {
  return (
    <Box sx={{ py: 6 }} id='signature'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            mb: 4,
          }}
        >
          <Typography variant='h4' sx={{ fontFamily: "Optima, sans-serif" }}>
            Signature Earrings
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
              mt: 3,
              fontFamily: "Optima, sans-serif",
              fontWeight: "300px",
              textAlign: "center",
            }}
          >
            Our unique and eye-catching earrings are exclusively made in-house.
            Each pair is carefully designed with attention to detail, resulting
            in a signature style that is both modern and timeless.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent='center'>
          {images.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box
                sx={{
                  textAlign: "center",
                  marginLeft: {
                    lg: "-30px",
                    md: "-20px",
                    sm: "0px",
                    xs: "0px",
                  },
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    maxWidth: "70%",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-end",
              lg: "flex-end",
            },
            paddingRight: {
              xs: "1px",
              sm: "10px",
              md: "30px",
              lg: "30px",
            },
            flex: 1,
            marginTop: "40px",
          }}
        >
          <Button
            variant='contained'
            color='primary'
            justifyContent='end'
            sx={{
              border: "1px solid #B07B54",
              borderRadius: "30px 0px 0px 30px",
              backgroundColor: "#B07B54",
              width: "233px",
              height: "50px",
              color: "white",
              fontSize: "17px",
              fontFamily: "Optima, sans-serif",
              textTransform: "none",
            }}
          >
            View all
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default SignaturePage
