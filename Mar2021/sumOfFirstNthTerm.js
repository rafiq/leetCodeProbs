function SeriesSum(n)
{
  let result = [];
    let j = 1;
  for (let i = 0; i < n; i++) {
          result.push(1/j)
            j += 3;
  }

  return String(result.reduce((acc,curr) => acc + curr,0).toFixed(2))
}
console.log(
    SeriesSum(1),// "1.00")
    SeriesSum(2),// "1.25")
    SeriesSum(3),// "1.39")
    SeriesSum(4),// "1.49")
)