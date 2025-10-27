import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface RuleCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

export const RuleCard = ({ icon, title, description }: RuleCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          borderColor: "rgba(35, 131, 226, 0.3)",
        },
      }}
    >
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 2.5 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 1.5,
            height: 48,
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: "text.primary",
            fontSize: "1.25rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            lineHeight: 1.6,
            fontSize: "0.875rem",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
