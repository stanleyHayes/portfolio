import React from "react";
import {Button, Card, CardActions, CardContent, Divider, Link as MUILink, Typography} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";
import {Tilt} from "react-tilt";

const Certification = ({certification}) => {


    return (
        <Tilt style={{height: "100%"}}>
            <Card
                variant="outlined"
                sx={{
                    height: "100%",
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 8,
                    display: "flex",
                    flexDirection: "column"
                }}>
                <CardContent sx={{flexGrow: 1}}>
                    <Typography sx={{color: "text.primary"}} variant="body2">Title</Typography>
                    <Typography
                        sx={{
                            color: "colors.accent",
                            fontFamily: "SatrevaNova",
                            fontWeight: 600
                        }} variant="h6">{certification.title}</Typography>
                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>
                    <Typography sx={{color: "text.primary"}} variant="body2">
                        Issuing Institution
                    </Typography>
                    <Typography color="textSecondary" variant="body1">{certification.institution}</Typography>
                    <Divider sx={{my: 2}} variant="fullWidth" light={true}/>
                    <Typography sx={{color: "text.primary"}} variant="body2">
                        Expiration
                    </Typography>
                    <Typography sx={{color: "text.secondary"}} variant="body2">{certification.expiry}</Typography>
                </CardContent>
                <Divider light={true} variant="fullWidth"/>
                <CardActions>

                    <Button
                        fullWidth={true}
                        size="large"
                        sx={{color: "colors.accent", textTransform: "none"}}
                        color="secondary"
                        variant="text"
                        endIcon={<ChevronRight color="secondary"/>}>
                        <MUILink
                            sx={{color: "colors.accent", textTransform: "none"}}
                            underline="none"
                            rel="noreferrer noopener"
                            target="_blank"
                            href={certification.link}>View Certification</MUILink>
                    </Button>
                </CardActions>
            </Card>
        </Tilt>
    )
}

export default Certification;