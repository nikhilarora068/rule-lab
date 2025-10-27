import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { RuleCard } from "../components/RuleCard";
import { Header } from "../components/Header";
import carIcon from "../assets/icons/car.svg";
import investmentIcon from "../assets/icons/investment.svg";
import sipIcon from "../assets/icons/sip.svg";

export const Home = () => {
  const navigate = useNavigate();

  const rules = [
    {
      icon: <img src={carIcon} alt="Car" style={{ width: 60, height: 60 }} />,
      title: "Car Buying 20-4-10",
      description: (
        <>
          20% Down payment
          <br />
          4 years of loan
          <br />
          10% spend of gross income
        </>
      ),
      onClick: () => navigate("/rule/20410"),
    },
    {
      icon: (
        <img
          src={investmentIcon}
          alt="Investment"
          style={{ width: 60, height: 60 }}
        />
      ),
      title: "Investment  10-5-3",
      description: "WIP",
      onClick: () => {},
    },
    {
      icon: <img src={sipIcon} alt="SIP" style={{ width: 60, height: 60 }} />,
      title: "SIP 7-5-3-1",
      description: "WIP",
      onClick: () => {},
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Header />
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "text.primary",
              fontSize: { xs: "1.5rem", sm: "2rem" },
            }}
          >
            Financial Rules
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontWeight: 400,
              fontSize: "0.9375rem",
            }}
          >
            Smart principles to guide your financial decisions
          </Typography>
        </Box>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          {rules.map((rule, index) => (
            <Box
              key={index}
              sx={{ flex: 1, cursor: "pointer" }}
              onClick={rule.onClick}
            >
              <RuleCard
                icon={rule.icon}
                title={rule.title}
                description={rule.description}
              />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
