// var sound = new Audio();
var m = hellopage.innerHTML;
var n = maryannpage.innerHTML;
var t = 4000;
// sound.src = 'audio/aud.mp3';
var onTv = function(){
  document.getElementById('hellopage').style.display = "";
  // sound.play()
  setTimeout('ong()',4000);
}
var ong = function(){
  document.getElementById('maryannpage').style.display = "";
  setTimeout('onTv()',4000);
  setTimeout('blue()',4000);
}
var blue = function(){
  document.getElementById('blue').style.display = "";
  setTimeout('ong()',4000);
}
var showMenu = function(){
  $('#allmenu').toggle(1000)
  document.getElementById('allmenu').style.display = "";
}
var tvStation = "";
addEventListener('click', (event)=>{
event.preventDefault();
if( event.target.id == 'upp'){	
  $("#listofchannels ol li a:hover").show();

}
})


