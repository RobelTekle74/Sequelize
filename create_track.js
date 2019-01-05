const readline = require('readline');
const db = require('./models');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is Track name? ', (name) => {
  console.log(`Ok, track name is ${name}`);
    rl.question('What is Album Id? ', (id) => {
      console.log(`Album id is ${id}`);
        rl.question('What is Track Duration? ', (duration) => {
          console.log(`Track duration is ${duration}`);
          db.Track.create({trackName: `${name}`, albumId: `${id}`, trackDuration: `${duration}`})
            .then(function(user){
              console.log(user);
            
            });
          rl.close();
        });
    });
});