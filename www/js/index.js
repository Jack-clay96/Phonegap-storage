document.addEventListener("deviceready", onDeviceReady, false);



//$ is used in jquery. # = ID. $ is looking at the launched in HTML document. 	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	updateDisplay();  
	alert("device ready");
    }


