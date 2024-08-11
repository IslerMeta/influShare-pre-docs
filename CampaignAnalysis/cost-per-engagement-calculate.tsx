/**
 * Calculates the cost per engagement for a campaign.
 * @param totalCost The total cost of the campaign
 * @param totalEngagements The total number of engagements (likes, comments, shares, etc.)
 * @returns The cost per engagement
 */
function calculateCostPerEngagement(totalCost: number, totalEngagements: number): number {
    return totalCost / totalEngagements;
  }
  
  // Example usage
  const costPerEngagement = calculateCostPerEngagement(5000, 25000);
  console.log(`Cost Per Engagement: $${costPerEngagement.toFixed(2)}`);