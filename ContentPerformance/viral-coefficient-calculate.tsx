/**
 * Calculates the viral coefficient of a piece of content or campaign.
 * @param initialUsers The number of initial users exposed to the content
 * @param newUsers The number of new users acquired through sharing
 * @returns The viral coefficient
 */
function calculateViralCoefficient(initialUsers: number, newUsers: number): number {
    return newUsers / initialUsers;
  }
  
  // Example usage
  const viralCoefficient = calculateViralCoefficient(1000, 1500);
  console.log(`Viral Coefficient: ${viralCoefficient.toFixed(2)}`);