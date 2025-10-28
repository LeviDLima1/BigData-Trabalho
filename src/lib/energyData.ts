export interface RegionData {
  region: string;
  consumptionMWh: number;
  consumptionTWh: number;
  participation: number;
}

export interface MonthlyData {
  month: string;
  Norte: number;
  Nordeste: number;
  Sudeste: number;
  Sul: number;
  "Centro-Oeste": number;
}

export const energyDataByYear: Record<string, {
  regions: RegionData[];
  monthly: MonthlyData[];
  total: number;
  activeRegions: number;
}> = {
  "2025": {
    total: 327.9,
    activeRegions: 5,
    regions: [
      {
        region: "Norte",
        consumptionMWh: 25302958.855,
        consumptionTWh: 25.30,
        participation: 7.72,
      },
      {
        region: "Nordeste",
        consumptionMWh: 58575952.37,
        consumptionTWh: 58.58,
        participation: 17.86,
      },
      {
        region: "Sudeste",
        consumptionMWh: 155625272.031,
        consumptionTWh: 155.83,
        participation: 47.52,
      },
      {
        region: "Sul",
        consumptionMWh: 62269980.487,
        consumptionTWh: 62.27,
        participation: 18.39,
      },
      {
        region: "Centro-Oeste",
        consumptionMWh: 25963053.252,
        consumptionTWh: 25.96,
        participation: 7.92,
      },
    ],
    monthly: [
      { month: "JAN", Norte: 6500, Nordeste: 7500, Sudeste: 24000, Sul: 6200, "Centro-Oeste": 4800 },
      { month: "FEV", Norte: 6300, Nordeste: 7300, Sudeste: 23500, Sul: 6000, "Centro-Oeste": 4700 },
      { month: "MAR", Norte: 6600, Nordeste: 7600, Sudeste: 24500, Sul: 6300, "Centro-Oeste": 4900 },
      { month: "ABR", Norte: 6400, Nordeste: 7400, Sudeste: 24200, Sul: 6100, "Centro-Oeste": 4750 },
      { month: "MAI", Norte: 6700, Nordeste: 7700, Sudeste: 24800, Sul: 6400, "Centro-Oeste": 5000 },
      { month: "JUN", Norte: 6500, Nordeste: 7500, Sudeste: 24000, Sul: 6200, "Centro-Oeste": 4800 },
      { month: "JUL", Norte: 6600, Nordeste: 7600, Sudeste: 24300, Sul: 6300, "Centro-Oeste": 4850 },
    ],
  },
  "2024": {
    total: 315.2,
    activeRegions: 5,
    regions: [
      {
        region: "Norte",
        consumptionMWh: 24350000,
        consumptionTWh: 24.35,
        participation: 7.73,
      },
      {
        region: "Nordeste",
        consumptionMWh: 56200000,
        consumptionTWh: 56.20,
        participation: 17.83,
      },
      {
        region: "Sudeste",
        consumptionMWh: 149800000,
        consumptionTWh: 149.80,
        participation: 47.53,
      },
      {
        region: "Sul",
        consumptionMWh: 59850000,
        consumptionTWh: 59.85,
        participation: 18.99,
      },
      {
        region: "Centro-Oeste",
        consumptionMWh: 25000000,
        consumptionTWh: 25.00,
        participation: 7.93,
      },
    ],
    monthly: [
      { month: "JAN", Norte: 6200, Nordeste: 7200, Sudeste: 23000, Sul: 5900, "Centro-Oeste": 4600 },
      { month: "FEV", Norte: 6000, Nordeste: 7000, Sudeste: 22500, Sul: 5700, "Centro-Oeste": 4500 },
      { month: "MAR", Norte: 6300, Nordeste: 7300, Sudeste: 23500, Sul: 6000, "Centro-Oeste": 4700 },
      { month: "ABR", Norte: 6100, Nordeste: 7100, Sudeste: 23200, Sul: 5800, "Centro-Oeste": 4550 },
      { month: "MAI", Norte: 6400, Nordeste: 7400, Sudeste: 23800, Sul: 6100, "Centro-Oeste": 4800 },
      { month: "JUN", Norte: 6200, Nordeste: 7200, Sudeste: 23000, Sul: 5900, "Centro-Oeste": 4600 },
      { month: "JUL", Norte: 6300, Nordeste: 7300, Sudeste: 23300, Sul: 6000, "Centro-Oeste": 4650 },
    ],
  },
  "2023": {
    total: 302.8,
    activeRegions: 5,
    regions: [
      {
        region: "Norte",
        consumptionMWh: 23400000,
        consumptionTWh: 23.40,
        participation: 7.73,
      },
      {
        region: "Nordeste",
        consumptionMWh: 54000000,
        consumptionTWh: 54.00,
        participation: 17.83,
      },
      {
        region: "Sudeste",
        consumptionMWh: 143900000,
        consumptionTWh: 143.90,
        participation: 47.52,
      },
      {
        region: "Sul",
        consumptionMWh: 57500000,
        consumptionTWh: 57.50,
        participation: 18.99,
      },
      {
        region: "Centro-Oeste",
        consumptionMWh: 24000000,
        consumptionTWh: 24.00,
        participation: 7.93,
      },
    ],
    monthly: [
      { month: "JAN", Norte: 5900, Nordeste: 6900, Sudeste: 22000, Sul: 5600, "Centro-Oeste": 4400 },
      { month: "FEV", Norte: 5700, Nordeste: 6700, Sudeste: 21500, Sul: 5400, "Centro-Oeste": 4300 },
      { month: "MAR", Norte: 6000, Nordeste: 7000, Sudeste: 22500, Sul: 5700, "Centro-Oeste": 4500 },
      { month: "ABR", Norte: 5800, Nordeste: 6800, Sudeste: 22200, Sul: 5500, "Centro-Oeste": 4350 },
      { month: "MAI", Norte: 6100, Nordeste: 7100, Sudeste: 22800, Sul: 5800, "Centro-Oeste": 4600 },
      { month: "JUN", Norte: 5900, Nordeste: 6900, Sudeste: 22000, Sul: 5600, "Centro-Oeste": 4400 },
      { month: "JUL", Norte: 6000, Nordeste: 7000, Sudeste: 22300, Sul: 5700, "Centro-Oeste": 4450 },
    ],
  },
};

