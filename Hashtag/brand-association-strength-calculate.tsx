/**
 * Calculates the strength of association between a brand and a topic or influencer.
 * @param mentionFrequency How often the brand is mentioned in relation to the topic/influencer
 * @param sentimentScore The sentiment of those mentions (-1 to 1)
 * @param engagementRate The engagement rate on posts mentioning the brand
 * @returns A brand association strength score between 0 and 100
 */
function calculateBrandAssociationStrength(
    mentionFrequency: number,
    sentimentScore: number,
    engagementRate: number
  ): number {
    const normalizedSentiment = (sentimentScore + 1) / 2; // Convert -1 to 1 range to 0 to 1
    const associationStrength = (mentionFrequency * 0.4 + normalizedSentiment * 0.3 + engagementRate * 0.3) * 100;
    return Math.min(Math.max(associationStrength, 0), 100);
  }
  
  // Example usage
  const brandAssociationStrength = calculateBrandAssociationStrength(0.05, 0.7, 0.08);
  console.log(`Brand Association Strength: ${brandAssociationStrength.toFixed(2)}`);