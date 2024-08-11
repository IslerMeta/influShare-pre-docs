/**
 * Calculates the average ROI across all campaigns for an advertiser.
 * @param campaignROIs An array of ROI values for each campaign (as percentages)
 * @returns The average ROI across all campaigns
 */
function calculateAverageCampaignsROI(campaignROIs: number[]): number {
    if (campaignROIs.length === 0) return 0;
    const totalROI = campaignROIs.reduce((sum, roi) => sum + roi, 0);
    return totalROI / campaignROIs.length;
  }
  
  // Example usage
  const campaignROIs = [120, 150, 80, 200, 110];
  const averageROI = calculateAverageCampaignsROI(campaignROIs);
  console.log(`Average Campaigns ROI: ${averageROI.toFixed(2)}%`);