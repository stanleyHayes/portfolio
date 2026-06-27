import {Button, Grid, Toolbar} from "@mui/material";
import React from "react";
import {Brightness4, Brightness7, Menu} from "@mui/icons-material";
import {Link} from "react-router";
import {getUiState} from "../../features/ui/ui-slice";
import {useSelector} from "react-redux";
import useThemeTransition from "../../hooks/use-theme-transition";
import brandLogo from "../../assets/images/logo/logo.png";

const TabletHeader = () => {

    const {theme} = useSelector(getUiState);
    const toggleTheme = useThemeTransition();

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
            <Grid
                container
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Grid size={{xs: 1}}>
                    <Menu />
                </Grid>
                <Grid size={{xs: 7}} container sx={{
                    justifyContent: "flex-start"
                }}>
                    <Link to="/" >
                        <Button startIcon={
                            <img

                                src={brandLogo}
                                alt="Zeus logo"
                                title="Zeus logo"
                                style={{width: 22, height: 22, objectFit: "contain"}}
                            />
                        }  variant="text">Zeus</Button>
                    </Link>
                </Grid>
                <Grid size={{xs: 4}} container spacing={3} sx={{
                    alignItems: "center"
                }}>
                    <Grid>
                        <a href="https://github.com/stanleyHayes" rel="noreferrer" target="_blank">
                            <img  src="/assets/github.svg" alt="GitHub logo" title="GitHub Repository"/>
                        </a>
                    </Grid>
                    <Grid>
                        <a href="https://www.linkedin.com/in/stanley-asoku-hayford-320b67106/" rel="noreferrer" target="_blank">
                            <img  src="/assets/linkedin.svg" alt="Linkedin Account" title="LinkedIn Account"/>
                        </a>
                    </Grid>
                    <Grid>
                        <a href="https://twitter.com/stanley_hayford" rel="noreferrer" target="_blank">
                            <img  src="/assets/twitter.svg" alt="Twitter Account" title="Twitter Account"/>
                        </a>
                    </Grid>
                    <Grid>
                        <img  src="/assets/ghana.svg" alt="Ghana Flag" title="Ghana Flag"/>
                    </Grid>
                    <Grid>
                        {
                            theme === "dark" ?
                                (<Brightness7  onClick={toggleTheme}/>)
                                :
                                (<Brightness4  onClick={toggleTheme}
                                              color="secondary"/>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default TabletHeader;
