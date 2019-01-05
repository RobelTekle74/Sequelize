const readline = require('readline');
const db = require('./models');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is Artist name? ', (name) => {
  console.log(`Artist name is ${name}`);
    db.Artist.create({artistName: `${name}`})
    .then(function(user){
        console.log(user);
    });
    rl.close();
});
