// var song = "Started from the bottom now we're here";
// var songA = "They know, they know, they know"
// var songB = "Just hold on we're going home"
// var lyrics = ["songA", "songB", "songC"];
//
// $(#drake).innerHTML();
//
// $(document).ready() {
//   console.log("")
//
// };
$(document).ready(function() {
msg = new Array("Started from the bottom now we're here.",
"Started from the bottom now we're here!",
"Started from the bottom now we're here",
"Started from the bottom now we're here.")
word = 10
function m() {
msg = new Array("PStarted from the bottom now we're here.",
"Started from the bottom now we're here!",
"Started from the bottom now we're here",
"Started from the bottom now we're here.")
word = 10
}
function e() {
msg = new Array("Started from the bottom now we're here Started from the bottom now we're herest!",
"Started from the bottom now we're hereStarted from the bottom now we're here.",
"Started from the bottom now we're hereStarted from the bottom now we're here!",
"Started from the bottom now we're hereStarted from the bottom now we're here?")
word = 15
}
function s() {
msg = new Array("Started from the bottom now we're here.",
"Started from the bottom now we're here",
"Started from the bottom now we're here",
"Started from the bottom now we're here!")
word = 7
}
function beginIt() {
randNum = Math.floor((Math.random() * 10)) % 4
msgType = msg[randNum]
day = new Date();
startType = day.getTime();
document.theForm.given.value = msgType
document.theForm.typed.focus();
document.theForm.typed.select();
}
function cheat() {
alert("You can not change that!");
document.theForm.typed.focus();
}
function stopIt() {
dayTwo = new Date();
endType = dayTwo.getTime();
totalTime = ((endType - startType) / 1000)
spd = Math.round((word/totalTime) * 60)
if (document.theForm.typed.value == document.theForm.given.value) {
alert("\nYou typed a " + word + " word sentence in "
+ totalTime + " seconds, a speed of about " + spd + " words per minute!")
}
else {
alert("You made an error, but typed at a speed of " + spd + " words per minute.")
 }
}
});
