import React from "react"
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Link,
  Typography,
} from "@mui/material"
import { FaInstagram } from "react-icons/fa"
import { FaPinterestP } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: "#EAD9CE",
        padding: "20px 20px",
        mt: "30px",
      }}
    >
      <Box sx={{ paddingLeft: "50px", mt: "40px" }}>
        <Grid container spacing={7}>
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Optima, sans-serif",
                  fontWeight: "300px",
                  fontSize: "18px",
                }}
              >
                Join our email list
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Optima, sans-serif",
                  fontWeight: "300px",
                  fontSize: "14px",
                  color: "#6A6A6A",
                  mt: 2,
                }}
              >
                Subscribing to Jewels allows you to stay updated on the latest
                trends and designs in the jewelry industry.
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
            >
              <InputBase
                type='text'
                placeholder='Email'
                sx={{
                  width: "250px",
                  height: "41px",
                  border: "0px solid gray",
                  borderRadius: "50px 0px 0px 50px",
                  fontFamily: "Optima, sans-serif",
                  paddingLeft: "15px",
                  backgroundColor: "white",
                }}
              />
              <Button
                aria-label='send'
                sx={{
                  backgroundColor: "#B07B54",
                  borderRadius: "50px",
                  height: "41px",
                  marginLeft: "-20px",
                  textTransform: "none",
                  color: "white",
                  padding: "0px 25px",
                  fontFamily: "Optima, sans-serif",
                  ":hover": {
                    backgroundColor: "#B07B54",
                  },
                }}
              >
                Send
              </Button>
            </Box>
            <Box sx={{ mt: 5 }}>
              <IconButton
                aria-label='Instagram'
                sx={{
                  mr: 3,
                  padding: "10px",
                  border: "1px solid #B07B54",
                  borderRadius: "50px",
                  color: "#B07B54",
                }}
              >
                <FaInstagram />
              </IconButton>
              <IconButton
                aria-label='Pinterest'
                sx={{
                  mr: 3,
                  padding: "10px",
                  border: "1px solid #B07B54",
                  borderRadius: "50px",
                  color: "#B07B54",
                }}
              >
                <FaPinterestP />
              </IconButton>
              <IconButton
                aria-label='facebook'
                sx={{
                  mr: 3,
                  padding: "10px",
                  border: "1px solid #B07B54",
                  borderRadius: "50px",
                  color: "#B07B54",
                }}
              >
                <FaFacebookF />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={2} sm={4}>
            <Typography
              variant='body1'
              sx={{
                fontFamily: "Optima, sans-serif",
                fontWeight: "bold",
                fontSize: "18px",
                color: "#B07B54",
              }}
            >
              Shop
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Collection
                </Link>
              </Typography>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Rings
                </Link>
              </Typography>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Bracelets
                </Link>
              </Typography>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Chains
                </Link>
              </Typography>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Wedding Rings
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} sm={4}>
            <Typography
              variant='body1'
              sx={{
                fontFamily: "Optima, sans-serif",
                fontWeight: "bold",
                fontSize: "18px",
                color: "#B07B54",
              }}
            >
              About
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  About us
                </Link>
              </Typography>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Contact
                </Link>
              </Typography>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Privacy Policy
                </Link>
              </Typography>
              <Typography variant='body2'>
                <Link
                  href='#'
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  FAQ's
                </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2} sm={4}>
            <Typography
              variant='body1'
              sx={{
                fontFamily: "Optima, sans-serif",
                fontWeight: "bold",
                fontSize: "18px",
                color: "#B07B54",
              }}
            >
              Our Contacts
            </Typography>
            <Typography
              sx={{
                textDecoration: "none",
                color: "black",
                fontSize: "15px",
                fontFamily: "Optima, sans-serif",
                mt: 2,
              }}
            >
              shop_Jewels@gmail.com
              <br />
              +123456789
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider
        orientation='horizontal'
        sx={{
          width: "100%",
          color: "#B2A4A4",
          mt: 3,
        }}
      />

      <Box
        sx={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
            fontFamily: "Optima, sans-serif",
            mt: 2,
          }}
        >
          2024 ©JEWELS. All Rights Reserved.
        </Typography>
        <Typography sx={{ fontSize: "13px", fontFamily: "Optima, sans-serif" }}>
          Created by Julianna
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
