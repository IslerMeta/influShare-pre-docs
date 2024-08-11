/**
 * Calculates the trend score based on recent engagement and growth metrics.
 * @param recentEngagement An array of engagement rates for recent posts
 * @param followersGrowthRate The rate of follower growth over a specific period
 * @param industryAverageEngagement The average engagement rate for the industry
 * @returns A trend score between 0 and 100
 */
function calculateTrendScore(
    recentEngagement: number[],
    followersGrowthRate: number,
    industryAverageEngagement: number
  ): number {
    const averageEngagement = recentEngagement.reduce((a, b) => a + b, 0) / recentEngagement.length;
    const engagementTrend = averageEngagement / industryAverageEngagement;
    const growthFactor = 1 + followersGrowthRate;
    
    const trendScore = (engagementTrend * 0.7 + growthFactor * 0.3) * 100;
    return Math.min(Math.max(trendScore, 0), 100);
  }
  
  // Example usage
  const trendScore = calculateTrendScore([0.05, 0.06, 0.055, 0.07], 0.02, 0.04);
  console.log(`Trend Score: ${trendScore.toFixed(2)}`);