var clock = setInterval(function() {
 var now = new Date();
 var hour = now.getHours();
 var min = now.getMinutes();
 document.getElementById('time')
  .innerHTML = "Your Time - " +
  hour + ":" + min;
}, 1000);
var txt =
 "Welcome to my portfolio,I'm a web developer.Languages I use mainly - Html, css, JavaScript";
var speed = 70;
var i = 0;

function start() {

 if (i < txt.length) {
  document.getElementById('demo')
   .innerHTML += txt.charAt(i);
  i++;
  setTimeout(start, speed);
 }
}
