import React from "react"
import { Box, Button, Grid, Typography } from "@mui/material"

const TrendingPage = () => {
  return (
    <Box
      id='trending'
      sx={{
        backgroundColor: "#EAD9CE",
        width: "100%",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
            py={{ xs: "50px", sm: "75px", md: "10x", lg: "auto" }}
            paddingLeft={{ xs: "20px", sm: "30px", md: "25px", lg: "80px" }}
          >
            <Typography
              variant='h4'
              fontFamily='Optima, sans-serif'
              gutterBottom
              sx={{ mb: 4 }}
            >
              Most Trending In SS ‘23
            </Typography>
            <Box>
              <Box>
                <Typography
                  fontFamily='Optima, sans-serif'
                  gutterBottom
                  sx={{
                    paddingRight: {
                      lg: "100px",
                      md: "100px",
                      sm: "50px",
                      xs: "50px",
                    },
                  }}
                >
                  Based on current fashion trends and new emerging styles, it is
                  expected that bold and oversized earrings will continue to be
                  popular. Additionally, sustainable fashion, eco-friendly
                  materials and ethical production methods are becoming more
                  important to consumers, so earrings made from recycled or
                  sustainable materials also gain popularity.
                </Typography>
              </Box>
              <Box>
                <Button
                  sx={{
                    border: "1px solid #B07B54",
                    borderRadius: "0px 30px 30px 0px",
                    backgroundColor: "#B07B54",
                    width: "233px",
                    height: "50px",
                    color: "white",
                    fontSize: "17px",
                    fontFamily: "Optima, sans-serif",
                    marginTop: "40px",
                    textTransform: "none",
                  }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component='img'
            src='./assets/shopNow.jpeg'
            alt='About Us Image'
            sx={{
              width: "100%",
              height: { lg: "720px", md: "720px", sm: "400px", xs: "400px" },
              objectFit: "cover",
              borderRadius: "250px 0px 0px 0px",
              textAlign: { xs: "center", sm: "start", md: "start" },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default TrendingPage
