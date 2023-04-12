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
                    fontWeight: pathname === path ? 600 : 400,
                    paddingX: 1,
                    py: 0.5,
                    fontFamily: pathname === path ? "SatrevaNova" : "Outfit",
                    color: pathname === path ? "colors.accent" : "text.primary",
                    borderColor: pathname === path ? "light.accent" : false,
                    borderWidth: pathname === path ? 1 : 0,
                    borderStyle: pathname === path ? "solid" : "none",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 12,
                    borderBottomLeftRadius: 0,
                    "&:hover": {
                        color: "colors.accent",
                        transition: "all 300ms",
                        borderColor: "light.accent",
                        borderWidth: 1,
                        borderStyle: "solid"
                    }
                }}>
                {label}
            </Typography>
        </Link>
    )
}

export default NavigationLink;