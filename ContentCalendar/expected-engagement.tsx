interface InfluencerMetrics {
    averageEngagementRate: number;
    followers: number;
    recentPostPerformance: number[];
  }
  
  function calculateExpectedEngagement(metrics: InfluencerMetrics): number {
    const averageRecentPerformance = metrics.recentPostPerformance.reduce((a, b) => a + b, 0) / metrics.recentPostPerformance.length;
    const expectedEngagementRate = (metrics.averageEngagementRate + averageRecentPerformance) / 2;
    const expectedEngagement = metrics.followers * (expectedEngagementRate / 100);
    return parseFloat(expectedEngagement.toFixed(0));
  }
  
  // Kullanım örneği
  const influencerMetrics: InfluencerMetrics = {
    averageEngagementRate: 3.5,
    followers: 100000,
    recentPostPerformance: [3.2, 3.8, 3.5, 4.0, 3.7]
  };
  
  console.log(`Expected Engagement: ${calculateExpectedEngagement(influencerMetrics)}`);