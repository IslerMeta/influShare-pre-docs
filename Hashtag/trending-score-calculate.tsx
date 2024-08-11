/**
 * Calculates a trending score based on recent engagement and growth metrics.
 * @param recentEngagementRates An array of recent engagement rates
 * @param followersGrowthRate The rate of follower growth
 * @param mentionFrequency The frequency of mentions or hashtag usage
 * @returns A trending score between 0 and 100
 */
function calculateTrendingScore(
    recentEngagementRates: number[],
    followersGrowthRate: number,
    mentionFrequency: number
  ): number {
    const averageEngagement = recentEngagementRates.reduce((a, b) => a + b, 0) / recentEngagementRates.length;
    const engagementTrend = averageEngagement / 0.05; // Assuming 5% is a good baseline
    const growthFactor = 1 + followersGrowthRate;
    const mentionFactor = mentionFrequency * 10; // Adjust based on your scale
  
    const trendingScore = (engagementTrend * 0.4 + growthFactor * 0.3 + mentionFactor * 0.3) * 100;
    return Math.min(Math.max(trendingScore, 0), 100);
  }
  
  // Example usage
  const trendingScore = calculateTrendingScore([0.06, 0.07, 0.065, 0.08], 0.02, 0.5);
  console.log(`Trending Score: ${trendingScore.toFixed(2)}`);