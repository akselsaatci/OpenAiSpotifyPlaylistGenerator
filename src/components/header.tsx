import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

interface Props {}

const Header: NextPage<Props> = ({}) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Playlist Generator
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