export const filterDataByRegion = (data: RegionData[], region: string): RegionData[] => {
  if (region === "todos") return data;
  return data.filter((r) => r.region.toLowerCase() === region.toLowerCase());
};

export const filterMonthlyDataByRegion = (
  data: MonthlyData[],
  region: string
): MonthlyData[] => {
  if (region === "todos") return data;
  
  return data.map((item) => {
    const filtered: any = { month: item.month };
    if (region === "norte") filtered.Norte = item.Norte;
    else if (region === "nordeste") filtered.Nordeste = item.Nordeste;
    else if (region === "sudeste") filtered.Sudeste = item.Sudeste;
    else if (region === "sul") filtered.Sul = item.Sul;
    else if (region === "centro-oeste") filtered["Centro-Oeste"] = item["Centro-Oeste"];
    return filtered;
  });
};

export const filterMonthlyDataByMonth = (
  data: MonthlyData[],
  month: string
): MonthlyData[] => {
  if (month === "todos") return data;
  
  const monthMap: Record<string, string> = {
    jan: "JAN",
    fev: "FEV",
    mar: "MAR",
    abr: "ABR",
    mai: "MAI",
    jun: "JUN",
    jul: "JUL",
  };
  
  const monthKey = monthMap[month];
  return data.filter((item) => item.month === monthKey);
};

export const calculateTotalFromRegions = (regions: RegionData[]): number => {
  return regions.reduce((sum, region) => sum + region.consumptionTWh, 0);
};
