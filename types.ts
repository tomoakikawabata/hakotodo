
export interface CalculationData {
  mVolume: number;
  lVolume: number;
  currentMPrice: number;
  currentLPrice: number;
}

export interface CalculationResult {
  monthlyCurrentTotal: number;
  monthlyNewTotal: number;
  monthlySavings: number;
  yearlySavings: number;
  savingsRate: number;
}

export interface SimulationReport {
  analysis: string;
  recommendations: string[];
}
