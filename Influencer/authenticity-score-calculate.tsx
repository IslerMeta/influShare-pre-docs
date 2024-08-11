/**
 * Calculates an authenticity score for an influencer.
 * @param engagementConsistency Score based on consistency of engagement (0-100)
 * @param contentOriginality Score based on originality of content (0-100)
 * @param audienceTrustScore Score based on audience trust (0-100)
 * @param transparencyScore Score based on disclosure practices (0-100)
 * @returns An authenticity score between 0 and 100
 */
function calculateAuthenticityScore(
    engagementConsistency: number,
    contentOriginality: number,
    audienceTrustScore: number,
    transparencyScore: number
  ): number {
    const authenticityScore = (
      engagementConsistency * 0.3 +
      contentOriginality * 0.3 +
      audienceTrustScore * 0.2 +
      transparencyScore * 0.2
    );
    
    return Math.min(Math.max(authenticityScore, 0), 100);
  }
  
  // Example usage
  const authenticityScore = calculateAuthenticityScore(85, 90, 80, 95);
  console.log(`Authenticity Score: ${authenticityScore.toFixed(2)}`);