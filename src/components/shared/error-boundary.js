import React from "react";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {RefreshOutlined, HomeOutlined} from "@mui/icons-material";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true, error};
    }

    componentDidCatch(error, errorInfo) {
        if (import.meta.env.DEV) {
            console.error("ErrorBoundary caught:", error, errorInfo);
        }
    }

    handleReset = () => {
        this.setState({hasError: false, error: null});
    };

    handleReload = () => {
        window.location.href = "/";
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box sx={{minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: "background.default"}}>
                    <Container maxWidth="sm">
                        <Stack spacing={3} alignItems="center" textAlign="center">
                            <Typography variant="h1" sx={{fontSize: {xs: "4rem", md: "6rem"}, fontWeight: 900, color: "colors.accent", lineHeight: 1}}>
                                ⚡
                            </Typography>
                            <Typography variant="h4" sx={{fontWeight: 800, color: "text.primary"}}>
                                Something went wrong
                            </Typography>
                            <Typography variant="body1" sx={{color: "text.secondary", maxWidth: 440}}>
                                An unexpected error occurred. Try refreshing the page or returning home.
                            </Typography>
                            {import.meta.env.DEV && this.state.error && (
                                <Box sx={{p: 2, backgroundColor: "background.paper", borderRadius: 1, maxWidth: "100%", overflow: "auto"}}>
                                    <Typography variant="caption" sx={{color: "error.main", fontFamily: "monospace"}}>
                                        {this.state.error.toString()}
                                    </Typography>
                                </Box>
                            )}
                            <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
                                <Button
                                    variant="contained"
                                    startIcon={<RefreshOutlined />}
                                    onClick={this.handleReset}
                                    sx={{backgroundColor: "colors.accent", color: "background.default", fontWeight: 700, borderRadius: 1, textTransform: "none", px: 3}}>
                                    Try Again
                                </Button>
                                <Button
                                    variant="outlined"
                                    startIcon={<HomeOutlined />}
                                    onClick={this.handleReload}
                                    sx={{borderColor: "colors.accent", color: "colors.accent", fontWeight: 700, borderRadius: 1, textTransform: "none", px: 3}}>
                                    Go Home
                                </Button>
                            </Stack>
                        </Stack>
                    </Container>
                </Box>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
