'use strict';

const HashMap = require('./hashMap');

const lor = new HashMap();

const characters = [
  { 'Hobbit': 'Bilbo' }, 
  { 'Hobbit': 'Frodo' }, 
  { 'Wizard': 'Gandolf' }, 
  { 'Human': 'Aragon' }, 
  { 'Elf': 'Legolas' }, 
  { 'Maiar': 'The Necromancer' }, 
  { 'Maiar': 'Sauron' }, 
  { 'RingBearer': 'Gollum' }, 
  { 'LadyOfLight': 'Galadriel' }, 
  { 'HalfElven': 'Arwen' }, 
  { 'Ent': 'Treebeard' }
];


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