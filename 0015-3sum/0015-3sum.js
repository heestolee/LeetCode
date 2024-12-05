function threeSum(nums) {
    sortedNums = [...nums].sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < sortedNums.length; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

        let left = i + 1;
        let right = sortedNums.length - 1;

        while (left < right) {
            const total = sortedNums[i] + sortedNums[left] + sortedNums[right];

            if (total === 0) {
                result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                left++;
                right--;

                while (left < right && sortedNums[left] === sortedNums[left - 1]) {
                    left++;
                }
                while (left < right && sortedNums[right] === sortedNums[right + 1]) {
                    right--;
                }
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}
