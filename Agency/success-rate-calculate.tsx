/**
 * Calculates the success rate of an agency based on their campaigns.
 * @param successfulCampaigns The number of campaigns that met or exceeded their goals
 * @param totalCampaigns The total number of campaigns run by the agency
 * @returns The success rate as a percentage
 */
function calculateAgencySuccessRate(successfulCampaigns: number, totalCampaigns: number): number {
    if (totalCampaigns === 0) return 0; // Prevent division by zero
    return (successfulCampaigns / totalCampaigns) * 100;
  }
  
  // Example usage
  const agencySuccessRate = calculateAgencySuccessRate(18, 25);
  console.log(`Agency Success Rate: ${agencySuccessRate.toFixed(2)}%`);