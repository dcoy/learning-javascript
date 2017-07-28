'use strict';
// es6 feature: block-scoped "let" declaration
const sentences = [
  { subject: 'JavScript', verb: 'is', object:  'great' },
  { subject: 'Elephants', verb: 'are', object: 'large' }
];

function say({ subject, verb, object }) {
  // es6 feature: template strings
  console.log(`${subject}, ${verb}, ${object}`);
}
// es6 feature: for..of
for(let s of sentences) {
  say(s);
}
