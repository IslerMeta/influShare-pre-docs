/**
 * Calculates the growth rate between two periods.
 * @param initialValue The value at the beginning of the period
 * @param finalValue The value at the end of the period
 * @returns The growth rate as a percentage
 */
function calculateGrowthRate(initialValue: number, finalValue: number): number {
    return ((finalValue - initialValue) / initialValue) * 100;
  }
  
  // Example usage
  const growthRate = calculateGrowthRate(1000, 1250);
  console.log(`Growth Rate: ${growthRate.toFixed(2)}%`);