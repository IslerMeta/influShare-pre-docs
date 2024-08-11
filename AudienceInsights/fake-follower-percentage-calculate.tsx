/**
 * Estimates the percentage of fake followers based on various metrics.
 * @param engagementRate The overall engagement rate of the account
 * @param suspiciousAccountsRatio The ratio of accounts flagged as suspicious
 * @param inactiveFollowersRatio The ratio of followers who haven't been active recently
 * @returns The estimated percentage of fake followers
 */
function estimateFakeFollowerPercentage(
    engagementRate: number,
    suspiciousAccountsRatio: number,
    inactiveFollowersRatio: number
  ): number {
    const fakeFollowerEstimate = (suspiciousAccountsRatio * 0.5 + inactiveFollowersRatio * 0.3 + (1 - engagementRate) * 0.2) * 100;
    return Math.min(Math.max(fakeFollowerEstimate, 0), 100);
  }
  
  // Example usage
  const fakeFollowerPercentage = estimateFakeFollowerPercentage(0.05, 0.1, 0.2);
  console.log(`Estimated Fake Follower Percentage: ${fakeFollowerPercentage.toFixed(2)}%`);