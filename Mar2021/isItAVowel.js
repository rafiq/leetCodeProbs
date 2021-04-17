String.prototype.vowel = function() {


    if (this.length === 0) return false;
    return this.length === 1 ? "aeiou".includes(this.toLowerCase()) : false;
    this.split("").reduce((acc,curr) => {
     if ("aeiou".includes(curr.toLowerCase())) acc = true;
      else acc = false;
      return acc;
    })
  };
  console.log(
    ''.vowel(),// false);
    'a'.vowel(),// true);
    'E'.vowel(),// true);
    'ou'.vowel(),// false);
    'z'.vowel(),// false);
    'lol'.vowel(),// false);
  )