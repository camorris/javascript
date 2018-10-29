console.log(process.argv);
// this will you to that `process.argv` is a array. in the terminal you will just run node app.js
function grab(flag){
    var index = process.argv.indexOf(flag);
    retrun(index === -1)? null : process.argv[index+1];
}
// a flag is used with `--` in terminal to set whatever value you enter
var greeting = grab('--greeting');
var user = grab ('--user');

if (!user || !greeting){
    console.log("You Blew It!");
} else {
    console.log(`welcome ${user}, ${greeting}`);

}
// now in terminal you will type `node app --user Chase --greeting "hello hi hey"` 
