/**
 * Calculates a success score for a campaign or content piece.
 * @param reachPercentage The percentage of the target audience reached
 * @param engagementRate The engagement rate achieved
 * @param conversionRate The conversion rate (if applicable)
 * @param goalAchievementRate The rate at which the primary goal was achieved (0-1)
 * @returns A success score between 0 and 100
 */
function calculateSuccessScore(
    reachPercentage: number,
    engagementRate: number,
    conversionRate: number,
    goalAchievementRate: number
  ): number {
    const successScore = (reachPercentage * 0.25 + engagementRate * 0.25 + conversionRate * 0.25 + goalAchievementRate * 0.25) * 100;
    return Math.min(Math.max(successScore, 0), 100);
  }
  
  // Example usage
  const successScore = calculateSuccessScore(0.7, 0.05, 0.02, 0.9);
  console.log(`Success Score: ${successScore.toFixed(2)}`);