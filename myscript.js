function findRoom(){
	var sel = document.getElementById('duration'); 
	window.location.href = "confirmation.html";
}

function deleteThis(ele){
	var deleteTrue=confirm("Are you sure you want to delete this?");
	if(deleteTrue){
		var caller=ele.parentElement;
		var reservation=document.getElementById('reservation1')
		caller.style.display="none";
	}
	
}