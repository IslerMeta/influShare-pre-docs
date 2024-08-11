/**
 * Calculates the average engagement rate for an influencer.
 * @param engagements An array of engagement counts for each post
 * @param impressions An array of impression counts for each post
 * @returns The average engagement rate as a percentage
 */
function calculateAverageEngagementRate(engagements: number[], impressions: number[]): number {
    if (engagements.length !== impressions.length || engagements.length === 0) return 0;
    
    let totalEngagementRate = 0;
    for (let i = 0; i < engagements.length; i++) {
      totalEngagementRate += (engagements[i] / impressions[i]) * 100;
    }
    
    return totalEngagementRate / engagements.length;
  }
  
  // Example usage
  const engagements = [1000, 1500, 800, 2000, 1200];
  const impressions = [20000, 25000, 18000, 30000, 22000];
  const averageEngagementRate = calculateAverageEngagementRate(engagements, impressions);
  console.log(`Average Engagement Rate: ${averageEngagementRate.toFixed(2)}%`);