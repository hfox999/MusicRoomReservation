var numberOfReservations=2;
var numberOfRooms=3;
function deleteThis(ele){
	var deleteTrue=confirm("Are you sure you want to delete this reservation?");
	if(deleteTrue){
		numberOfReservations--;
		var caller=ele.parentElement;
		caller.style.display="none";
	}
	if(numberOfReservations==0){
		var noReservations=document.getElementById("noReservations");
		noReservations.style.display="block";
	}
}

function deleteRoom(ele){
	var deleteTrue=confirm("Are you sure you want to delete this room?");
	if(deleteTrue){
		numberOfRooms--;
		var caller=ele.parentElement;
		caller.style.display="none";
	}
	if(numberOfRooms==0){
		var noReservations=document.getElementById("noTimesAvailable");
		var backButton=document.getElementById("backButtonClick");
		noReservations.style.display="block";
		backButton.style.display="none";
	}

}

function selectRoom(ele){
	var roomToReserve = ele;
	localStorage[ele] = roomToReserve;
}


