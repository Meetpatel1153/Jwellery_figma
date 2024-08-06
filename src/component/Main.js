import React from "react"
import { Grid, Typography, Button, Box } from "@mui/material"

import Navbar from "./Navbar"

const Main = () => {
  return (
    <Box sx={{ backgroundColor: "#EAD9CE", width: "100%" }} id='home'>
      <Navbar />
      <Box py={"25px"}>
        <Grid
          container
          sx={{
            marginTop: 4,
            marginBottom: 2,
            alignItems: "center",
          }}
        >
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
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
              py={{ xs: "50px", sm: "75px", md: "3x", lg: "auto" }}
              paddingLeft={{ xs: "20px", sm: "100px", md: "30px", lg: "200px" }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "26px", sm: "30px", md: "36px", lg: "45px" },
                  fontWeight: "400px",
                  lineHeight: {
                    xs: "37px",
                    sm: "45px",
                    md: "50px",
                    lg: "70px",
                  },
                  fontFamily: "Optima, sans-serif",
                }}
              >
                Your One-Stop Destination for Unique and Exquisite Jewelry
                Pieces
              </Typography>

              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "17px",
                      fontWeight: "300px",
                      fontFamily: "Optima, sans-serif",
                      marginTop: "20px",
                    }}
                  >
                    Here, we offer various types of jewelry, including
                    necklaces, bracelets, earrings, and rings. From classic
                    designs to modern styles, we have something for everyone.
                  </Typography>
                  <Box>
                    <Button
                      sx={{
                        border: "0px solid #B07B54",
                        borderRadius: "0px 30px 30px 0px",
                        backgroundColor: "#B07B54",
                        width: "233px",
                        height: "50px",
                        color: "white",
                        fontSize: "17px",
                        fontFamily: "Optima, sans-serif",
                        marginTop: "40px",
                        textTransform: "none",
                        // width: {
                        //   lg: "233px",
                        //   md: "200px",
                        //   sm: "150px",
                        //   xs: "150px",
                        // },
                        // fontSize: {
                        //   lg: "17px",
                        //   md: "15px",
                        //   sm: "12px",
                        //   xs: "12px",
                        // },
                      }}
                    >
                      Shop The Collection
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box sx={{ marginLeft: { md: "30px", xs: "20px" } }}>
              <img
                src='./assets/main.jpeg'
                alt='Jewelry'
                style={{
                  width: "100%",
                  height: {
                    lg: "720px",
                    md: "720px",
                    sm: "400px",
                    xs: "400px",
                  },
                  borderRadius: "500px 0px 0px 500px",
                  paddingTop: { md: "19px", xs: "19px" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Main
