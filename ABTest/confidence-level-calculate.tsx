/**
 * Calculates a simple confidence level based on sample size and variability.
 * @param sampleSize The number of data points in the sample
 * @param variabilityScore A measure of data variability (0-1, where 0 is low variability)
 * @returns A confidence level between 0 and 1
 */
function calculateConfidenceLevel(sampleSize: number, variabilityScore: number): number {
    const baseLine = Math.min(sampleSize / 100, 1); // Sample sizes over 100 are considered good
    const confidenceLevel = baseLine * (1 - variabilityScore);
    return Math.min(Math.max(confidenceLevel, 0), 1);
  }
  
  // Example usage
  const confidenceLevel = calculateConfidenceLevel(50, 0.3);
  console.log(`Confidence Level: ${confidenceLevel.toFixed(2)}`);