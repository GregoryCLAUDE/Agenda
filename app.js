




var annuaire = [];
$(document).ready(function (){
	$("#enter").click(function(){
	var name = $("#inputName").val();
	var firstname = $("#inputFirstName").val();
	var age = $("#inputAge").val();
	var identity = {"name": name, "firstname":firstname, "age": age};
	annuaire.push(identity);
	$("input").val("");
	//$("tbody").append($("<tr><td>"+name+"</td><td>"+firstname+"</td><td>"+age+"</td><td><button id='delete'>supprimer</button></td></tr>"));		
	$("#dataTable").DataTable().row.add([
		name,
		firstname,
		age
		]).draw(false);
	})
	$("#enter").click();
});
	
$("tbody").delegate("#delete","click",function(){

	$(this).parent().parent().remove();

});

$(document).ready(function(){
		$("#dataTable").DataTable();
		$("#dataTable").DataTable({
			"scrollX": true
	})
});




	//$("tbody").delegate("#delete","click",function(){
	//	$("tr").remove();
	//}); 
	//permet de reinitialiser le tableau 