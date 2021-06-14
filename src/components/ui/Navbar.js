import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, Button, Divider } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      marginRight: "2rem"
    },
  }));

export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <NavLink
              className="logo"
              exact
              to="/"
            >
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Typography>ABC</Typography>
              </IconButton>
            </NavLink>
            <Typography variant="h6" className={classes.title}>
              AsistenciaApp
            </Typography>

            <div>
              <NavLink
                activeClassName="active"
                className="navButton"
                exact
                to="/registro"
              >
                <Button color="inherit">
                  <Typography variant="button">
                    Registro
                  </Typography>
                </Button> 
              </NavLink>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    )
}
