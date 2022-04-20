
console.log("hello word")

document.getElementById("cantidad_licencias").innerHTML=3;
function add(){
  document.getElementById("cantidad_licencias").innerHTML++;
}
function substract(){
  if(document.getElementById("cantidad_licencias").innerHTML>3)
    document.getElementById("cantidad_licencias").innerHTML--;
}