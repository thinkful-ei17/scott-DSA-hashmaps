'use strict';

const HashMap = require('./hashMap');

const lor = new HashMap();

const characters = [
  {key: 'Hobbit', value: 'Frodo' }, 
  {key: 'Hobbit', value: 'Bilbo' }, 
  {key: 'Wizard', value: 'Gandolf' }, 
  {key: 'Human', value: 'Aragon' }, 
  {key: 'Elf', value: 'Legolas' }, 
  {key: 'Maiar', value: 'The Necromancer' }, 
  {key: 'Maiar', value: 'Sauron' }, 
  {key: 'RingBearer', value: 'Gollum' }, 
  {key: 'LadyOfLight', value: 'Galadriel' }, 
  {key: 'HalfElven', value: 'Arwen' }, 
  {key: 'Ent', value: 'Treebeard' }
];

// function seedMap(map, arr){
//   const keys = [];
//   arr.forEach(item => {
//     let value = map.get(item.key);
//     if(value){
//       value = value + 1;
//     }
//   })
// }
lor.set('Hobbit', 'Bilbo');
lor.set('Hobbit', 'Frodo');
lor.set('Wizard', 'Gandolf');
lor.set('Human', 'Aragorn');
lor.set('Elf', 'Legolas');
lor.set('Maiar', 'The Necromancer');
lor.set('Maiar', 'Sauron');
lor.set('RingBearer', 'Gollum');
lor.set('LadyOfLight', 'Galadriel');
lor.set('HalfElven', 'Arwen');
lor.set('Ent', 'Treebeard');

//HashMap overwrote/update the first value with the second.
// If you want to keep both and be able to update them, you need to re-assign one 
//of the keys to a different key.
console.log(lor.get('Maiar'));