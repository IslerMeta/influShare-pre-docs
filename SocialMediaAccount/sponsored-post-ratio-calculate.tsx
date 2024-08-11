/**
 * Calculates the ratio of sponsored posts to total posts.
 * @param sponsoredPosts The number of sponsored posts
 * @param totalPosts The total number of posts
 * @returns The sponsored post ratio as a percentage
 */
function calculateSponsoredPostRatio(sponsoredPosts: number, totalPosts: number): number {
    return (sponsoredPosts / totalPosts) * 100;
  }
  
  // Example usage
  const sponsoredPostRatio = calculateSponsoredPostRatio(5, 20);
  console.log(`Sponsored Post Ratio: ${sponsoredPostRatio.toFixed(2)}%`);