var value = "nexus";
var key = "phone";
var value1 = "wallet";
var key1 = "black";
var glasses = "green";
var drink = "coke";
var food = "burger";

//JSON:
var choc= {
    "name" : "twix",
    "weight" : "100g",
    "carbs" : "20g"
}



window.localStorage.setItem( key, value);


document.addEventListener("deviceready", onDeviceReady, false);
//localStorage2();



//$ is used in jquery. # = ID. $ is looking at the launched in HTML document. 	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	updateDisplay();  
	alert("device ready");
    //localStorage2(); //best to call methods here. As it waits until phone is ready. (Cant test on webpage from here) 
    }



    function localStorage2() //Function name can't be something used for something else
    {
        window.localStorage.setItem( key, value );
        var getPhone = window.localStorage.getItem(key);
        alert("Phone: " + getPhone);
        
         window.localStorage.setItem( key1, value1 );
        var getPhone = window.localStorage.getItem(key1);
        $("#key1").text("Wallet: ");
        
        var items = window.localStorage.length;
        console.log("No. item stored: " + items)
        
    }

function jsonString()
{
    var myJSON = JSON.stringify(choc); //turn the var choc into a string
    console.log("my favorite chocolate: " + choc.name + " and  weight is: " + choc.weight);
}
