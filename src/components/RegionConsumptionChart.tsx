import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RegionData } from "@/lib/energyData";

interface RegionConsumptionChartProps {
  data: RegionData[];
  year: string;
}

const RegionConsumptionChart = ({ data, year }: RegionConsumptionChartProps) => {
  const chartData = data.map((region) => ({
    region: region.region,
    consumption: region.consumptionMWh / 1000,
  }));
  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Consumo por Região - {year}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="region" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" tickFormatter={(value) => `${value / 1000}M`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "1px solid #374151",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="consumption" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RegionConsumptionChart;
