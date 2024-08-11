/**
 * Calculates the audience overlap between two sets of followers.
 * @param set1 An array of follower IDs for the first audience
 * @param set2 An array of follower IDs for the second audience
 * @returns The percentage of audience overlap
 */
function calculateAudienceOverlap(set1: string[], set2: string[]): number {
    const intersection = new Set(set1.filter(x => set2.includes(x)));
    const overlapPercentage = (intersection.size / Math.min(set1.length, set2.length)) * 100;
    return overlapPercentage;
  }
  
  // Example usage
  const influencerFollowers = ['user1', 'user2', 'user3', 'user4', 'user5'];
  const brandFollowers = ['user3', 'user4', 'user5', 'user6', 'user7'];
  const overlapPercentage = calculateAudienceOverlap(influencerFollowers, brandFollowers);
  console.log(`Audience Overlap: ${overlapPercentage.toFixed(2)}%`);