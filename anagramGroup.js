'use strict';

const HashMap = require('./hashMap');

//for each string in an array
//key = string.split().sort
//value = string

//enter key into hashmap, if there's a duplicate, value = [...value, value]

//for eachkey in map
//array.push, value

function groupAnagrams(words){
  const anagrams = new HashMap(words.length);
  const keys = [];

  words.forEach(word => {
  
    const key = word.split('').sort().join();
    const value = anagrams.get(key);

    if(!value){
      anagrams.set(key, [word]);
      keys.push(key);
    }
    else{
      anagrams.set(key, [...value, word]);
    }
  });
  
  return keys.map(key => anagrams.get(key));

}

const toSort = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']
console.log(groupAnagrams(toSort));