import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { MenuItem, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import logo from "../homePage/assets/logo.png";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { id: 1, title: "Artists", link: "/artists" },
    { id: 2, title: "Products", link: "/products" },
    { id: 3, title: "About", link: "/about" },
    { id: 3, title: "Admin", link: "/admin" },
  ];

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Link to="/">
            <img
              src={logo}
              alt="Логотип"
              style={{ marginRight: 20, height: 50 }}
            />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.id}
                to={page.link}
                style={{ textDecoration: "none", margin: "0 15px" }}
              >
                <Typography
                  sx={{
                    color: "black",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                  }}
                >
                  {page.title}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={page.link}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {page.title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link to="/cart" style={{ color: "black", marginRight: "20px" }}>
              <IconButton>
                <AddShoppingCartIcon />
              </IconButton>
            </Link>
            <TextField
              fullWidth
              label="search..."
              variant="standard"
              onChange={(e) => e.target.value}
            />
            {/* <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            > */}
            {/* <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                Войти
              </Typography>
            </Link> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
