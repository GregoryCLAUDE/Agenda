




var annuaire = [];
$(document).ready(function (){
	$("#enter").click(function(){
	var name = $("#inputName").val();
	var firstname = $("#inputFirstName").val();
	var age = $("#inputAge").val();
	var buttDel = "<button id='delete'>del</button>";
	var identity = {"name": name, "firstname":firstname, "age": age};
	annuaire.push(identity);
	console.log(annuaire);
	$("input").val("");		
	$("#dataTable").DataTable().row.add([
		name,
		firstname,
		age,
		buttDel
		]).draw(false);
	})
});
$(document).ready(function(){
	$("#dataTable").on("click","button",function(){
		$("#dataTable").DataTable()
			.row($(this).parent().parent("tr"))
			.remove()
			.draw();		
		annuaire.splice($(this).parent().parent().data(),1);
		console.log(annuaire)


	})
});	


// $("tbody").delegate("#delete","click",function(){

// 	$("#dataTable").DataTable().row.remove([
// 		name,
// 		firstname,
// 		age,
// 		buttDel]).draw(false);

	//$(this).parent().parent().remove();
//	annuaire.remove(identity);


//});

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