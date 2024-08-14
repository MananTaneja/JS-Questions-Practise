function runningSum(nums: number[]): number[] {
	if (nums.length === 0) return []
	const result: number[] = []
	result.push(nums[0])

	for (let i = 1; i < nums.length; i++) {
		result.push(nums[i] + result[i - 1])
	}

	return result
}
