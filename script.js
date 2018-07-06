/*function caretBlink(){
  if (document.getElementById("caret-blink").style.visibility = visible) {
    document.getElementById("caret-blink").style.visibility=hidden;
    window.alert("yeet!");
  } else {
    window.alert("nope!");
    document.getElementById("caret-blink").style.visibility=visible;
}*/

function typeWriter(i,txt,speed) {
  if(i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    setTimeout(function() { typeWriter(i+1,txt, speed) }, speed);
  }
}


typeWriter(0,"ava scherocman",100)


/*window.setInterval(function(){
  caretBlink();
}, 1000)}*/