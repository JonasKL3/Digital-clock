
//calling to define time every second

function printTime() {
  let div = document.getElementById('div'); 
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  div.innerHTML =hours + ":" + mins;
}
setInterval(printTime, 1000);

//set sound in the clock


