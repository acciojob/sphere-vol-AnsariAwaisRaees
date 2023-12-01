function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius");
	let radius1 = radius.value;
	const volume = document.getElementById("volume");
	volume.value = 3.14*radius1*radius1*radius1;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
