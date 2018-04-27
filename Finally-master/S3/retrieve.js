Backendless.initApp("7B93C889-5309-F425-FF2A-B39F7B5AE100","F89B1CF6-AB1D-AAD8-FF73-DFCD2A226100");

$(document).on("pageshow","#retrieve", onPageShow);

function onPageShow() {
	console.log("page shown");
    
	
      
	//run a query
	
    
    $(document).on("click", "#return", onReady);
   
    
	


} 

function onReady(){
    Backendless.Data.of( "Register" ).find().then(search).catch(error);
}

function search(register) {
		console.log("search");
        var emailaddress = $("#emailaddress").val();
    if(emailaddress=='') alert("Please enter your email address.");

        console.log(register[0].Username);
        var j = 0;
     for(var i = 0; i < register.length; i++){
         if(emailaddress==register[i].Email)
             {
                 if(pass==register[i].Password)
             {
                 alert();
                 j=1;
             }
                 else {
                     j=1;
                     alert("The password you entered is wrong, please enter again.");}
     }

}
    if(j==0&&user!=''&&pass!='')
     alert("This account does not exist.");
}




function error(err) {
    checkConnection();
}

function checkConnection() {
    var networkState = navigator.connection.type;
 
    if(networkState = "none")
 
    alert('Connection type: No network connection');
}

  
