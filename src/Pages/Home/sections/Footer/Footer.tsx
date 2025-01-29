import { Box, Container, Divider, IconButton, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import { styled } from "@mui/system";

const Footer = () => {
  const StyledFooter = styled("footer")(({ theme }) => ({
    backgroundColor: "#333",
    color: "#fff",
    padding: theme.spacing(4, 0),
    textAlign: "center",
  }));

  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" gap={2} mb={2}>
          <IconButton href="https://github.com/RalphSM" target="_blank" color="inherit">
            <GitHub />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/ralph-mateus-931a05251/" target="_blank" color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton href="mailto:email@example.com" color="inherit">
            <Email />
          </IconButton>
        </Box>
        <Typography variant="body2">&copy; 2025 Ralph S Mateus - All rights reserved</Typography>
        <Divider sx={{ marginTop: 2, backgroundColor: "#fff" }} />
      </Container>
    </StyledFooter>
  );
};

export default Footer;
