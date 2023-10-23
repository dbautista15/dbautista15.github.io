function scriptTest(){
	console.log("Hey my script is running");
}
var button = document.createElement("button");
button.innerHTML = "Click Me";

button.onclick = function() {
  alert("Button was clicked!");
};

document.body.appendChild(button);
document.getElementById("form").addEventListener("submit", function(event) {
	event.preventDefault();
	
	var name = document.getElementById("name").value;
	var mood = document.getElementById("mood").value;

	document.getElementById("greeting").innerHTML = "Hello, " + name + " We're glad your re doing "+mood;
  });
  