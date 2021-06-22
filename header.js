import { AppBar, Toolbar, Typography,makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "primary",
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
  }));

export default function Header() {
    const { header, logo } = useStyles();
  
    const displayDesktop = () => {
        return <Toolbar>{GroceryLogo}</Toolbar>;
    };

    const GroceryLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            Grocery List
        </Typography>
    );
  
    return (
        <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
		
        </header>
    );
}