import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Youtube from "../assets/Youtube.webp";
import YoutubeLogo from "../assets/Youtube-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import HistoryIcon from "@mui/icons-material/History";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExploreIcon from "@mui/icons-material/Explore";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled, useTheme } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: theme.palette.action.hover,
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 600,
  [theme.breakpoints.up("sm")]: {
    width: "30rem",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  width: "100%",
}));

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // For 'sm' and 'md' screens

  // Toggle Drawer state
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Centered YouTube logo above the Navbar for small screens, only show if not overlapping */}
      {isSmallScreen && (
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            top: "0.5rem",
            width: "100%",
          }}
        >
          {/* Hide the logo when it might overlap with the search bar */}
          <img
            src={Youtube}
            alt="Youtube"
            style={{
              height: "3rem",
              margin: "auto",
              display: isSmallScreen ? "none" : "block",
            }}
          />
        </Box>
      )}

      <AppBar
        position="fixed"
        color="default"
        sx={{
          top: 0,
          boxShadow: "none",
          backgroundColor: "white", // Make background transparent
        }}
      >
        <Toolbar
          sx={{
            paddingBottom: isSmallScreen ? "10px" : 0,
            top: isSmallScreen ? "5px" : "-5px",
            justifyContent: isSmallScreen ? "space-between" : "space-between",
          }}
        >
          {/* Left: Menu Icon and Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            {!isSmallScreen && (
              <>
                <img
                  src={Youtube}
                  alt="Youtube"
                  style={{ height: "2rem" }}
                />
                <img
                  src={YoutubeLogo}
                  alt="YoutubeLogo"
                  style={{
                    height: "5.5rem",
                  }}
                />
              </>
            )}
          </Box>

          {/* Center: Search Bar and Mic Icon (centered on small screens) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isSmallScreen ? "center" : "flex-start",
              width: isSmallScreen ? "100%" : "auto",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon style={{ cursor: "pointer" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            {/* Mic Icon next to Search Bar */}
            <IconButton color="inherit" sx={{ marginLeft: 1 }}>
              <MicIcon />
            </IconButton>
          </Box>

          {/* Right: Icons (hide on small/medium screens) */}
          {!isSmallScreen && (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button variant="outlined">
                <AccountCircleIcon
                  style={{ position: "relative", left: "-5px" }}
                />{" "}
                Sign In
              </Button>
              <IconButton color="inherit">
                <VideoCallIcon />
              </IconButton>
              <IconButton color="inherit">
                <AppsIcon />
              </IconButton>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
              <IconButton edge="end" color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer Menu */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        style={{ overflow: "hidden" }}
      >
        <Box
          sx={{ width: 250, overflowX: "hidden" }} // Added overflowX: 'hidden'
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <img
            src={YoutubeLogo}
            alt="Youtube"
            style={{ height: "5.5rem", display: "block", marginLeft: 13 }}
          />

          {/* Main Section */}
          <List>
            <ListItem button sx={{ cursor: "pointer" }}>
              <HomeIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <WhatshotIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Trending" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <SubscriptionsIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Subscriptions" />
            </ListItem>
          </List>

          <Divider />

          {/* Explore Section */}
          <List>
            <ListItem button sx={{ cursor: "pointer" }}>
              <QueuePlayNextIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Library" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <HistoryIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="History" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <OndemandVideoIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Your Videos" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <AccessTimeIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Watch Later" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <ThumbUpAltIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Liked Videos" />
            </ListItem>
          </List>

          <Divider />

          {/* More Options Section */}
          <List>
            <ListItem button sx={{ cursor: "pointer" }}>
              <ExploreIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Explore" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <SettingsIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <HelpOutlineIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Help" />
            </ListItem>
            <ListItem button sx={{ cursor: "pointer" }}>
              <FeedbackIcon sx={{ marginRight: 2 }} />
              <ListItemText primary="Send Feedback" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
