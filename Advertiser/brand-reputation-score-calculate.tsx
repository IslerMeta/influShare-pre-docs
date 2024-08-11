/**
 * Calculates a brand reputation score based on various factors.
 * @param sentimentScore Average sentiment score from social media (-1 to 1)
 * @param customerSatisfaction Customer satisfaction rating (0 to 100)
 * @param brandAwareness Brand awareness percentage (0 to 100)
 * @param mediaScore Media coverage score (0 to 100)
 * @returns A brand reputation score between 0 and 100
 */
function calculateBrandReputationScore(
    sentimentScore: number,
    customerSatisfaction: number,
    brandAwareness: number,
    mediaScore: number
  ): number {
    // Normalize sentiment score to 0-100 range
    const normalizedSentiment = ((sentimentScore + 1) / 2) * 100;
    
    const reputationScore = (
      normalizedSentiment * 0.3 +
      customerSatisfaction * 0.3 +
      brandAwareness * 0.2 +
      mediaScore * 0.2
    );
    
    return Math.min(Math.max(reputationScore, 0), 100);
  }
  
  // Example usage
  const brandReputationScore = calculateBrandReputationScore(0.6, 85, 70, 80);
  console.log(`Brand Reputation Score: ${brandReputationScore.toFixed(2)}`);