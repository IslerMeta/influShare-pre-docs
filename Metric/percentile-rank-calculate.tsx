/**
 * Calculates the percentile rank of a value within a dataset.
 * @param value The value to find the percentile rank for
 * @param dataset An array of numbers representing the full dataset
 * @returns The percentile rank (0-100)
 */
function calculatePercentileRank(value: number, dataset: number[]): number {
    const sortedData = [...dataset].sort((a, b) => a - b);
    const index = sortedData.findIndex(item => item >= value);
    return (index / sortedData.length) * 100;
  }
  
  // Example usage
  const dataset = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const percentileRank = calculatePercentileRank(75, dataset);
  console.log(`Percentile Rank: ${percentileRank.toFixed(2)}`);