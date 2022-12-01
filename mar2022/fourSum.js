function fourSum(num, target) {

}

console.log(
    fourSum()
);

var fourSum = function (nums, target) {
    var n = nums.length - 1,
      sum = 0,
      result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0, j = i + 1, left = j + 1, right = n; i < n - 2; j = ++i + 1) {
      // condition for neglating duplicates
      if (nums[i] === nums[i - 1]) continue;

      // Using two pointers concept as used for 3Sum
      for (left = j + 1, right = n; j < n - 1; left = ++j + 1, right = n) {
        // condition for neglating duplicates
        if (nums[j] === nums[j - 1] && j !== i + 1) continue;

        while (left < right) {
          sum = nums[i] + nums[j] + nums[left] + nums[right];

          if (sum === target) {
            result.push([nums[i], nums[j], nums[left], nums[right]]);

            // loop for neglating duplicates
            while (nums[left] === nums[++left]);
            while (nums[right] === nums[--right]);

          } else if (sum > target) right--;
          else left++;
        }
      }
    }

    return result;
  };

  var fourSum = function (nums, target) {


    //sort
    nums = nums.sort((a, b) => a - b)

    let i, j, k, m, sum
    let len = nums.length
    let res = []
    for (i = 0; i < len - 3; i++) {

        //avoid repetitive values
        if (i > 0 && nums[i] === nums[i - 1]) continue


        for (j = i + 1; j < len - 2; j++) {
            //avoid repetitive values
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue

            k = j + 1
            m = len - 1
            while (k < m) {
                sum = nums[i] + nums[j] + nums[k] + nums[m]
                if (sum === target) {
                    res.push([nums[i], nums[j], nums[k], nums[m]])

                    //avoid repetitive values
                    while (nums[k + 1] === nums[k]) k++
                    while (nums[m - 1] === nums[m]) m--

                    k++
                    m--
                } else if (sum > target) {
                    m--
                } else {
                    k++
                }
            }

        }
    }
    return res

};