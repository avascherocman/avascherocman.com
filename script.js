
let time = new Date().getTime();

function typeWriter(i,txt,speed) {
  document.getElementById("typeWriter").innerHTML += txt.charAt(i);
  setTimeout(function() { typeWriter(i+1,txt, speed) }, speed);
  time = new Date().getTime();
}

typeWriter(0,"ava scherocman",100);
/*let newTime = ((new Date().getTime())-time);

while (newTime < 10000) {
  newTime = (new Date().getTime()-time);
}

typeWriter(0,"programmer",100);*/

