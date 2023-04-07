import {Box, CardMedia, CircularProgress, Container, Stack, Typography} from "@mui/material";
import logo from "../../assets/images/logo/logo.png";

const Splash = () => {
    return (
        <Box sx={{maxHeight: "100vh", height: "100vh", display: "flex", alignItems: "center"}}>
            <Container>
                <Stack spacing={3}>
                    <Box>
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{
                                textTransform: "uppercase",
                                color: "text.primary",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4,
                            }}>
                            This is Olympus
                        </Typography>
                    </Box>
                    <Box>
                        <Stack justifyContent="center" direction="row" spacing={3}>
                            <CardMedia
                                src={logo}
                                sx={{
                                    height: 150,
                                    objectPosition: "center",
                                    objectFit: "contain"
                                }}
                                component="img"
                            />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack justifyContent="center" direction="row" spacing={3}>
                            <CircularProgress variant="indeterminate" color="secondary" size={50}/>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                textTransform: "none",
                                color: "text.secondary",
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4,
                            }}>
                            Setting up. Please wait...
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Splash;