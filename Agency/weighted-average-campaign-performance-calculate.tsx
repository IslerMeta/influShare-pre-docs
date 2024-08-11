/**
 * Calculates the weighted average campaign performance for an agency.
 * @param campaignScores An array of performance scores for each campaign (0-100)
 * @param campaignBudgets An array of budgets for each campaign
 * @returns The weighted average campaign performance score
 */
function calculateWeightedAverageCampaignPerformance(
    campaignScores: number[],
    campaignBudgets: number[]
  ): number {
    if (campaignScores.length === 0 || campaignScores.length !== campaignBudgets.length) return 0;
  
    let totalWeightedScore = 0;
    let totalBudget = 0;
  
    for (let i = 0; i < campaignScores.length; i++) {
      totalWeightedScore += campaignScores[i] * campaignBudgets[i];
      totalBudget += campaignBudgets[i];
    }
  
    return totalWeightedScore / totalBudget;
  }
  
  // Example usage
  const scores = [85, 92, 78, 88, 95];
  const budgets = [10000, 15000, 5000, 12000, 20000];
  const weightedAveragePerformance = calculateWeightedAverageCampaignPerformance(scores, budgets);
  console.log(`Weighted Average Campaign Performance: ${weightedAveragePerformance.toFixed(2)}`);