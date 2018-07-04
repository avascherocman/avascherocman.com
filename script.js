
var txt = "ava scherocman";
var speed =  50;
function typeWriter() 
    for (i=0;i=txt.length;i++) {
        document.getElementById("typewriter").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

