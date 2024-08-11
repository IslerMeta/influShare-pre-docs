/**
 * Calculates a performance score for an influencer or campaign.
 * @param engagementRate The engagement rate achieved
 * @param reachPercentage The percentage of followers reached
 * @param conversionRate The conversion rate (if applicable)
 * @param sentimentScore The sentiment score of the audience response (-1 to 1)
 * @returns A performance score between 0 and 100
 */
function calculatePerformanceScore(
    engagementRate: number,
    reachPercentage: number,
    conversionRate: number,
    sentimentScore: number
  ): number {
    const normalizedSentiment = (sentimentScore + 1) / 2; // Convert -1 to 1 range to 0 to 1
    const performanceScore = (engagementRate * 0.3 + reachPercentage * 0.2 + conversionRate * 0.3 + normalizedSentiment * 0.2) * 100;
    return Math.min(Math.max(performanceScore, 0), 100);
  }
  
  // Example usage
  const performanceScore = calculatePerformanceScore(0.05, 0.7, 0.02, 0.6);
  console.log(`Performance Score: ${performanceScore.toFixed(2)}`);