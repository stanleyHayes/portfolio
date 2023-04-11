import {Button, Grid, Toolbar} from "@mui/material";
import React from "react";
import {Brightness4, Brightness7, Menu} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const TabletHeader = () => {

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);

    return (
        <Toolbar
            sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "divider",
                borderBottomWidth: 2,
                backgroundColor: "background.glass",
                backdropFilter: "blur(5px)"
            }}
            variant="regular">
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={1}>
                    <Menu />
                </Grid>
                <Grid item={true} xs={7} container={true} justify="flex-start">
                    <Link to="/" >
                        <Button startIcon={
                            <img

                                src="/assets/lightingcolored.svg"
                                alt="zeus lighting bolt"
                                title="zeus lighting bolt"
                            />
                        }  variant="text">Zeus</Button>
                    </Link>
                </Grid>
                <Grid xs={4} container={true} item={true} spacing={3} alignItems="center">
                    <Grid item={true} >
                        <a href="https://github.com/stanleyHayes" rel="noreferrer" target="_blank">
                            <img  src="/assets/github.svg" alt="GitHub logo" title="GitHub Repository"/>
                        </a>
                    </Grid>
                    <Grid item={true}>
                        <a href="https://www.linkedin.com/in/stanley-asoku-hayford-320b67106/" rel="noreferrer" target="_blank">
                            <img  src="/assets/linkedin.svg" alt="Linkedin Account" title="LinkedIn Account"/>
                        </a>
                    </Grid>
                    <Grid item={true}>
                        <a href="https://twitter.com/stanley_hayford" rel="noreferrer" target="_blank">
                            <img  src="/assets/twitter.svg" alt="Twitter Account" title="Twitter Account"/>
                        </a>
                    </Grid>
                    <Grid item={true}>
                        <img  src="/assets/ghana.svg" alt="Ghana Flag" title="Ghana Flag"/>
                    </Grid>
                    <Grid item={true}>
                        {
                            theme === "dark" ?
                                (<Brightness7  onClick={() => dispatch(changeTheme())}/>)
                                :
                                (<Brightness4  onClick={() => dispatch(changeTheme())}
                                              color="secondary"/>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TabletHeader;