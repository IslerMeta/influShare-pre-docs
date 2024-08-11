/**
 * Analyzes the performance trend of an agency's campaigns over time.
 * @param campaignScores An array of performance scores for each campaign (0-100)
 * @returns The average change in performance between consecutive campaigns
 */
function analyzePerformanceTrend(campaignScores: number[]): number {
  if (campaignScores.length < 2) return 0; // Need at least 2 campaigns to calculate trend

  let totalChange = 0;

  for (let i = 1; i < campaignScores.length; i++) {
    totalChange += campaignScores[i] - campaignScores[i - 1];
  }

  return totalChange / (campaignScores.length - 1);
}

// Example usage
const campaignScoresOverTime = [80, 82, 85, 88, 92];
const performanceTrend = analyzePerformanceTrend(campaignScoresOverTime);
console.log(`Performance Trend: ${performanceTrend.toFixed(2)} points per campaign`);