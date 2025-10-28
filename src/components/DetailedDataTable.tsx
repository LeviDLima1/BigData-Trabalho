import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RegionData } from "@/lib/energyData";

interface DetailedDataTableProps {
  data: RegionData[];
}

const DetailedDataTable = ({ data }: DetailedDataTableProps) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };
  return (
    <Card className="bg-card border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Dados Detalhados
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead className="text-muted-foreground">REGIÃO</TableHead>
              <TableHead className="text-muted-foreground">CONSUMO (MWh)</TableHead>
              <TableHead className="text-muted-foreground">CONSUMO (TWh)</TableHead>
              <TableHead className="text-muted-foreground">PARTICIPAÇÃO (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.region} className="border-border">
                <TableCell className="font-medium text-foreground">
                  {row.region}
                </TableCell>
                <TableCell className="text-foreground">
                  {formatNumber(row.consumptionMWh)}
                </TableCell>
                <TableCell className="text-foreground">
                  {formatNumber(row.consumptionTWh)}
                </TableCell>
                <TableCell className="text-foreground">
                  {formatNumber(row.participation)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default DetailedDataTable;
