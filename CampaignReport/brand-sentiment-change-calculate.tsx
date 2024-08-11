/**
 * Calculates the change in brand sentiment before and after a campaign.
 * @param beforeSentiment The brand sentiment score before the campaign (-1 to 1)
 * @param afterSentiment The brand sentiment score after the campaign (-1 to 1)
 * @returns The change in brand sentiment as a percentage
 */
function calculateBrandSentimentChange(beforeSentiment: number, afterSentiment: number): number {
    const change = afterSentiment - beforeSentiment;
    return (change / 2) * 100; // Convert to percentage, considering the -1 to 1 range
  }
  
  // Example usage
  const brandSentimentChange = calculateBrandSentimentChange(0.2, 0.5);
  console.log(`Brand Sentiment Change: ${brandSentimentChange.toFixed(2)}%`);