import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import Header from "./header/header";

const Layout = ({children}) => {

    const useStyles = makeStyles(() => {
        return {
            root: {
                background: "#212121",
                minHeight: "100vh"
            }
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