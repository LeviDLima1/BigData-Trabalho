import { useState, useMemo } from "react";
import { Activity, MapPin, Calendar, Database } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import FilterBar from "@/components/FilterBar";
import MonthlyEvolutionChart from "@/components/MonthlyEvolutionChart";
import RegionDistributionChart from "@/components/RegionDistributionChart";
import RegionConsumptionChart from "@/components/RegionConsumptionChart";
import DetailedDataTable from "@/components/DetailedDataTable";
import {
  energyDataByYear,
  filterDataByRegion,
  filterMonthlyDataByRegion,
  filterMonthlyDataByMonth,
  calculateTotalFromRegions,
} from "@/lib/energyData";

const Index = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("todos");
  const [selectedRegion, setSelectedRegion] = useState("todos");
  const [selectedSubsystem, setSelectedSubsystem] = useState("todos");
  const [selectedVisualization, setSelectedVisualization] = useState("regiao");

  // Dados filtrados baseados nas seleções
  const filteredData = useMemo(() => {
    const yearData = energyDataByYear[selectedYear];
    if (!yearData) return null;

    // Filtrar dados de região
    let regions = filterDataByRegion(yearData.regions, selectedRegion);

    // Filtrar dados mensais por região e mês
    let monthly = filterMonthlyDataByRegion(yearData.monthly, selectedRegion);
    monthly = filterMonthlyDataByMonth(monthly, selectedMonth);

    // Calcular total baseado nos dados filtrados
    const total = calculateTotalFromRegions(regions);

    return {
      regions,
      monthly,
      total: total.toFixed(1),
      activeRegions: regions.length,
    };
  }, [selectedYear, selectedMonth, selectedRegion]);

  if (!filteredData) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-foreground">Carregando dados...</p>
    </div>;
  }

  // Encontrar região com maior consumo para análise
  const topRegion = filteredData.regions.reduce((prev, current) =>
    prev.participation > current.participation ? prev : current
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Header */}
        <header className="mb-6 pb-6 border-b border-border">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Dashboard Consumo de Energia Elétrica
              </h1>
              <p className="text-sm text-muted-foreground">
                Fonte: EPE - Empresa de Pesquisa Energética
              </p>
              <p className="text-sm text-muted-foreground">
                Última atualização: 22/06/2025 | Dados: 2004-2025
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-primary">{filteredData.total} TWh</p>
              <p className="text-sm text-muted-foreground">Consumo Total</p>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="mb-6 p-6 bg-card border border-border rounded-lg">
          <FilterBar
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            selectedRegion={selectedRegion}
            selectedSubsystem={selectedSubsystem}
            selectedVisualization={selectedVisualization}
            onYearChange={setSelectedYear}
            onMonthChange={setSelectedMonth}
            onRegionChange={setSelectedRegion}
            onSubsystemChange={setSelectedSubsystem}
            onVisualizationChange={setSelectedVisualization}
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatsCard
            title="Consumo Total"
            value={`${filteredData.total} TWh`}
            icon={Activity}
            iconBgColor="bg-blue-600"
          />
          <StatsCard
            title="Regiões Ativas"
            value={filteredData.activeRegions.toString()}
            icon={MapPin}
            iconBgColor="bg-green-600"
          />
          <StatsCard
            title="Período"
            value={selectedYear}
            icon={Calendar}
            iconBgColor="bg-yellow-600"
          />
          <StatsCard
            title="Dados Disponíveis"
            value="2004-2025"
            icon={Database}
            iconBgColor="bg-purple-600"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MonthlyEvolutionChart data={filteredData.monthly} year={selectedYear} />
          <RegionDistributionChart data={filteredData.regions} year={selectedYear} />
        </div>

        <div className="mb-6">
          <RegionConsumptionChart data={filteredData.regions} year={selectedYear} />
        </div>

        {/* Detailed Data Table */}
        <div className="mb-6">
          <DetailedDataTable data={filteredData.regions} />
        </div>

        {/* Automatic Analysis */}
        <div className="p-6 bg-card border border-border rounded-lg">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-blue-500">📊</span>
            <h3 className="text-lg font-semibold text-foreground">
              Análise Automática
            </h3>
          </div>
          <p className="text-muted-foreground">
            Em {selectedYear}, o consumo total de energia elétrica foi de{" "}
            {filteredData.total} TWh. A região {topRegion.region} liderou o consumo com{" "}
            {topRegion.participation.toFixed(2)}% do total{" "}
            {selectedRegion === "todos" ? "nacional" : "filtrado"}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
