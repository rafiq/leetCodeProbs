const lengthOfLongestSubstring = (s) => {
    const set = new Set();
    let max = (l = r = 0);

    while (r < s.length) {
      if (!set.has(s[r])) {
        set.add(s[r++]);
        max = Math.max(max, set.size);
      } else set.delete(s[l++]);
    }
    return max;
  };
//   Using Map:

  const lengthOfLongestSubstring = (s) => {
    const mostRecent = new Map(); // Stores the most recent idx
    let startIdx = 0, res = 0;
    for (let i = 0; i < s.length; i++) {
      if (mostRecent.has(s[i]) && mostRecent.get(s[i]) >= startIdx) {
        res = Math.max(res, i - startIdx);
        startIdx = mostRecent.get(s[i]) + 1;
      }
      mostRecent.set(s[i], i);
    }
    return Math.max(res, s.length - startIdx);
  };

