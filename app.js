
var annuaire = [];




	$("#enter").click(function(){
		var name = $("#inputName").val();
		var firstname = $("#inputFirstName").val();
		var age = $("#inputAge").val();
		var identity = {"name": name, "firstname":firstname, "age": age};
		annuaire.push(identity);
		$("tbody").append($("<tr><td>"+name+"</td><td>"+firstname+"</td><td>"+age+"</td><td><button id='delete'>supprimer</button></td>"));		
		localStorage.setItem(JSON.stringify(identity));	
});

	
$("tbody").delegate("#delete","click",function(){

	$(this).parent().parent().remove();

})


	//$("tbody").delegate("#delete","click",function(){
	//	$("tr").remove();
	//}); 
	//permet de reinitialiser le tableau 