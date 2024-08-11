/**
 * Calculates the average campaign performance for an agency.
 * @param campaignScores An array of performance scores for each campaign (0-100)
 * @returns The average campaign performance score
 */
function calculateAverageCampaignPerformance(campaignScores: number[]): number {
    if (campaignScores.length === 0) return 0; // Handle empty array
    const totalScore = campaignScores.reduce((sum, score) => sum + score, 0);
    return totalScore / campaignScores.length;
  }
  
  // Example usage
  const campaignScores = [85, 92, 78, 88, 95, 80];
  const averagePerformance = calculateAverageCampaignPerformance(campaignScores);
  console.log(`Average Campaign Performance: ${averagePerformance.toFixed(2)}`);