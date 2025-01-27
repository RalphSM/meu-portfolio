import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {

    const StyledToobar = styled(Toolbar)(({ })=> ({
        display: "flex",
        justifyContent: "space-evenly"
      })) 

    return (
      <>
        <AppBar position="fixed">
            <StyledToobar>
                <MenuItem component="a" href="#home">Home</MenuItem>
                <MenuItem component="a" href="#sobre">Sobre</MenuItem>
                <MenuItem component="a" href="#projetos">Projetos</MenuItem>
            </StyledToobar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar
  