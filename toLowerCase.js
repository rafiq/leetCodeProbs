//Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

var toLowerCase = function(str) {
  return str.toLowerCase();
};

// Fastest
var toLowerCase = function(str) {
  const a = str.split('');
  a.forEach((c, i) =>
      a[i] = c.charCodeAt() < 91 && c.charCodeAt() > 64
          ? lowerChar(c)
          : c
  );

  function lowerChar(c) {
      return String.fromCharCode(c.charCodeAt() + 32);
  }

  return a.join('');
};
