import React from "react"
import { Box, Button, Grid, Typography } from "@mui/material"

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: "#EAD9CE", padding: "0" }} id='about'>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box
            component='img'
            src='./assets/about.png'
            alt='About Us Image'
            sx={{
              width: "80%",
              height: { lg: "720px", md: "720px", sm: "400px", xs: "400px" },
              objectFit: "cover",
              borderRadius: "0px 250px 0px 0px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ fontFamily: "Optima, sans-serif", padding: "20px" }}>
            <Typography
              variant='h4'
              fontFamily='Optima, sans-serif'
              gutterBottom
            >
              About Us
            </Typography>
            <Box>
              <Box>
                <Typography
                  variant='body1'
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
                  We're a group of five friends passionate about making unique
                  and beautiful jewelry. Whether it's crafting intricate beaded
                  necklaces or designing elegant bracelets, our creativity and
                  skills shine through in every piece we create. We value
                  collaboration and work together to come up with new ideas and
                  techniques that enrich our craft. From sourcing the highest
                  quality materials to putting the finishing touches on each
                  piece, we take pride in every step of the process. At the
                  heart of our business is a genuine love for jewelry-making,
                  and we can't wait to share our passion with you.
                </Typography>
              </Box>
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
                    xs: "10px",
                    sm: "50px",
                    md: "-90px",
                    lg: "100px",
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
                  Learn More
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutPage
