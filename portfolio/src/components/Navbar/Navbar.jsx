import { useState, useEffect, useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "@mui/material";

const drawerWidth = 150;
const navItems = ["Home", "Sobre", "Projetos", "Habilidades", "Contato"];

function Navbar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleScroll = useCallback(() => {
    setScrolling(window.scrollY >= 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "left",
        backgroundColor: theme.palette.background.secondary,
        color: theme.palette.text.secondary,
        height: "100%",
      }}
    >
      <List
        sx={{
          "& .MuiListItem-root": {
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "#1a1a1a" },
          },
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              component={Link}
              to={`/${item.toLowerCase()}`}
              sx={{ py: 1, px: 2, justifyContent: "flex-start" }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  display: "block",
                  position: "relative",
                  fontWeight: 500,
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                }}
              />
            </ListItemButton>
            <Divider
              sx={{
                color: theme.palette.background.paper,
                backgroundColor: theme.palette.background.paper,
                ml: -5,
                width: "100%",
                mb: 5,
                display: "flex",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = props.window
    ? () => props.window().document.body
    : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        className={scrolling ? "navbar-scroll" : ""}
        sx={{
          backgroundColor: scrolling
            ? theme.palette.primary.contrastText
            : "transparent",

          position: "fixed",
          width: "100%",
          top: 0,
          boxShadow: scrolling ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "none",

          transition:
            "background-color 1s cubic-bezier(0.4, 0.0, 0.2, 1), box-shadow 1s cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{ color: theme.palette.background.paper, fontSize: "40px" }}
            />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              width: "100%",
              gap: "50px",
              justifyContent: "flex-end",
              marginRight: "300px",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                disableRipple
                sx={{
                  color: theme.palette.background.paper,
                  ":hover": {
                    color: theme.palette.primary.main,
                    border: "none",
                    backgroundColor: "transparent",
                  },
                  fontSize: "16px",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  backgroundColor: "transparent",
                  transition: "all .5s ease",
                }}
                component={Link}
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="top"
          hideBackdrop
          transitionDuration={200}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              mt: "50px",
              ml: "50px",
              width: drawerWidth,
              height: "30vh",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Navbar;
