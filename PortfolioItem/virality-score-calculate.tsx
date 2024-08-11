/**
 * Calculates a virality score based on sharing rate and audience growth.
 * @param sharingRate The rate at which the content is shared
 * @param audienceGrowthRate The rate of audience growth due to the content
 * @param engagementVelocity The speed at which engagement is occurring
 * @returns A virality score between 0 and 100
 */
function calculateViralityScore(
    sharingRate: number,
    audienceGrowthRate: number,
    engagementVelocity: number
  ): number {
    const viralityScore = (sharingRate * 0.4 + audienceGrowthRate * 0.3 + engagementVelocity * 0.3) * 100;
    return Math.min(Math.max(viralityScore, 0), 100);
  }
  
  // Example usage
  const viralityScore = calculateViralityScore(0.2, 0.1, 0.5);
  console.log(`Virality Score: ${viralityScore.toFixed(2)}`);