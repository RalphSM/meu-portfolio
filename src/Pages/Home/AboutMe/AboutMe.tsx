import { Box, Container, Grid, styled, Typography } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import React from "react";

const AboutMe = () => {
  const StyledSection = styled("section")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
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
    <StyledSection>
      <Container maxWidth="lg">
        <Typography variant="h3" color="textPrimary" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <StyledCard>
              <WorkIcon fontSize="large" />
              <Typography variant="h6" mt={2}>
                Experience
              </Typography>
              <Typography variant="body1">#</Typography>
              <Typography variant="body2">#</Typography>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <SchoolIcon fontSize="large" />
              <Typography variant="h6" mt={2}>
                Education
              </Typography>
              <Typography variant="body1">#</Typography>
              <Typography variant="body2">#</Typography>
            </StyledCard>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="body1" color="textSecondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. 
            Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.
          </Typography>
        </Box>
      </Container>
    </StyledSection>
  );
};

export default AboutMe;
