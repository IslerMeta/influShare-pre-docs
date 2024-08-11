/**
 * Calculates an audience loyalty score based on engagement consistency and follower retention.
 * @param engagementConsistency A measure of how consistent the engagement is (0-1)
 * @param followerRetentionRate The rate at which followers are retained over time (0-1)
 * @param repeatInteractionRate The rate of followers who interact repeatedly (0-1)
 * @returns An audience loyalty score between 0 and 100
 */
function calculateAudienceLoyaltyScore(
    engagementConsistency: number,
    followerRetentionRate: number,
    repeatInteractionRate: number
  ): number {
    const loyaltyScore = (engagementConsistency * 0.3 + followerRetentionRate * 0.4 + repeatInteractionRate * 0.3) * 100;
    return Math.min(Math.max(loyaltyScore, 0), 100);
  }
  
  // Example usage
  const loyaltyScore = calculateAudienceLoyaltyScore(0.8, 0.9, 0.7);
  console.log(`Audience Loyalty Score: ${loyaltyScore.toFixed(2)}`);