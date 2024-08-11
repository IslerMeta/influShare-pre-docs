/**
 * Calculates a brand safety score for an influencer.
 * @param contentAppropriatenessScore Score based on content appropriateness (0-100)
 * @param audienceAuthenticityScore Score based on audience authenticity (0-100)
 * @param controversyHistory Score based on past controversies (0-100, higher is better)
 * @param platformComplianceScore Score based on compliance with platform rules (0-100)
 * @returns A brand safety score between 0 and 100
 */
function calculateBrandSafetyScore(
    contentAppropriatenessScore: number,
    audienceAuthenticityScore: number,
    controversyHistory: number,
    platformComplianceScore: number
  ): number {
    const brandSafetyScore = (
      contentAppropriatenessScore * 0.4 +
      audienceAuthenticityScore * 0.3 +
      controversyHistory * 0.2 +
      platformComplianceScore * 0.1
    );
    
    return Math.min(Math.max(brandSafetyScore, 0), 100);
  }
  
  // Example usage
  const brandSafetyScore = calculateBrandSafetyScore(90, 85, 95, 100);
  console.log(`Brand Safety Score: ${brandSafetyScore.toFixed(2)}`);