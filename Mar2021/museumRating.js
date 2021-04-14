function removeSmallest(numbers) {
    let min = Math.min(...numbers);

    return numbers.reduce((acc,curr) => {
        if (curr === min) {
            acc;
            min = -Infinity;
        } else acc.push(curr)
        return acc;
    },[])
  }
  console.log(
    removeSmallest([1, 2, 3, 4, 5]),// [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
    removeSmallest([5, 3, 2, 1, 4]),// [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
    removeSmallest([2, 2, 1, 2, 1]),// [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
    removeSmallest([]),// [], "Wrong result for []");
  )