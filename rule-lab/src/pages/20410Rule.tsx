import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { ExpensePieChart } from "../components/ExpensePieChart";
import { CarPriceBreakdown } from "../components/CarPriceBreakdown";

export const Rule20410 = () => {
  const [carPrice, setCarPrice] = useState(800000);
  const [monthlyIncome, setMonthlyIncome] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(48);
  const [interestRate, setInterestRate] = useState(6.5);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [additionalExpenses, setAdditionalExpenses] = useState(5000);

  // Calculations
  const downPayment = (carPrice * downPaymentPercent) / 100;
  const loanAmount = carPrice - downPayment;

  // Monthly payment calculation
  const monthlyRate = interestRate / 100 / 12;
  const monthlyPayment =
    loanAmount > 0
      ? (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm))) /
        (Math.pow(1 + monthlyRate, loanTerm) - 1)
      : 0;

  // Total monthly expenses (payment + additional expenses like insurance, fuel, maintenance)
  const totalMonthlyExpenses = monthlyPayment + additionalExpenses;

  // Break down additional expenses for display (proportional split)
  const insurance = additionalExpenses * 0.4;
  const fuel = additionalExpenses * 0.35;
  const maintenance = additionalExpenses * 0.25;

  // Rule thresholds
  const maxMonthlyExpenses = monthlyIncome * 0.1;
  const isWithinRule = totalMonthlyExpenses <= maxMonthlyExpenses;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Header title="Car Buying 20-4-10" />
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        {/* Header with back button */}
        <Box sx={{ mb: 2 }}>
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{ mb: 1, color: "text.secondary" }}
          >
            Back
          </Button>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: 700, mb: 0.25, fontSize: "1.375rem" }}
          >
            20-4-10 Rule Calculator
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.8125rem" }}
          >
            Calculate whether a car purchase fits the 20-4-10 rule for smart car
            buying
          </Typography>
        </Box>

        {/* Input Section */}
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 2, fontSize: "0.9375rem" }}
          >
            Your Car Details
          </Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            {/* Left Column */}
            <Box sx={{ flex: 1 }}>
              {/* Car Price */}
              <Box sx={{ mb: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    Car Price
                  </Typography>
                  <TextField
                    label="Amount"
                    type="number"
                    value={carPrice}
                    onChange={(e) => setCarPrice(Number(e.target.value))}
                    size="small"
                    sx={{ width: 120 }}
                    inputProps={{ min: 300000, max: 3000000 }}
                  />
                </Box>
                <Slider
                  value={carPrice}
                  onChange={(_, newValue) => setCarPrice(newValue as number)}
                  min={300000}
                  max={3000000}
                  step={50000}
                  marks={[
                    { value: 300000, label: "3L" },
                    { value: 1500000, label: "15L" },
                    { value: 3000000, label: "30L" },
                  ]}
                  size="small"
                  sx={{
                    "& .MuiSlider-markLabel": {
                      fontSize: "0.65rem",
                    },
                  }}
                />
              </Box>

              {/* Monthly Income */}
              <Box sx={{ mb: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    Monthly Gross Income
                  </Typography>
                  <TextField
                    label="Amount"
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    size="small"
                    sx={{ width: 120 }}
                    inputProps={{ min: 30000, max: 500000 }}
                  />
                </Box>
                <Slider
                  value={monthlyIncome}
                  onChange={(_, newValue) =>
                    setMonthlyIncome(newValue as number)
                  }
                  min={30000}
                  max={500000}
                  step={25000}
                  marks={[
                    { value: 30000, label: "30k" },
                    { value: 200000, label: "2L" },
                    { value: 500000, label: "5L" },
                  ]}
                  size="small"
                />
              </Box>

              {/* Loan Term */}
              <Box sx={{ mb: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    Loan Term
                  </Typography>
                  <TextField
                    label="Months"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    size="small"
                    sx={{ width: 120 }}
                    inputProps={{ min: 12, max: 84 }}
                  />
                </Box>
                <Slider
                  value={loanTerm}
                  onChange={(_, newValue) => setLoanTerm(newValue as number)}
                  min={12}
                  max={84}
                  step={12}
                  marks={[
                    { value: 12, label: "1yr" },
                    { value: 36, label: "3yr" },
                    { value: 48, label: "4yr" },
                    { value: 72, label: "6yr" },
                  ]}
                  size="small"
                />
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1 }}>
              {/* Interest Rate */}
              <Box sx={{ mb: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    Interest Rate
                  </Typography>
                  <TextField
                    label="%"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    size="small"
                    sx={{ width: 120 }}
                    inputProps={{ min: 0, max: 15, step: 0.1 }}
                  />
                </Box>
                <Slider
                  value={interestRate}
                  onChange={(_, newValue) =>
                    setInterestRate(newValue as number)
                  }
                  min={0}
                  max={15}
                  step={0.1}
                  marks={[
                    { value: 0, label: "0%" },
                    { value: 7.5, label: "7.5%" },
                    { value: 15, label: "15%" },
                  ]}
                  size="small"
                />
              </Box>

              {/* Down Payment Percent */}
              <Box sx={{ mb: 1.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, fontSize: "0.75rem" }}
                  >
                    Down Payment
                  </Typography>
                  <TextField
                    label="%"
                    type="number"
                    value={downPaymentPercent}
                    onChange={(e) =>
                      setDownPaymentPercent(Number(e.target.value))
                    }
                    size="small"
                    sx={{ width: 120 }}
                    inputProps={{ min: 0, max: 50 }}
                  />
                </Box>
                <Slider
                  value={downPaymentPercent}
                  onChange={(_, newValue) =>
                    setDownPaymentPercent(newValue as number)
                  }
                  min={0}
                  max={50}
                  step={1}
                  marks={[
                    { value: 0, label: "0%" },
                    { value: 20, label: "20%" },
                    { value: 50, label: "50%" },
                  ]}
                  size="small"
                />
              </Box>

              {/* Additional Expenses */}
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, fontSize: "0.8125rem" }}
                    >
                      Additional Expenses
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "text.secondary",
                        fontSize: "0.6875rem",
                        display: "block",
                      }}
                    >
                      Insurance, Fuel, etc.
                    </Typography>
                  </Box>
                  <TextField
                    label="Amount"
                    type="number"
                    value={additionalExpenses}
                    onChange={(e) =>
                      setAdditionalExpenses(Number(e.target.value))
                    }
                    size="small"
                    sx={{ width: 120 }}
                    inputProps={{ min: 0, max: 50000 }}
                  />
                </Box>
                <Slider
                  value={additionalExpenses}
                  onChange={(_, newValue) =>
                    setAdditionalExpenses(newValue as number)
                  }
                  min={0}
                  max={50000}
                  step={1000}
                  marks={[
                    { value: 0, label: "0" },
                    { value: 25000, label: "25k" },
                    { value: 50000, label: "50k" },
                  ]}
                  size="small"
                />
              </Box>
            </Box>
          </Stack>
        </Paper>

        {/* Results and Charts Section */}
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 600, mb: 2, fontSize: "0.9375rem" }}
          >
            Your Results
          </Typography>

          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            {/* Left Column - Results */}
            <Box sx={{ flex: 1 }}>
              {/* Rule Check */}
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{
                    mb: 0.75,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    display: "block",
                  }}
                >
                  10% Rule Check
                </Typography>
                <Box
                  sx={{
                    p: 1,
                    bgcolor: isWithinRule
                      ? "rgba(76, 175, 80, 0.1)"
                      : "rgba(225, 98, 89, 0.1)",
                    borderRadius: 1,
                    textAlign: "center",
                    border: `1px solid ${
                      isWithinRule
                        ? "rgba(76, 175, 80, 0.3)"
                        : "rgba(225, 98, 89, 0.3)"
                    }`,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, mb: 0.25, fontSize: "0.8125rem" }}
                  >
                    {isWithinRule ? "✓ Within Rule" : "✗ Over the Limit"}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "0.6875rem",
                      color: "text.secondary",
                      display: "block",
                    }}
                  >
                    Spending{" "}
                    {((totalMonthlyExpenses / monthlyIncome) * 100).toFixed(1)}%
                    of income
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ display: "block", mt: 0.25, fontSize: "0.625rem" }}
                  >
                    Max: 10% (₹{maxMonthlyExpenses.toFixed(2)})
                  </Typography>
                </Box>
              </Box>

              {/* Down Payment */}
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{
                    mb: 0.75,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    display: "block",
                  }}
                >
                  {downPaymentPercent}% Down Payment
                </Typography>
                <Box
                  sx={{
                    p: 1,
                    bgcolor: "rgba(35, 131, 226, 0.08)",
                    borderRadius: 1,
                    textAlign: "center",
                    border: "1px solid rgba(35, 131, 226, 0.15)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, fontSize: "1.125rem" }}
                  >
                    ₹{downPayment.toLocaleString("en-IN")}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontSize: "0.6875rem" }}
                  >
                    Required amount
                  </Typography>
                </Box>
              </Box>

              {/* Monthly Payment */}
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{
                    mb: 0.75,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    display: "block",
                  }}
                >
                  Monthly Loan Payment
                </Typography>
                <Box
                  sx={{
                    p: 1,
                    bgcolor: "rgba(0, 0, 0, 0.02)",
                    borderRadius: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, fontSize: "1rem" }}
                  >
                    ₹{monthlyPayment.toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              {/* Total Monthly Expenses */}
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{
                    mb: 0.75,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    display: "block",
                  }}
                >
                  Total Monthly Expenses
                </Typography>
                <Box
                  sx={{
                    p: 1,
                    bgcolor: "rgba(0, 0, 0, 0.02)",
                    borderRadius: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ mb: 0.25, fontSize: "0.6875rem" }}
                  >
                    Loan: ₹{monthlyPayment.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 0.25,
                      color: "text.secondary",
                      fontSize: "0.6875rem",
                      display: "block",
                    }}
                  >
                    Insurance: ₹{insurance.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 0.25,
                      color: "text.secondary",
                      fontSize: "0.6875rem",
                      display: "block",
                    }}
                  >
                    Fuel: ₹{fuel.toFixed(2)}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      mb: 0.75,
                      color: "text.secondary",
                      fontSize: "0.6875rem",
                      display: "block",
                    }}
                  >
                    Maintenance: ₹{maintenance.toFixed(2)}
                  </Typography>
                  <Box
                    sx={{
                      pt: 0.75,
                      borderTop: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, fontSize: "0.875rem" }}
                    >
                      Total: ₹{totalMonthlyExpenses.toFixed(2)}/month
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Right Column - Charts */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 1.5 }}>
                <Typography
                  variant="caption"
                  sx={{
                    mb: 0.75,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Monthly Expenses Breakdown
                </Typography>
                <ExpensePieChart
                  loanPayment={monthlyPayment}
                  insurance={insurance}
                  fuel={fuel}
                  maintenance={maintenance}
                />
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{
                    mb: 0.75,
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Price Breakdown
                </Typography>
                <CarPriceBreakdown
                  downPayment={downPayment}
                  loanAmount={loanAmount}
                />
              </Box>
            </Box>
          </Stack>
        </Paper>

        {/* Rule breakdown */}
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "rgba(35, 131, 226, 0.05)",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, mb: 1, fontSize: "0.8125rem" }}
          >
            The 20-4-10 Rule Breakdown
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={1.5}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.8125rem" }}
              >
                Down Payment (20% recommended)
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontSize: "0.8125rem" }}
              >
                Put down at least 20% to reduce your loan amount and avoid being
                upside-down
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.8125rem" }}
              >
                4-Year Loan Term
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontSize: "0.8125rem" }}
              >
                Finance for no more than 4 years to pay less interest and
                maintain vehicle value
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, mb: 0.5, fontSize: "0.8125rem" }}
              >
                10% of Gross Income
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontSize: "0.8125rem" }}
              >
                Keep total car costs under 10% of your monthly gross income
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};
