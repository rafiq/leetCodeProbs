var singleNumber = function (nums) {
  // num.find(el => el != el)
const ht = {};

for (const num of nums) {
  ht[num] = ht[num] + 1 || 1;
  }

  for (const key in ht) {
    if (ht[key] === 1) {
      return key;
    }
  }
};

// if the number does not have a match then return it
// This weird because the find() method should return the first element that matches the condition, so I think this is right but something is wrong. 