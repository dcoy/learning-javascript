// es6 feature: block-scoped "let" declaration
let sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'cool' },
  { subject: 'Elephants', verb: 'are', object: 'big' },
];

// es6 feature: object destructuring
function say({ subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}

// es6 feature: for..of
for(let s of sentences) {
  say(s);
}
