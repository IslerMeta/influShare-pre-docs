/**
 * Calculates a pricing modifier based on various factors affecting an influencer's value.
 * @param followersCount The number of followers
 * @param engagementRate The average engagement rate
 * @param contentQuality A subjective measure of content quality (0-1)
 * @param brandSafetyScore The influencer's brand safety score (0-1)
 * @returns A pricing modifier to be applied to base rates
 */
function calculatePricingModifier(
    followersCount: number,
    engagementRate: number,
    contentQuality: number,
    brandSafetyScore: number
  ): number {
    const followersFactor = Math.log10(followersCount) / 6; // Logarithmic scale
    const engagementFactor = engagementRate * 10; // Assuming 10% engagement is excellent
    const qualityFactor = contentQuality;
    const safetyFactor = brandSafetyScore;
  
    const modifier = (followersFactor * 0.3 + engagementFactor * 0.3 + qualityFactor * 0.2 + safetyFactor * 0.2) + 0.5;
    return Math.max(modifier, 0.5); // Ensure the modifier is at least 0.5
  }
  
  // Example usage
  const pricingModifier = calculatePricingModifier(100000, 0.05, 0.8, 0.9);
  console.log(`Pricing Modifier: ${pricingModifier.toFixed(2)}`);