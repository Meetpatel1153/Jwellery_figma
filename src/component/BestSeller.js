import React from "react"
import { Box, Grid, Typography } from "@mui/material"

const earrings = [
  {
    src: "./assets/earring1.png",
    alt: "earring1",
    description: "High angle golden earrings",
    price: "$60.00 USD",
  },
  {
    src: "./assets/earring2.png",
    alt: "earring2",
    description: "Round gold earrings",
    price: "$47.00 USD",
  },
  {
    src: "#",
    alt: "",
    description: "",
    price: "",
  },
]
const chain = [
  {
    src: "#",
    alt: "",
    description: "",
    price: "",
  },
  {
    src: "./assets/chain1.png",
    alt: "chain1",
    description: "Thin gold chain",
    price: "$35.00 USD",
  },
  {
    src: "./assets/chain2.png",
    alt: "chain2",
    description: "Shiny golden chain",
    price: "$52.00 USD",
  },
]
const bracelet = [
  {
    src: "./assets/bracelet.png",
    alt: "bracelet",
    description: "Eastern gold bracelet",
    price: "$58.00 USD",
  },
  {
    src: "./assets/f4.png",
    alt: "bracelet1",
    description: "Gold bracelet",
    price: "$77.00 USD",
  },
]

const BestSeller = () => {
  return (
    <Box id='bestSeller' sx={{ mb: "70px" }}>
      <Box
        sx={{
          textAlign: "center",
          px: { xs: "20px", sm: "60px", md: "80px", lg: "200px" },
          py: "50px",
        }}
      >
        <Typography variant='h4' fontFamily='Optima, sans-serif'>
          Best Sellers
        </Typography>
      </Box>
      <Box
        width={{ xs: "100%", sm: "100%", md: "80%", lg: "80%" }}
        sx={{ margin: "auto" }}
      >
        <Grid container spacing={3}>
          {earrings.map((earring, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  maxWidth: "250px",
                  margin: "auto",
                  mt: "10px",
                }}
              >
                <img
                  src={earring.src}
                  alt={earring.alt}
                  style={{ width: "80%" }}
                />
                <Typography
                  variant='body1'
                  fontFamily='Optima, sans-serif'
                  mt={2}
                >
                  {earring.description}
                </Typography>
                <Typography
                  variant='body1'
                  fontFamily='Optima, sans-serif'
                  mt={1}
                >
                  {earring.price}
                </Typography>
              </Box>
            </Grid>
          ))}

          {chain.map((chainItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  maxWidth: "250px",
                  margin: "auto",
                  mt: "10px",
                }}
              >
                <img
                  src={chainItem.src}
                  alt={chainItem.alt}
                  style={{ width: "80%" }}
                />
                <Typography
                  variant='body1'
                  fontFamily='Optima, sans-serif'
                  mt={2}
                >
                  {chainItem.description}
                </Typography>
                <Typography
                  variant='body1'
                  fontFamily='Optima, sans-serif'
                  mt={1}
                >
                  {chainItem.price}
                </Typography>
              </Box>
            </Grid>
          ))}

          {bracelet.map((braceletItem, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  maxWidth: "250px",
                  margin: "auto",
                  mt: "10px",
                }}
              >
                <img
                  src={braceletItem.src}
                  alt={braceletItem.alt}
                  style={{ width: "80%" }}
                />
                <Typography
                  variant='body1'
                  fontFamily='Optima, sans-serif'
                  mt={2}
                >
                  {braceletItem.description}
                </Typography>
                <Typography
                  variant='body1'
                  fontFamily='Optima, sans-serif'
                  mt={1}
                >
                  {braceletItem.price}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default BestSeller
