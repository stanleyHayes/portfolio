import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import Header from "./header/header";

const Layout = ({children}) => {

    const useStyles = makeStyles(() => {
        return {
            root: {}
        }
    });

    const classes = useStyles();


    return (
        <Box className={classes.root}>
            <div>
                <Header/>
            </div>
            <div>
                {children}
            </div>
        </Box>
    )
}

export default Layout;