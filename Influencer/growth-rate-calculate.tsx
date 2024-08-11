/**
 * Calculates the average daily growth rate of an influencer's followers over a period of time.
 * @param initialFollowers Number of followers at the start of the period
 * @param finalFollowers Number of followers at the end of the period
 * @param daysElapsed Number of days in the period
 * @returns The average daily growth rate as a percentage
 */
function calculateGrowthRate(initialFollowers: number, finalFollowers: number, daysElapsed: number): number {
    if (daysElapsed === 0) return 0; // Prevent division by zero
    const totalGrowthRate = (finalFollowers - initialFollowers) / initialFollowers;
    const averageDailyGrowthRate = (totalGrowthRate / daysElapsed) * 100;
    return averageDailyGrowthRate;
}

// Example usage
const calculatedGrowthRate = calculateGrowthRate(100000, 110000, 30);
console.log(`Average Daily Growth Rate: ${calculatedGrowthRate.toFixed(4)}%`);