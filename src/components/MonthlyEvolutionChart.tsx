import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthlyData } from "@/lib/energyData";

interface MonthlyEvolutionChartProps {
  data: MonthlyData[];
  year: string;
}

const MonthlyEvolutionChart = ({ data, year }: MonthlyEvolutionChartProps) => {
  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Evolução Mensal do Consumo - {year}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" tickFormatter={(value) => `${value / 1000}M`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "8px",
            }}
          />
          <Legend />
          {data[0]?.Norte !== undefined && (
            <Line type="monotone" dataKey="Norte" stroke="#8b5cf6" strokeWidth={2} />
          )}
          {data[0]?.Nordeste !== undefined && (
            <Line type="monotone" dataKey="Nordeste" stroke="#10b981" strokeWidth={2} />
          )}
          {data[0]?.Sudeste !== undefined && (
            <Line type="monotone" dataKey="Sudeste" stroke="#f59e0b" strokeWidth={2} />
          )}
          {data[0]?.Sul !== undefined && (
            <Line type="monotone" dataKey="Sul" stroke="#3b82f6" strokeWidth={2} />
          )}
          {data[0]?.["Centro-Oeste"] !== undefined && (
            <Line type="monotone" dataKey="Centro-Oeste" stroke="#ef4444" strokeWidth={2} />
          )}
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default MonthlyEvolutionChart;
