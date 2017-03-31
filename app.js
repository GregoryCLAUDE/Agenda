var annuaire = [];

function save(){

	localStorage.setItem("annuaire",JSON.stringify(annuaire));

}

function load(){
	var a = localStorage.getItem("annuaire");

	if (a != null){
		annuaire = JSON.parse(a);
	}
	console.log(annuaire)
}



$(document).ready(function (){

	load();
	
	$("#enter").click(function(){
	
		var name = $("#inputName").val();
		var firstname = $("#inputFirstName").val();
		var age = $("#inputAge").val();
		var buttDel = "<button id='delete'>del</button>";
		var identity = {"name": name, "firstname":firstname, "age": age};
		annuaire.push(identity);
		save();
		load();
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


$(document).ready(function(){
		$("#dataTable").DataTable();
		$("#dataTable").DataTable({
			"scrollX": true
	})
});
