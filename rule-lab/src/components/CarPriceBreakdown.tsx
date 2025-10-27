import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PriceData {
  downPayment: number;
  loanAmount: number;
}

export const CarPriceBreakdown = ({ downPayment, loanAmount }: PriceData) => {
  const data = {
    labels: ["Total Car Price"],
    datasets: [
      {
        label: "Down Payment",
        data: [downPayment],
        backgroundColor: "rgba(35, 131, 226, 0.8)",
      },
      {
        label: "Loan Amount",
        data: [loanAmount],
        backgroundColor: "rgba(100, 116, 139, 0.8)",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 15,
          font: {
            size: 11,
            family: "'Inter', -apple-system, sans-serif",
          },
        },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: function (context: any) {
            return `${
              context.dataset.label
            }: ₹${context.parsed.x.toLocaleString("en-IN")}`;
          },
        },
        font: {
          size: 11,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (value: number | string) {
            const numVal =
              typeof value === "number" ? value : parseFloat(value.toString());
            return "₹" + numVal.toLocaleString("en-IN");
          },
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <Box
      sx={{
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Bar data={data} options={options} />
    </Box>
  );
};
