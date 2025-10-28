import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterBarProps {
  selectedYear: string;
  selectedMonth: string;
  selectedRegion: string;
  selectedSubsystem: string;
  selectedVisualization: string;
  onYearChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onRegionChange: (value: string) => void;
  onSubsystemChange: (value: string) => void;
  onVisualizationChange: (value: string) => void;
}

const FilterBar = ({
  selectedYear,
  selectedMonth,
  selectedRegion,
  selectedSubsystem,
  selectedVisualization,
  onYearChange,
  onMonthChange,
  onRegionChange,
  onSubsystemChange,
  onVisualizationChange,
}: FilterBarProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Ano
        </label>
        <Select value={selectedYear} onValueChange={onYearChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Mês
        </label>
        <Select value={selectedMonth} onValueChange={onMonthChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="jan">Janeiro</SelectItem>
            <SelectItem value="fev">Fevereiro</SelectItem>
            <SelectItem value="mar">Março</SelectItem>
            <SelectItem value="abr">Abril</SelectItem>
            <SelectItem value="mai">Maio</SelectItem>
            <SelectItem value="jun">Junho</SelectItem>
            <SelectItem value="jul">Julho</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Região
        </label>
        <Select value={selectedRegion} onValueChange={onRegionChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="norte">Norte</SelectItem>
            <SelectItem value="nordeste">Nordeste</SelectItem>
            <SelectItem value="sudeste">Sudeste</SelectItem>
            <SelectItem value="sul">Sul</SelectItem>
            <SelectItem value="centro-oeste">Centro-Oeste</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Subsistema
        </label>
        <Select value={selectedSubsystem} onValueChange={onSubsystemChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          Visualização
        </label>
        <Select
          value={selectedVisualization}
          onValueChange={onVisualizationChange}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="regiao">Por Região</SelectItem>
            <SelectItem value="subsistema">Por Subsistema</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilterBar;
