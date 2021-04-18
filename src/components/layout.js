import React from "react";
import {Box} from "@material-ui/core";
import Header from "./header/header";

const Layout = ({children}) => {
    return (
        <Box>
            <div>
                <Header />
            </div>
            <div>
                {children}
            </div>
        </Box>
    )
}

export default Layout;