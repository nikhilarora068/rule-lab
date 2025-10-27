import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpenseData {
  loanPayment: number;
  insurance: number;
  fuel: number;
  maintenance: number;
}

export const ExpensePieChart = ({
  loanPayment,
  insurance,
  fuel,
  maintenance,
}: ExpenseData) => {
  const data = {
    labels: ["Loan", "Insurance", "Fuel", "Maintenance"],
    datasets: [
      {
        data: [loanPayment, insurance, fuel, maintenance],
        backgroundColor: [
          "rgba(35, 131, 226, 0.8)", // Blue for loan
          "rgba(76, 175, 80, 0.8)", // Green for insurance
          "rgba(255, 152, 0, 0.8)", // Orange for fuel
          "rgba(156, 39, 176, 0.8)", // Purple for maintenance
        ],
        borderColor: [
          "rgba(35, 131, 226, 1)",
          "rgba(76, 175, 80, 1)",
          "rgba(255, 152, 0, 1)",
          "rgba(156, 39, 176, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 8,
          font: {
            size: 10,
            family: "'Inter', -apple-system, sans-serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function (context: any) {
            const label = context.label || "";
            const value = context.parsed;
            const total = context.dataset.data.reduce(
              (a: number, b: number) => a + b,
              0
            );
            const percentage = ((value / total) * 100).toFixed(1);
            return `${label}: ₹${value.toLocaleString(
              "en-IN"
            )} (${percentage}%)`;
          },
        },
        font: {
          size: 10,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Doughnut data={data} options={options} />
    </Box>
  );
};
