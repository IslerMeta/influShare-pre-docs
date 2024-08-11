/**
 * Calculates a fit score between an influencer and a campaign or brand.
 * @param audienceMatch The degree of match between the influencer's audience and the target audience (0-1)
 * @param contentAlignment How well the influencer's content aligns with the brand or campaign (0-1)
 * @param pastPerformance The influencer's performance in similar past campaigns (0-1)
 * @param brandValues Alignment with brand values (0-1)
 * @returns A fit score between 0 and 100
 */
function calculateFitScore(
    audienceMatch: number,
    contentAlignment: number,
    pastPerformance: number,
    brandValues: number
  ): number {
    const fitScore = (audienceMatch * 0.3 + contentAlignment * 0.3 + pastPerformance * 0.2 + brandValues * 0.2) * 100;
    return Math.min(Math.max(fitScore, 0), 100);
  }
  
  // Example usage
  const fitScore = calculateFitScore(0.8, 0.9, 0.75, 0.85);
  console.log(`Fit Score: ${fitScore.toFixed(2)}`);