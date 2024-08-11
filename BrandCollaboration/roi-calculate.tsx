/**
 * Calculates the Return on Investment (ROI) for a campaign.
 * @param revenue The total revenue generated from the campaign
 * @param cost The total cost of the campaign
 * @returns The ROI as a percentage
 */
function calculateROI(revenue: number, cost: number): number {
    return ((revenue - cost) / cost) * 100;
  }
  
  // Example usage
  const roi = calculateROI(15000, 10000);
  console.log(`ROI: ${roi.toFixed(2)}%`);