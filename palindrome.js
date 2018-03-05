'use strict';

const HashMap = require('./hashMap');

// loop over the string, inserting each letter into a hash map with the value odd
//if it hits a duplicate, switch the value (from even to odd || odd to even), increment/decrement
//get values back
//check if more than one of them is odd
function possiblePalindrome(string){

  const letterMap = new HashMap(string.length);

  let odd = 0;
  let even = 0;

  for(let i = 0; i < string.length; i++){
    const value = letterMap.get(string[i]);
    if(value === 'odd'){
      letterMap.set(string[i], 'even');
      even++;
      odd--;  
    }else if(value === 'even'){
      letterMap.set(string[i], 'odd');
      even--;
      odd++;
    }
    else{
      letterMap.set(string[i], 'odd');
      odd++;
    }
  }

  console.log('even:', even, 'odd:', odd);

  if(odd <= 1){
    return true;
  }
  return false;
}

console.log(possiblePalindrome('amanaplanacanalpanama'));//true
console.log(possiblePalindrome('hannah'));//true
console.log(possiblePalindrome('add'));//true
console.log(possiblePalindrome('bug'));//false
console.log(possiblePalindrome('bed'));//false