/**
 * Calculates an audience credibility score based on various factors.
 * @param realFollowerPercentage The percentage of followers that are real (not bots)
 * @param engagementConsistency A measure of how consistent the engagement is (0-1)
 * @param audienceRelevance How relevant the audience is to the content/niche (0-1)
 * @returns An audience credibility score between 0 and 100
 */
function calculateAudienceCredibilityScore(
    realFollowerPercentage: number,
    engagementConsistency: number,
    audienceRelevance: number
  ): number {
    const credibilityScore = (realFollowerPercentage * 0.4 + engagementConsistency * 0.3 + audienceRelevance * 0.3) * 100;
    return Math.min(Math.max(credibilityScore, 0), 100);
  }
  
  // Example usage
  const audienceCredibilityScore = calculateAudienceCredibilityScore(0.9, 0.8, 0.75);
  console.log(`Audience Credibility Score: ${audienceCredibilityScore.toFixed(2)}`);