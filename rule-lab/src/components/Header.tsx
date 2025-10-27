import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import logo from "../assets/icons/rule-lab.png";

interface HeaderProps {
  title?: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        mb: 3,
      }}
    >
      <Toolbar>
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Rule Lab"
            sx={{
              height: 100,
              width: "auto",
              mr: 1,
            }}
          />
        </Box>
        {title && (
          <Box sx={{ ml: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};
