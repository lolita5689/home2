function operation(button){
    let nam1 = parseInt(document.getElementById("firstInput").value) ;
			
	let nam2 = parseInt(document.getElementById("secondInput").value) ;
			
			
	if ( button.id === "pluss") { 
		document.getElementById("result").value = nam1 + nam2;
	} else if ( button.id === "minuss"){
	 	document.getElementById("result").value = nam1 - nam2;
	} else if (  button.id === "mnogh"){
		document.getElementById("result").value = nam1 * nam2;
	}
	 else if (  button.id === "deli"){
		document.getElementById("result").value = nam1 / nam2;
	}
	 else if (  button.id === "stepen"){
		document.getElementById("result").value = Math.pow(nam1,nam2);
	}
	
	console.log(nam1, nam3, nam2, result);
}
		
function klick() {
	document.getElementById("podskszka").classList.toggle('active');
}
	
	