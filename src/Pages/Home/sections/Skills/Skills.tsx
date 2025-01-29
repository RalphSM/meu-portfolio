import { Box, Container, Grid, styled, Typography, Button } from "@mui/material";

const Skills = () => {
  const StyledSkillButton = styled(Button)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1, 2),
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  }));

  return (
    <Box py={0} bgcolor="#d3d3d3" pt="60px" pb={10} id="skills">
      <Container maxWidth="lg">
        <Typography variant="h3" color="textPrimary" textAlign="center" gutterBottom>
          Habilidades
        </Typography>
        <Grid container spacing={2} justifyContent="center" mt={4}>
          {[
            "Javascript",
            "Typescript",
            "React",
            "Phyton",
            "Git",
            "HTML",
            "CSS",
            "Bootstrap",
          ].map((skill) => (
            <Grid item key={skill} xs={6} sm={4} md={3} textAlign="center">
              <StyledSkillButton variant="outlined" fullWidth>
                {skill}
              </StyledSkillButton>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
