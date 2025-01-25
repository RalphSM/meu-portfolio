import { Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from "../../../../assets/Images/Avatar.jpg";
import StyledButton from "../../../../Components/StyledButton/StyledButton";

const Hero = () => {

  const StyleHero = styled("div")(({ theme })=> ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }))

  const StyleImg = styled("img")(({ theme })=> ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`

  })) 
  
  return (
    <>
      <StyleHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <StyleImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center">Ralph S Mateus</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Softwere Engineer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <DownloadIcon/>  
                      <Typography>
                        Dowload CV
                      </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <EmailIcon/>
                      <Typography>
                        Contact me
                      </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyleHero>
    </>
  )
}

export default Hero;
