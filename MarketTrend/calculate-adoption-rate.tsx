/**
 * Calculates the adoption rate of a feature or campaign.
 * @param totalUsers The total number of users
 * @param adoptedUsers The number of users who have adopted the feature or participated in the campaign
 * @returns The adoption rate as a percentage
 */
function calculateAdoptionRate(totalUsers: number, adoptedUsers: number): number {
    return (adoptedUsers / totalUsers) * 100;
  }
  
  // Example usage
  const adoptionRate = calculateAdoptionRate(10000, 2500);
  console.log(`Adoption Rate: ${adoptionRate.toFixed(2)}%`);