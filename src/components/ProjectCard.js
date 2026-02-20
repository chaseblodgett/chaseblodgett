import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Stack,
  IconButton,
  Link
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

export default function ProjectCard({name, description, technologies = [], picture, githubUrl, liveUrl}) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "2px solid rgba(129, 140, 248, 0.5)",
        color: "#fff",
      }}
    >
    <Box
      sx={{
        width: { xs: "100%", lg: 550 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          border: "2px solid rgba(255,255,255,0.15)",
          borderRadius: 3,
          backgroundColor: "rgba(255,255,255,0.02)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={picture}
          alt={name}
          sx={{
            width: "auto",
            height: "auto",
            objectFit: "contain",
            borderRadius: 2,
          }}
        />
      </Box>
    </Box>

    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        textAlign: "left",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#cbd5e1" , fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {name}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                bgcolor: "#a855f7",
                color: "#fff",
                fontFamily: "'Rubik', sans-serif"
              }}
            />
          ))}
        </Stack>

        <Typography
          variant="body1"
          sx={{ color: "rgba(255,255,255,0.8)" , fontFamily: "'Rubik', sans-serif"}}
        >
          {description}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1} mt={2}>
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener">
            <IconButton sx={{ color: "#fff" }}>
              <GitHubIcon/>
            </IconButton>
          </Link>
        )}

        {liveUrl && (
          <Link href={liveUrl} target="_blank" rel="noopener">
            <IconButton sx={{ color: "#fff" }}>
              <PublicIcon />
            </IconButton>
          </Link>
        )}
      </Box>
    </CardContent>
  </Card>
  );
}
