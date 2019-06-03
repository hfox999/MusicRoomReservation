function findRoom(){
	var sel = document.getElementById('duration'); 
	window.location.href = "confirmation.html";
}

function deleteThis(ele){
	var deleteTrue=confirm("Are you sure you want to delete this reservation?");
	if(deleteTrue){
		var caller=ele.parentElement;
		caller.style.display="none";
	}
}

function deleteRoom(ele){
	var deleteTrue=confirm("Are you sure you want to delete this room?");
	if(deleteTrue){
		var caller=ele.parentElement;
		caller.style.display="none";
	}
}

function selectRoom(ele){
	var roomToReserve = ele;
	localStorage[ele] = roomToReserve;
}

var d = new Date(2018, 11, 24, 10, 33);
var formData;