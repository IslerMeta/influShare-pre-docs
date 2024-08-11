/**
 * Calculates the audience growth rate over a period.
 * @param initialAudience The audience size at the start of the period
 * @param finalAudience The audience size at the end of the period
 * @param periodInDays The number of days in the period
 * @returns The daily audience growth rate as a percentage
 */
function calculateAudienceGrowthRate(initialAudience: number, finalAudience: number, periodInDays: number): number {
    const totalGrowthRate = (finalAudience - initialAudience) / initialAudience;
    const dailyGrowthRate = Math.pow(1 + totalGrowthRate, 1 / periodInDays) - 1;
    return dailyGrowthRate * 100;
  }
  
  // Example usage
  const audienceGrowthRate = calculateAudienceGrowthRate(10000, 12000, 30);
  console.log(`Daily Audience Growth Rate: ${audienceGrowthRate.toFixed(2)}%`);