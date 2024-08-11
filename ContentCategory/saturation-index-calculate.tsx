/**
 * Calculates a saturation index for a market or content category.
 * @param currentCompetitors The current number of competitors or content pieces
 * @param maxCapacity The estimated maximum capacity of the market or category
 * @param growthRate The current growth rate of the market or category
 * @returns A saturation index between 0 and 1
 */
function calculateSaturationIndex(currentCompetitors: number, maxCapacity: number, growthRate: number): number {
    const baseIndex = currentCompetitors / maxCapacity;
    const adjustedIndex = baseIndex * (1 - growthRate);
    return Math.min(Math.max(adjustedIndex, 0), 1);
  }
  
  // Example usage
  const saturationIndex = calculateSaturationIndex(80, 100, 0.05);
  console.log(`Saturation Index: ${saturationIndex.toFixed(2)}`);