/**
 * Calculates the brand lift as a result of a campaign.
 * @param preMetric The metric value before the campaign (e.g., brand awareness percentage)
 * @param postMetric The metric value after the campaign
 * @returns The brand lift as a percentage increase
 */
function calculateBrandLift(preMetric: number, postMetric: number): number {
    return ((postMetric - preMetric) / preMetric) * 100;
  }
  
  // Example usage
  const brandLift = calculateBrandLift(0.2, 0.25);
  console.log(`Brand Lift: ${brandLift.toFixed(2)}%`);