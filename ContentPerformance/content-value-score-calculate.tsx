/**
 * Calculates a content value score based on engagement, reach, and sentiment.
 * @param engagementRate The engagement rate for the content
 * @param reachPercentage The percentage of followers reached
 * @param sentimentScore The sentiment score of the content (-1 to 1)
 * @returns A content value score between 0 and 100
 */
function calculateContentValueScore(
    engagementRate: number,
    reachPercentage: number,
    sentimentScore: number
  ): number {
    const normalizedSentiment = (sentimentScore + 1) / 2; // Convert -1 to 1 range to 0 to 1
    const valueScore = (engagementRate * 0.4 + reachPercentage * 0.3 + normalizedSentiment * 0.3) * 100;
    return Math.min(Math.max(valueScore, 0), 100);
  }
  
  // Example usage
  const contentValueScore = calculateContentValueScore(0.08, 0.6, 0.5);
  console.log(`Content Value Score: ${contentValueScore.toFixed(2)}`);