var findMinDifference = function(timePoints) {


    // be careful because we can go either direction (clockwise or counter)
// ! normalize data AKA Convert the input to total minutes in one day ~ 1440
    // sort nLogn

    // take difference from each adjacent pair including first and last

    //
};

// O(n) solution

var findMinDifference = function(timePoints) {
    // establish a buckets list
    const timeTicks = new Array(1440).fill(0);
    // fill a one aka truthy value at each index where the total of minutes of the current time slot
    for(let point of timePoints) {
        const [hour, min] = point.split(':');
        const minutes = parseInt(hour) * 60 + parseInt(min);//careful to not use strings
        if(timeTicks[minutes] === 1) {
            return 0; // if 2 timePoints are the same
        }
        timeTicks[minutes] += 1 //setting the index/minutes slot to a truthy value
    }

    let first;//declare variables to be used later so we are not re declaring variables uneccarily
    let prev;
    let min = Infinity;

    for(let i = 0; i < timeTicks.length; i++) {
        if(timeTicks[i] === 1) {
            if(first === undefined) {
                first = i;
            }//set the first value to be used at the end to check the looping last value to this value.
            if(prev) {
                min = Math.min(i - prev, min);
            }//i is the minutes count so take that minus prev and then check to see if that is a new min
            prev = i;//set your prev variable every iteration
        }
    }

    return Math.min(min, 1440 - prev + first);//this checks the last possible edge case from last value to the first value which will be last value minus 1440 plus the first value and then check if that is the min
};

// O(nlogn)
var findMinDifference = function(timePoints) {
    timePoints.sort();
    timePoints = timePoints.map(el => {
      let [hours, minutes] = el.split(':');
      return Number(hours) * 60 + Number(minutes);
    })

    timePoints.push(timePoints[0] + 1440);//edge case of comparing first num and last num
    let minDiff = Infinity;
    for (let i = 1; i < timePoints.length; i ++) {//start from 1 and compare all adjacent numbers
      minDiff = Math.min(minDiff, timePoints[i] - timePoints[i - 1]);
    }

    return minDiff;
  };

