'use strict';

var isAVowel = function(lttr){
  lttr = lttr.toLowerCase();
  // your code goes here
  if (lttr == 'a' || lttr == 'e' || lttr == 'i' || lttr == 'o' || lttr == 'u') {
    return true;
  } else {
    return false;
  }
};

module.exports = isAVowel;
