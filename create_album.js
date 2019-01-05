const readline = require('readline');
const db = require('./models');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is Album name? ', (name) => {
  console.log(`Album name is ${name}`);
    rl.question('What is Album year? ', (year) => {
      console.log(`Album year is ${year}`);
        rl.question('What is Artist id? ', (id) => {
          console.log(`Artist id is ${id}`);
          db.user.create({albumName: `${name}`, albumYear: `${year}`, artistId: `${id}`})
            .then(function(user){
              console.log(user);
            
            });
          rl.close();
        });
    });
});

