function vowel2index(str) {

    return str.split("").reduce((acc,curr,idx) => {
         if ("aeiou".includes(curr.toLowerCase())) acc += idx + 1;
        else acc += curr;
      return acc;
    },"")
  }
  console.log(
    // vowel2index('this is my string'),//'th3s 6s my str15ng');
    vowel2index('Codewars is the best site in the world'),//'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
    // vowel2index('Codewars is the best site in the world'),//'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
    // vowel2index('Tomorrow is going to be raining'),// 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
    // vowel2index(''),// '');
  )

//   must learn!!!
function vowel2index(str) {
    return str.replace(/[aeiou]/ig, (m, i) => i + 1);
 }