function myFunction(){
	document.getElementById("andrei").innerHTML="Doctor Inginer Perseca Andrei Cosmin"
	document.getElementById("foto").innerHTML="Editor sef"
	document.getElementById("dans").innerHTML="Campion national la dans"
	document.getElementById("video").innerHTML="Videograf"
	document.getElementById("realizari").innerHTML="Realizarile mele"
	document.getElementById("myimage").src="absolvire.jpg"
	document.getElementById("font").style.color="#A689E1"
	document.getElementById("font1").style.color="blue"
	document.body.style.backgroundColor = "royalblue"
}
const d = new Date();
let year = d.getFullYear();
function mouseOver() 
{
  document.getElementById("demo").innerHTML = year-2002;
}

function mouseOut()
 {
  document.getElementById("demo").innerHTML = "Vârsta";
}
