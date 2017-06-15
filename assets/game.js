(function(){

	window.onload = function() {
		isSupported();
		grid();
	};	

	function isSupported(){
		// Check if rot.js can work on this browser
		if (!ROT.isSupported()) {
		    alert("The rot.js library isn't supported by your browser.");
		} else {
		    // Good to go!
		}
	}

	function grid(){
		// Create a display 80 characters wide and 20 characters tall
		var display = new ROT.Display({width:80, height:20});
		var container = display.getContainer();
		// Add the container to our HTML page
		document.body.appendChild(container);
	}
})();