import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <NavLink to="/login">Login</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/signUp">Sign up</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
