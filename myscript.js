function findRoom(){
	window.location.href = "confirmation.html";
}

function deleteThis(ele){
	var deleteTrue=confirm("Are you sure you want to delete this reservation?");
	if(deleteTrue){
		var caller=ele.parentElement;
		caller.style.display="none";
	}
	var i=0;
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

function filterView(){
	window.location.href = "filter.html";
}
function mapView{

}

