/**
 * Calculates a match score between an influencer and a campaign based on various factors.
 * @param audienceOverlap The degree of overlap between the influencer's audience and the campaign's target audience (0-1)
 * @param contentRelevance How relevant the influencer's content is to the campaign (0-1)
 * @param performanceHistory The influencer's past performance in similar campaigns (0-1)
 * @param brandAlignment How well the influencer aligns with the brand values (0-1)
 * @returns A match score between 0 and 100
 */
function calculateMatchScore(
    audienceOverlap: number,
    contentRelevance: number,
    performanceHistory: number,
    brandAlignment: number
  ): number {
    const matchScore = (audienceOverlap * 0.3 + contentRelevance * 0.3 + performanceHistory * 0.2 + brandAlignment * 0.2) * 100;
    return Math.min(Math.max(matchScore, 0), 100);
  }
  
  // Example usage
  const matchScore = calculateMatchScore(0.8, 0.9, 0.75, 0.85);
  console.log(`Match Score: ${matchScore.toFixed(2)}`);