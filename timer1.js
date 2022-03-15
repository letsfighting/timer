let x = process.argv;
x = x.slice(2);



for (let i = 0; i < x.length; i++) {
 
let parsed = (parseInt(x[i]));

  if (parsed !== NaN && parsed >= 0) {
  
  setTimeout(() => {
      process.stdout.write("\x07");
    }, parsed * 1000);
    setTimeout(() => {
      console.log(`beeping at ${parsed} seconds elapsed.`);
    }, parsed * 1000);
  }
}
