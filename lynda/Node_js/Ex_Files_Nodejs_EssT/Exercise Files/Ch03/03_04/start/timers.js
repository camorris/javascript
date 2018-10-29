// we are gonna practice with functions setTimeout
// clearTimeout and setInterval and clearIntereval

var waitTime = 3000;  // this 3 seconds long
var currentTime = 0;
var waitInterval = 500;
var percentWaited = 0;

function writeWaitingPercent(p){
    process.stdout.clearLine();// this will clear the last line in the terminal
    process.stdout.cursorTo(0);// this will move the cursor back to the beginning of the line
    process.stdout.write(`waiting...${p}%`);
}
console.log("wait for it");

var interval = setInterval(function(){
    currentTime += waitInterval; // this will 500 miliseconds to the currenttime 
    percentWaited = Math.floor((currentTime/waitTime)* 100);//this will give us a percentage
    writeWaitingPercent(percentWaited)//this will display percentage
    console.log(`waiting ${currentTime/1000} seconds...`); // dividing the currenTime variable by 1000 is really 0 / 1000
}, waitInterval)


 setTimeout(function(){
     clearInterval(interval)// this will stop the interval we set above from counting seconds
     writeWaitingPercent(100);
    console.log("done")
 }, waitTime)

 process.stdout.write("\n\n"); //this will add line breaks in the terminal
 writeWaitingPercent(percentWaited)