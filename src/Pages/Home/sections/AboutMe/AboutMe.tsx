import { Box, Container, Divider, Grid, styled, Typography } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const AboutMe = () => {
  const StyledSection = styled("section")(({ theme }) => ({
    backgroundColor: "#d3d3d3",
    padding: theme.spacing(8, 0),
    textAlign: "center",
  }));

  const StyledCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  return (
    <StyledSection id="sobre">
      <Container maxWidth="lg">
        <Typography variant="h3" color="textPrimary" gutterBottom>
          Sobre
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <StyledCard>
              <WorkIcon fontSize="large" />
              <Typography variant="h6" mt={2}>
                Experiencia
              </Typography>
              <Typography variant="body1">#</Typography>
              <Typography variant="body2">#</Typography>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <SchoolIcon fontSize="large" />
              <Typography variant="h6" mt={2}>
                Formação
              </Typography>
              <Typography variant="body1">#</Typography>
              <Typography variant="body2">#</Typography>
            </StyledCard>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body1" color="textSecondary" mb="100px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. 
            Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.
          </Typography>
          <Divider sx={{ marginBottom: 4 }} />
        </Box>
      </Container>
    </StyledSection>
  );
};

export default AboutMe;
