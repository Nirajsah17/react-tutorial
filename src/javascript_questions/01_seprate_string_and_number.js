// Write a program to seperate the number and string

// Input = ['alice', 34, {name: niraj}, 'wonder', 1, {c:9}]
// output = [['alice', 'wonder'], [34, 1,], [{name: niraj}, {c:9}]]

const mix = ["alice", 34, { name: 'niraj' }, "wonder", 1, { c: 9 }, true, false];


const number = [];
const strings = [];
const boolean = [];
const objects = [];

const correct = [];
for(const item of mix){
  if(typeof item === 'number'){
    number.push(item);
  }else if(typeof item === 'string'){
    strings.push(item);
  }else if(typeof item === 'boolean'){
    boolean.push(item)
  }else if(typeof item === 'object'){
    objects.push(item);
  }
}

console.log([number, strings, boolean, objects])