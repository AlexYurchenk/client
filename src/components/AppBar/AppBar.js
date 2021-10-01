import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "../AuthNav";
import { authSelectors } from "../../redux/auth";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
