/**
 * Calculates the churn rate over a specific period.
 * @param startUsers Number of users at the start of the period
 * @param endUsers Number of users at the end of the period
 * @param newUsers Number of new users acquired during the period
 * @returns The churn rate as a percentage
 */
function calculateChurnRate(startUsers: number, endUsers: number, newUsers: number): number {
    const churnedUsers = startUsers + newUsers - endUsers;
    return (churnedUsers / startUsers) * 100;
  }
  
  // Example usage
  const churnRate = calculateChurnRate(10000, 9800, 500);
  console.log(`Churn Rate: ${churnRate.toFixed(2)}%`);