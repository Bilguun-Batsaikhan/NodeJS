let x = 0;
let y = 0;
let z = 0;
setInterval(() => {
  if (++x === 60) {
    x = 0;
    y++;
  }
  if (y === 60) z++;
  if (z === 24) z = 0;
  console.log(`${z} : ${y} : ${x}`);
}, 500)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
