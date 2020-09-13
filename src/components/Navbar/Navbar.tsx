import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LaunchHistoryContainer } from '../Launch/index';
import { LaunchDetailsContainer } from '../LaunchDetails/index';


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
    navbar: {
        backgroundColor: "black"
    }
}));


export const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <Router>
                <div className={classes.root}>
                    <AppBar position="static" className={classes.navbar}>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                <Link to="/" style={{ "float": "left", "padding": "5px", "color": "white", "textDecoration": "none" }}>SpaceX</Link>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Routes>
                        <Route path="/" element={<LaunchHistoryContainer />} />
                        <Route path="launch/:id" element={<LaunchDetailsContainer />}></Route>
                        <Route path="*" element={<p>Page Not Found</p>} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
