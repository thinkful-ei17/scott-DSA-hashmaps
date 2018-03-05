'use strict';
const linkedList = require('./linkedList');

class HashMap{
  constructor(initialCapacity=8){
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this.deleted = 0;
  }

  get(key) {
    const index = this._findIndex(key);

    if (this._slots[index] === undefined) {
      console.log('Key not found');
      return null;
    }

    return this._slots[index].find(key);
  }

  set(key, value){
    const loadRatio = (this.length + this.deleted + 1) / this._capacity;
    if (loadRatio > HashMap.Max_LOAD_RATIO){
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }

    const index = this._findIndex(key);
    let slot = this._slots[index];

    if(!slot.head){
      slot = new linkedList();
      this.length++;
    }
    slot.insertFirst({ key, value });
  }

  remove(key){
    const index = this._findIndex(key);
    const slot = this._slots[index];
    if (slot === undefined) {
      throw new Error('Key not found');
    }
    slot.remove(key);
    if(!slot.head){
      this.length--;
    } 
  }

  _findIndex(key){
    const hash = HashMap._hashString(key);
    const index = hash % this._capacity;
    return index;
  }

  _resizeBy(size){}

  static _hashString(string){
    let hash = 5381;
    for (let i = 0; i < string.length; i++){
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

}

HashMap.Max_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;

const lor = new HashMap();

const characters = [
  { key: 'Hobbit', value: 'Frodo' },
  { key: 'Hobbit', value: 'Bilbo' },
  { key: 'Wizard', value: 'Gandolf' },
  { key: 'Human', value: 'Aragon' },
  { key: 'Elf', value: 'Legolas' },
  { key: 'Maiar', value: 'The Necromancer' },
  { key: 'Maiar', value: 'Sauron' },
  { key: 'RingBearer', value: 'Gollum' },
  { key: 'LadyOfLight', value: 'Galadriel' },
  { key: 'HalfElven', value: 'Arwen' },
  { key: 'Ent', value: 'Treebeard' }
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

