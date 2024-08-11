/**
 * Calculates a proposed rate for an influencer campaign.
 * @param baseRate The standard base rate for the influencer
 * @param followerCount The number of followers
 * @param engagementRate The average engagement rate
 * @param contentComplexity A factor representing the complexity of required content (1-2)
 * @returns The proposed rate
 */
function calculateProposedRate(
    baseRate: number,
    followerCount: number,
    engagementRate: number,
    contentComplexity: number
  ): number {
    const followerFactor = Math.log10(followerCount) / 5; // Logarithmic scale
    const engagementFactor = engagementRate * 10; // Assuming 10% engagement is excellent
    const rate = baseRate * followerFactor * engagementFactor * contentComplexity;
    return Math.round(rate);
  }
  
  // Example usage
  const proposedRate = calculateProposedRate(100, 50000, 0.05, 1.5);
  console.log(`Proposed Rate: $${proposedRate}`);