var numSubarrayProductLessThanK = function(nums, k) {
    var j=0,i=0,N=nums.length,cnt=0,product=1;
    for(;j<N;j++){
        product *=nums[j];
		//move left bar if the product is invalid
        if(product>=k){
            for(;i<=j;i++){
			//jump out if the product is valid
                if(product <k) break
				//update the product after the condition check
                product = product/nums[i]
            }
        }
		//update cnt
        cnt += j-i+1
    }
    return cnt
};

var numSubarrayProductLessThanK = function(nums, k) {
    if (nums === null || nums.length === 0) {
        return 0;
    }
    if (k <= 1) return 0;
    let start = 0, product = 1, count = 0;
    for (let end = 0; end < nums.length; end++) {
        product *= nums[end];
        // ensure subarray product is less than k
        while (product >= k && start <= end) {
            product /= nums[start++];
        }
        count += end - start + 1;
    }
    return count;
    // T.C: O(N)
    // S.C: O(1)
};