var phone = "nexus";
var wallet = "black";
var glasses = "green";
var drink = "coke";
var food = "burger";

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

    function localStorage()
    {
        window.localStorage.setItem( phone, "nexus" );
        console.log(var getPhone = window.localStorage.getItem(phone));
        alert("localstorge");
        
    }
