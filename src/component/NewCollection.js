import React from "react"
import { Box, Grid, Typography, Button, Container } from "@mui/material"

const images = [
  {
    src: "./assets/neckless.jpeg",
    alt: "Necklace",
    buttonText: "View Necklace",
  },
  {
    src: "./assets/earings.jpeg",
    alt: "Earrings",
    buttonText: "View Earrings",
  },
  {
    src: "./assets/ring.jpeg",
    alt: "Ring",
    buttonText: "View Ring",
  },
]

const CollectionPage = () => {
  return (
    <Box sx={{ py: 6 }} id='newCollection'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            textAlign: "center",
            mt: 4,
            mb: 4,
          }}
        >
          <Typography variant='h4' sx={{ fontFamily: "Optima, sans-serif" }}>
            New Collection
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent='center'>
          {images.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "70%",
                  }}
                />
                <Box
                  sx={{ position: "relative", bottom: "80px", right: "37px" }}
                >
                  <Button
                    variant='contained'
                    sx={{
                      mt: 2,
                      bgcolor: "#B07B54",
                      color: "white",
                      border: "1px solid #B07B54",
                      borderRadius: "0px 30px 30px 0px",
                      textTransform: "none",
                      width: "50%",
                    }}
                  >
                    {image.buttonText}
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          backgroundColor: "#EAD9CE",
          textAlign: "center",
          mt: 6,
          py: { lg: "100px", md: "100px", sm: "80px", xs: "80px" },
          px: { lg: "220px", md: "200px", sm: "30px", xs: "20px" },
        }}
      >
        <Typography
          variant='h4'
          sx={{ fontFamily: "Optima, sans-serif", mb: 2 }}
        >
          A Diamond is a Woman's Best Friend!
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            mb: 2,
            mt: 5,
            fontFamily: "Optima, sans-serif",
            fontWeight: "300px",
          }}
        >
          A diamond is a timeless symbol of beauty and friendship, making it the
          perfect gift for any woman. It is often said that diamonds are a
          woman's best friend, and for good reason. Not only does a diamond
          represent unwavering loyalty and devotion, but it is also a symbol of
          luxury, glamor, and class. A diamond tells the world that you are
          proud of your loved one and want them to have only the best. As Coco
          Chanel once said, "A diamond is eternity, it is real and it is
          unbreakable."
        </Typography>
      </Box>
    </Box>
  )
}

export default CollectionPage
