function nonTo() {document.getElementById('tombo').style.display = "none";} function showTo() {document.getElementById('tombo').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} function showDiv() {document.getElementById('Content').style.display = "block";}
  function trm() {document.getElementById('trm').style.margin = "0";}
  function whs() {document.getElementById('whs').style.margin = "12px 12px 12px 0";document.getElementById('trm').style.display = "none";}
  function iloveu() {if(u==text2.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}}
  function fotoKt() {document.getElementById('ftKm').style.opacity = "0";document.getElementById('ftAk').style.opacity = "1";var e1 = document.getElementById('ftAk');e1.classList.add("lopdeg");}
  
  var i=0,text;
  text = ""
  var u=0,text2;
  text2 = ""
  var o=0,text3;
  text3 = "..."
  var a=0,text4;
  text4 = "I Love U "

  function ketik() {
    if(i<text.length){
      document.getElementById("text").innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik,70);
    }
    if(i==text.length){
    ketikk();}
  }
  function ketikk() {
    if(u<text2.length){
      document.getElementById("text2").innerHTML += text2.charAt(u);
      u++;
      setTimeout(ketikk,150);
    }
    if(u==text2.length){
    iloveu();siap();}
  }
  function siap() {
    if(o<text3.length){
      document.getElementById("text3").innerHTML += text3.charAt(o);
      o++;
      setTimeout(siap,80);
    }
    if(o==text3.length){
    document.getElementById('sp2').style.display = "none";document.getElementById('sp3').style.display = "block";
    duar();}
  }
  function duar() {
    if(a<text4.length){
      document.getElementById("text4").innerHTML += text4.charAt(a);
      a++;
      setTimeout(duar,250);
    }
    if(a==text4.length){
    document.getElementById("text4").innerHTML = "I Love U &#9829;";
    document.body.style.backgroundColor = "#0059B9";
    document.getElementById('fire').style.opacity = "1";
    fotoKt();}
  }