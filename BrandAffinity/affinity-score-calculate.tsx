/**
 * Calculates an affinity score between an influencer and a brand or topic.
 * @param mentionFrequency How often the influencer mentions the brand or topic
 * @param sentimentScore The sentiment of the influencer's mentions (-1 to 1)
 * @param engagementRate The engagement rate on posts related to the brand or topic
 * @returns An affinity score between 0 and 100
 */
function calculateAffinityScore(
    mentionFrequency: number,
    sentimentScore: number,
    engagementRate: number
  ): number {
    const normalizedSentiment = (sentimentScore + 1) / 2; // Convert -1 to 1 range to 0 to 1
    const affinityScore = (mentionFrequency * 0.4 + normalizedSentiment * 0.3 + engagementRate * 0.3) * 100;
    return Math.min(Math.max(affinityScore, 0), 100);
  }
  
  // Example usage
  const affinityScore = calculateAffinityScore(0.05, 0.7, 0.08);
  console.log(`Affinity Score: ${affinityScore.toFixed(2)}`);