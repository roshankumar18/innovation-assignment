// Largest Triangle Three Buckets (LTTB) algorithm
 const lttbDownsample = (data, threshold) => {
    const N = data.length;
    const targetCount = threshold;
  
    if (N <= targetCount || targetCount <= 2) {
      return data; // Not enough points to downsample
    }
    const formatTimestamp = (timestamp) => {
    return new Date(timestamp).getFullYear().toString();
  };
  
    const sampledData = [];
    const ratio = N / targetCount;
    let sampledIndex = 0;
  
    for (let i = 0; i < targetCount - 2; i++) {
      const nextBucketSize = Math.round((i + 1) * ratio) - sampledIndex;
      const avgProfitPercentage = averageProfitPercentage(data, sampledIndex, nextBucketSize);
  
      sampledData.push({
        Timestamp: data[sampledIndex + nextBucketSize - 1].Timestamp,
        ProfitPercentage: avgProfitPercentage.toFixed(4), // Adjust decimal places as needed
      });
  
      sampledIndex += nextBucketSize;
    }
  
    // Add the last point
    sampledData.push({
      Timestamp: data[N - 1].Timestamp,
      ProfitPercentage: data[N - 1].ProfitPercentage,
    });
  
    return sampledData;
  };
  
  // Helper function to calculate the average profit percentage in a bucket
  const averageProfitPercentage = (data, startIndex, bucketSize) => {
    let sum = 0;
  
    for (let i = startIndex; i < startIndex + bucketSize; i++) {
      sum += parseFloat(data[i].ProfitPercentage);
    }
  
    return sum / bucketSize;
  };
  

module.exports = {lttbDownsample}
  