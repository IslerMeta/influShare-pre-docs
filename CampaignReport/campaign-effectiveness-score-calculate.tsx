/**
 * Calculates a campaign effectiveness score based on multiple metrics.
 * @param reachRate The percentage of the target audience reached
 * @param engagementRate The engagement rate achieved
 * @param conversionRate The conversion rate (if applicable)
 * @param roi The return on investment
 * @param brandLift The measured increase in brand awareness or favorability
 * @returns A campaign effectiveness score between 0 and 100
 */
function calculateCampaignEffectivenessScore(
    reachRate: number,
    engagementRate: number,
    conversionRate: number,
    roi: number,
    brandLift: number
  ): number {
    const normalizedROI = Math.min(roi / 5, 1); // Normalize ROI, assuming 500% is excellent
    const effectivenessScore = (reachRate * 0.2 + engagementRate * 0.2 + conversionRate * 0.2 + normalizedROI * 0.2 + brandLift * 0.2) * 100;
    return Math.min(Math.max(effectivenessScore, 0), 100);
  }
  
  // Example usage
  const campaignEffectivenessScore = calculateCampaignEffectivenessScore(0.7, 0.05, 0.02, 3, 0.15);
  console.log(`Campaign Effectiveness Score: ${campaignEffectivenessScore.toFixed(2)}`);