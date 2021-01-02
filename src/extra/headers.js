import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("sm")]: {
            flexGrow: 1,
        }
    },
    HeadersOption: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end"
    }
}));

const Headers = (props) => {
    const { history } = props
    console.log(props)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    console.log(isMobile)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL)
        setAnchorEl(null);
    };

    const handleButtonClick = (pageURL) => {
        history.push(pageURL)
    };

    const menuItems = [
        {
            menuTitle: 'Home',
            pageURL: '/'
        },
        {
            menuTitle: 'Signin',
            pageURL: '/signin'
        },
        {
            menuTitle: 'Signup',
            pageURL: '/signup'
        }
    ]

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={classes.title}>
                        Welcome_Mobile
                    </Typography>
                    {isMobile ? (
                        <>
                            <div>
                                <IconButton edge="start"
                                    onClick={handleMenu}
                                    className={classes.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    {menuItems.map(menuItem => {
                                        const { menuTitle, pageURL } = menuItem
                                        return (

                                            <MenuItem onClick={() => handleMenuClick(pageURL)}>{menuTitle}</MenuItem>
                                        )
                                    })}
                                    {/* <MenuItem onClick={() => handleMenuClick('/signin')}>My account</MenuItem> */}
                                    {/* <MenuItem onClick={() => handleMenuClick('/signup')}>My account</MenuItem> */}
                                </Menu>
                            </div>
                        </>
                    ) : (
                            // <IconButton edge="start"
                            //     onClick={handleMenu}
                            //     className={classes.menuButton}
                            //     color="inherit"
                            //     aria-label="menu">
                            //     <Typography>Not Mobile</Typography>
                            // </IconButton>
                            <div className={classes.HeadersOption}>
                                <Button variant="contained" onClick={() => handleButtonClick('/')}>Home</Button>
                                <Button variant="contained" onClick={() => handleButtonClick('/signin')}>Signin</Button>
                                <Button variant="contained" onClick={() => handleButtonClick('/signup')}>Signup</Button>
                            </div>
                        )}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withRouter(Headers);


// import React from 'react'
// import { Menu, MenuItem, Button } from '@material-ui/core'
// import { Link, withRouter } from 'react-router-dom'


// const MenuBar = () => {
//     return (
//         <div>
//             <Button>Add</Button>
//             <Menu open={false}>
//                 <MenuItem>
//                     <Link to="/">Home</Link>
//                 </MenuItem>
//                 <MenuItem>
//                     <Link to="/signin">Login Page</Link>
//                 </MenuItem>
//                 <MenuItem>Login Page</MenuItem>
//             </Menu>
//         </div>
//     )
// }

// export default withRouter(MenuBar)


// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import AppBarCollapse from "./AppBarCollapse";

// const styles = {
//   root: {
//     flexGrow: 1
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   },
//   navigation: {},
//   toggleDrawer: {},
//   appTitle: {}
// };

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <AppBar position="fixed" className={classes.navigation}>
//       <Toolbar>
//         {/* <IconButton
//           color="inherit"
//           aria-label="Menu"
//           className={classes.toggleDrawer}
//         >
//           <MenuIcon />
//         </IconButton> */}
//         <Typography
//           variant="title"
//           color="inherit"
//           className={classes.appTitle}
//         >
//           Mobile-World
//         </Typography>
//         <AppBarCollapse />
//       </Toolbar>
//     </AppBar>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(ButtonAppBar);


