
function typeWriter(i,txt,speed) {
  document.getElementById("typeWriter").innerHTML += txt.charAt(i);
  setTimeout(function() { typeWriter(i+1,txt, speed) }, speed);
}

typeWriter(0,"ava scherocman",500);
