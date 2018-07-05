




function cursorBlink(){
  if (document.getElementById("vl").style.visibility =true){
  document.getElementById("vl").style.visibility=false;
  }else{
    document.getElementById("vl").style.visibility=true;
  }
}

function typeWriter(i,txt,speed) {
  if(i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    setTimeout(function() { typeWriter(i+1,txt, speed) }, speed);
    // cursorBlink();
  }
}

typeWriter(0,"ava scherocman",100)