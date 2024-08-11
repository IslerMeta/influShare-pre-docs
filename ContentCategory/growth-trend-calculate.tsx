/**
 * Calculates a simple growth trend over a series of data points.
 * @param dataPoints An array of numbers representing the metric over time
 * @returns The average growth rate as a percentage
 */
function calculateGrowthTrend(dataPoints: number[]): number {
    let totalGrowthRate = 0;
    for (let i = 1; i < dataPoints.length; i++) {
      const growthRate = (dataPoints[i] - dataPoints[i-1]) / dataPoints[i-1];
      totalGrowthRate += growthRate;
    }
    return (totalGrowthRate / (dataPoints.length - 1)) * 100;
  }
  
  // Example usage
  const monthlyFollowers = [1000, 1100, 1250, 1400, 1600];
  const growthTrend = calculateGrowthTrend(monthlyFollowers);
  console.log(`Growth Trend: ${growthTrend.toFixed(2)}%`);