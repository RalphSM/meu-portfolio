import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, MenuItem, styled, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NavBar = () => {

    const [openDrawer, setOpenDrawer] =useState(false);

    const StyledToobar = styled(Toolbar)(({ })=> ({
        display: "flex",
        justifyContent: "space-evenly"
      })) 

      const toggleDrawer = (open: boolean ) => {
        setOpenDrawer(open);
      }

    return (
      <>
        <AppBar position="fixed">
            <StyledToobar>
                <MenuItem component="a" href="#home">Home</MenuItem>
                <MenuItem component="a" href="#sobre">Sobre</MenuItem>
                <MenuItem component="a" href="#projetos">Projetos</MenuItem>

                <IconButton
                color="inherit"
                aria-label="menu"
                edge= "end"
                onClick={ ()  => toggleDrawer(false) } 
                sx={{ display:{xs:"block", md:"none"} }}
                >
                  <MenuIcon/>
                </IconButton>
            </StyledToobar>
        </AppBar>
        <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <List>
          <ListItem component="a" href="#home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component="a" href="#sobre">
            <ListItemText primary="Sobre" />
          </ListItem>
          <ListItem component="a" href="#projetos">
            <ListItemText primary="Projetos" />
          </ListItem>
        </List>
      </Drawer>
      </>
    )
  }
  
  export default NavBar
  