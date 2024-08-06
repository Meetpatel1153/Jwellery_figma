import React, { useState } from "react"
import {
  Box,
  Typography,
  Link,
  Button,
  Divider,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import MenuIcon from "@mui/icons-material/Menu"
import { motion } from "framer-motion"

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const isSmallScreen = useMediaQuery("(max-width: 800px)")

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setDrawerOpen(open)
  }

  const drawerContent = (
    <Box
      sx={{
        backgroundColor: "#EAD9CE",
        height: "100%",
        width: "150px",
        padding: "20px",
      }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          sx={{
            display: "block",
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            fontFamily: "Optima, sans-serif",
            marginBottom: "15px",
          }}
          href='#'
        >
          Home
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          sx={{
            display: "block",
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            fontFamily: "Optima, sans-serif",
            marginBottom: "15px",
          }}
          href='#'
        >
          About Us
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          sx={{
            display: "block",
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            fontFamily: "Optima, sans-serif",
            marginBottom: "15px",
          }}
          href='#'
        >
          Collection
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          sx={{
            display: "block",
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            fontFamily: "Optima, sans-serif",
            marginBottom: "15px",
          }}
          href='#'
        >
          Contact
        </Link>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <SearchIcon />
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              height: "23px",
              width: "1px",
              color: "black",
              marginLeft: "15px",
              display: "block",
            }}
          />
          <Box marginLeft='15px'>
            <ShoppingCartIcon />
          </Box>
          <Divider
            orientation='vertical'
            sx={{
              height: "23px",
              marginLeft: "15px",
              display: "block",
            }}
          />
          <Box marginLeft='15px'>
            <PersonOutlineIcon />
          </Box>
        </Box>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link
          sx={{
            display: "block",
            color: "black",
            textDecoration: "none",
            fontSize: "20px",
            fontFamily: "Optima, sans-serif",
            margin: "15px 0px",
          }}
          href='#'
        >
          Sign Up
        </Link>
      </motion.div>
    </Box>
  )

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EAD9CE",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 30px 10px 0px",
        }}
        paddingLeft={{ xs: "20px", sm: "30px", md: "25px", lg: "80px" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isSmallScreen && (
            <>
              <Box marginRight='30px'>
                <Link
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                  href='#'
                >
                  Home
                </Link>
              </Box>
              <Box marginRight='30px'>
                <Link
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                  href='#'
                >
                  About Us
                </Link>
              </Box>
              <Box marginRight='30px'>
                <Link
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                  href='#'
                >
                  Collection
                </Link>
              </Box>
              <Box>
                <Link
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontFamily: "Optima, sans-serif",
                  }}
                  href='#'
                >
                  Contact
                </Link>
              </Box>
            </>
          )}
          {isSmallScreen && (
            <IconButton sx={{ color: "black" }} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "25px", md: "32px", lg: "40px" },
              fontFamily: "Optima, sans-serif",
            }}
          >
            JEWELS
          </Typography>
        </Box>

        {!isSmallScreen && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box marginLeft='110px'>
                <SearchIcon />
              </Box>
              <Divider
                orientation='vertical'
                sx={{
                  height: "23px",
                  width: "1px",
                  color: "black",
                  marginLeft: "15px",
                  display: "block",
                }}
              />
              <Box marginLeft='15px'>
                <ShoppingCartIcon />
              </Box>
              <Divider
                orientation='vertical'
                sx={{
                  height: "23px",
                  marginLeft: "15px",
                  display: "block",
                }}
              />
              <Box marginLeft='15px'>
                <PersonOutlineIcon />
              </Box>
            </Box>
            <Box>
              <Button
                sx={{
                  color: "black",
                  alignItems: "center",
                  marginLeft: "15px",
                  textTransform: "none",
                }}
              >
                <Typography
                  sx={{
                    alignItems: "center",
                    fontFamily: "Optima, sans-serif",
                  }}
                >
                  Sign Up
                </Typography>
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      <Divider
        orientation='horizontal'
        sx={{
          width: "100%",
          color: "#B2A4A4",
        }}
      />

      <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  )
}

export default Navbar
