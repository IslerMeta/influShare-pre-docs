/**
 * Calculates a loyalty index for an influencer's audience.
 * @param repeatEngagementRate Percentage of followers who engage regularly
 * @param followerRetentionRate Percentage of followers retained over a period
 * @param brandAdvocacyScore Score based on how often followers promote the influencer (0-100)
 * @param contentConsistencyScore Score based on consistent content delivery (0-100)
 * @returns A loyalty index between 0 and 100
 */
function calculateLoyaltyIndex(
    repeatEngagementRate: number,
    followerRetentionRate: number,
    brandAdvocacyScore: number,
    contentConsistencyScore: number
  ): number {
    const loyaltyIndex = (
      repeatEngagementRate * 0.3 +
      followerRetentionRate * 0.3 +
      brandAdvocacyScore * 0.2 +
      contentConsistencyScore * 0.2
    );
    
    return Math.min(Math.max(loyaltyIndex, 0), 100);
  }
  
  // Example usage
  const loyaltyIndex = calculateLoyaltyIndex(75, 90, 80, 85);
  console.log(`Loyalty Index: ${loyaltyIndex.toFixed(2)}`);