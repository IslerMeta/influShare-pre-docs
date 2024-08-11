/**
 * Determines if an influencer meets the minimum engagement rate requirement.
 * @param engagementRate The influencer's engagement rate
 * @param minRequirement The minimum required engagement rate
 * @returns A boolean indicating if the requirement is met
 */
function meetsMinEngagementRate(engagementRate: number, minRequirement: number): boolean {
    return engagementRate >= minRequirement;
  }
  
  // Example usage
  const meetsEngagementRequirement = meetsMinEngagementRate(0.05, 0.03);
  console.log(`Meets Minimum Engagement Rate Requirement: ${meetsEngagementRequirement}`);