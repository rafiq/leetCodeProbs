function removeRotten(bagOfFruits){
    if (bagOfFruits === null || bagOfFruits === undefined) return [];
    return bagOfFruits.map(el => {
        return el.toLowerCase().replace("rotten", "")
    });
  }
  console.log(
    removeRotten(["apple","banana","kiwi","melone","orange"]),//["apple","banana","kiwi","melone","orange"])
    removeRotten([]),//[])
    removeRotten([ 'rottenApple',
    'rottenBanana',
    'rottenApple',
    'rottenPineapple',
    'rottenKiwi' ]),//['apple', 'banana', 'apple', 'pineapple', 'kiwi']
  )

//   I knew there was a way to do it like this.
function removeRotten(arr){
    return arr ? arr.map(x=>x.replace('rotten', '').toLowerCase()) : [] ;
}