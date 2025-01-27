import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemText, MenuItem, styled, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NavBar = () => {

    const [openDrawer, setOpenDrawer] =useState(false);


    const StyledToobar = styled(Toolbar)(({ })=> ({
        display: "flex",
        justifyContent: "space-between"
      })) 

      const toggleDrawer = (open: boolean ) => {
        setOpenDrawer(open);
      }

      const handleItemClick = () => {
        toggleDrawer(false);
      };

    return (
      <>
        <AppBar position="fixed">
            <StyledToobar>
              <div>  
                <MenuItem component="a" href="#home" sx={{ display: { xs: 'none', md: 'block' } }}>Home</MenuItem>
                <MenuItem component="a" href="#sobre" sx={{ display: { xs: 'none', md: 'block' } }}>Sobre</MenuItem>
                <MenuItem component="a" href="#skills" sx={{ display: { xs: 'none', md: 'block' } }}>Habilidades</MenuItem>
                <MenuItem component="a" href="#projetos" sx={{ display: { xs: 'none', md: 'block' } }}>Projetos</MenuItem>
              </div>
              <IconButton
              color="inherit"
              aria-label="menu"
              edge= "end"
              onClick={ ()  => toggleDrawer(true) } 
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
        sx={{
         '& .MuiDrawer-papper': {
            width: 250,
            backgroundColor: "#333",
            color: "#fff",
            borderLeft: "2px solid #444"
         }
         

        }}
      >
        <List>
        <ListItem component="a" href="#home" sx={{ padding: '15px 20px', color: '#000', '&:hover': { backgroundColor: '#444' } }} onClick={handleItemClick}>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider sx={{ backgroundColor: '#444' }} />

        <ListItem component="a" href="#sobre" sx={{ padding: '15px 20px', color: '#000', '&:hover': { backgroundColor: '#444' } }} onClick={handleItemClick}>
          <ListItemText primary="Sobre" />
        </ListItem>
        <Divider sx={{ backgroundColor: '#444' }} />

        <ListItem component="a" href="#skills" sx={{ padding: '15px 20px', color: '#000', '&:hover': { backgroundColor: '#444' } }} onClick={handleItemClick}>
          <ListItemText primary="Habilidades" />
        </ListItem>
        <Divider sx={{ backgroundColor: '#444' }} />

        <ListItem component="a" href="#projetos" sx={{ padding: '15px 20px', color: '#000', '&:hover': { backgroundColor: '#444' } }} onClick={handleItemClick}>
          <ListItemText primary="Projetos" />
        </ListItem>
        <Divider sx={{ backgroundColor: '#444' }} />
        </List>

      </Drawer>
      </>
    )
  }
  
  export default NavBar
  