import { Box, Container, Grid, Typography, styled, Button, Card, CardContent, CardMedia } from "@mui/material";
import theme from "../../../../theme";

const Projects = () => {
  const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    textTransform: "none",
    fontWeight: "bold",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.contrastText,
    },
  }));

  const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
    borderRadius: 8,
    overflow: "hidden",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#4f4f4f",
    },
  }));

  const projects = [
    {
      title: "Project Example 1",
      date: "Jul 2023 - Dez 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique.",
      technologies: "JavaScript, HTML, CSS, Canvas Graphics",
      image: "https://via.placeholder.com/400",
      codeLink: "#",
    },
    {
      title: "Project Example 2",
      date: "Jul 2023 - Dez 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique.",
      technologies: "JavaScript, HTML, CSS, Canvas Graphics",
      image: "https://via.placeholder.com/400",
      projectLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <Box py={8} sx={{  backgroundColor: theme.palette.primary.main, }}>
      <Container maxWidth="lg">
        <Typography variant="h3" color="#ffffff" textAlign="center" gutterBottom>
          Projetos
        </Typography>
        <Grid container spacing={4} mt={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography variant="h5" color="inherit">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    {project.date}
                  </Typography>
                  <Typography variant="body2" color="inherit" mt={2}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="inherit" mt={2}>
                    <strong>Technologies:</strong> {project.technologies}
                  </Typography>
                  <Grid container spacing={2} mt={2}>
                    <Grid item xs={6}>
                      <StyledButton variant="outlined" fullWidth href="#" sx={{ color: "#ffffff", borderColor: "#ffffff" }}>
                        View Project
                      </StyledButton>
                    </Grid>
                    <Grid item xs={6}>
                      <StyledButton variant="outlined" fullWidth href="#" sx={{ color: "#ffffff", borderColor: "#ffffff" }}>
                        View Code
                      </StyledButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
