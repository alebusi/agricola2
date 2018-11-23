var tess = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*var success = new Audio('success.wav');*/

function myfunc(id,i,ind) {
  tess[ind]+=i;
  v=tess[ind];
  if (v === 0) {
    document.getElementById(id).innerHTML = "-";
  }
  else { 
    document.getElementById(id).innerHTML = v;
  }
  if (i == 1) {
    if ( id == "pecora" ) {
       var aumenta = new Audio('pecora.mp3');
       }
    else if ( id == "cinghiale" ) {
       var aumenta = new Audio('cinghiale.mp3');
       }
    else if ( id == "bestiame" ) {
       var aumenta = new Audio('mucca.mp3');
       }
    else {
       var aumenta = new Audio('success.wav');
       }
    aumenta.play();
    }
  else {
    var decrementa = new Audio('togli.mp3');
    decrementa.play();
    }
  }

function myfunc2(div) {
  var className = div.getAttribute("class");
  if (document.getElementById("controllo").className=="off") {
  if (className=="spazio") {
    div.className = "stanza";
    }
  else if (className=="stanza") {
    div.className = "stalla";
    }
  else if (className=="stalla") {
    div.className = "campo";
    }
  else if (className=="campo") {
    div.className = "grano_3";
    }
  else if (className=="grano_3") {
    div.className = "grano_2";
    }
  else if (className=="grano_2") {
    div.className = "grano_1";
    }
  else if (className=="grano_1") {
    div.className = "ortaggio_2";
    }
  else if (className=="ortaggio_2") {
    div.className = "ortaggio_1";
    }
  else {
    div.className = "spazio";
  }
  var suona = new Audio('campo.mp3');
  suona.play();
  }
}

function mysel(div) {
  var suona = new Audio('campo.mp3');
  var className = div.getAttribute("class");
  if (document.getElementById("controllo").className=="on") {
    if (className=="largo") {
       div.className = "largo_nero";
       }
    else if (className=="largo_nero") {
       div.className = "largo";
       }
    suona.play();
    }
}

function mySwitch(div) {
  var suona = new Audio('campo.mp3');
  var className = div.getAttribute("class");
  if (className=="off") {
    div.className = "on";
    }
  else if (className=="on") {
    div.className = "off";
    }
  suona.play();
}
