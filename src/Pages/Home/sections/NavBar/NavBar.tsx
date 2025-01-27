import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, MenuItem, styled, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  const handleItemClick = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', width: '100%'}}>
            <MenuItem component="a" href="#home" sx={{ display: { xs: 'none', md: 'block' } }}>Home</MenuItem>
            <MenuItem component="a" href="#sobre" sx={{ display: { xs: 'none', md: 'block' } }}>Sobre</MenuItem>
            <MenuItem component="a" href="#skills" sx={{ display: { xs: 'none', md: 'block' } }}>Habilidades</MenuItem>
            <MenuItem component="a" href="#projetos" sx={{ display: { xs: 'none', md: 'block' } }}>Projetos</MenuItem>
          </Box>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: 100,
            backgroundColor: "#d3d3d3",
            color: "#fff",
            borderLeft: "2px solid #444",
          },
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
  );
};

export default NavBar;
