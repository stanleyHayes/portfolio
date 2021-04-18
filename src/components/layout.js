import React from "react";
import {Box, makeStyles} from "@material-ui/core";
import Header from "./header/header";
import {grey} from "@material-ui/core/colors";

const Layout = ({children}) => {

    const useStyles = makeStyles(() => {
        return {
            root: {
                // background: "#212121",
                background: grey["100"],
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