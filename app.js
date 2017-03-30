
var annuaire = [];




	$("#enter").click(function(){
		var name = $("#inputName").val();
		var firstname = $("#inputFirstName").val();
		var age = $("#inputAge").val();
		var identity = {"name": name, "firstname":firstname, "age": age};
		annuaire.push(identity);
			
		//$('table').append().('.fiche');
		
			$("<td></td>").append(name).insertAfter(".td");
			$("<td></td>").text(firstname).insertAfter(".tr");
			$("<td></td>").text(age).insertAfter(".tr");


			//$("#name").html(name);
			//$("#firstname").html(firstname);
			//$("#age").html(age);
});



