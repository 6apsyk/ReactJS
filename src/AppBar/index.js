import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 2,
    },
    link : {
      color: theme.palette.background.default,
      textDecoration: 'none',
      marginRight: theme.spacing(2)
    },
    activeLink: {
      color: "black",
      textDecoration: 'underline'
    }
  }));

const AppBars = () => {
    const classes = useStyles()
    const location = useLocation()

    const routes = [
      { pathTitle: "Home",path: "/"},
      { pathTitle: "Chat", path: "/chat" },
      { pathTitle: "Profile", path: "/profile" },
    ];

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              {routes.map((el) => (
                         <Link
                          key={el.path} 
                          to={el.path}
                          className={`${classes.link} ${el.path === location.pathname ? classes.activeLink : "" }`}
                          >
                            {el.pathTitle}
                        </Link>
              ))}
              
              <Button color="inherit" className={classes.title}>Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
}
export default AppBars;