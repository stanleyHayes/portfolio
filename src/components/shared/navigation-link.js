import {Link, useLocation} from "react-router-dom";
import {Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {toggleDrawer} from "../../features/ui/ui-slice";

const NavigationLink = ({path, label}) => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();

    return (
        <Link
            onClick={() => dispatch(toggleDrawer(false))}
            to={path}
            style={{textDecoration: "none"}}>
            <Typography
                variant="body1"
                sx={{
                    fontWeight: pathname === path ? 600: 400,
                    fontFamily: pathname === path ? "SatrevaNova": "Outfit",
                    color: pathname === path ? "colors.accent" : "text.primary",
                    "&:hover": {color: "colors.accent", transition: "all 300ms"}
                }}>
                {label}
            </Typography>
        </Link>
    )
}

export default NavigationLink;