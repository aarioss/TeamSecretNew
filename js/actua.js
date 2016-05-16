function addLi(){
	$("#ulPersonas").append("<li>"+$("#iAddPerson").val()+"</li>");

	$("#iAddPerson").val("");
}

function generar(){
	if(validar()){
		var numGr = parseInt($("#iNumGr").val());
		var numPer = parseInt($("#ulPersonas li").length);
		var grupos = new Array();
		for(var i=0; i<numGr; i++){
			grupos.push($("<ul>", {class: 'list-group'}));
		}
		var personas = new Array();
		$( "#ulPersonas li" ).each(function( index ) {
			personas.push($( this ).text());
		});
		var i =0;
		var pp =0;
		while(numPer > 0){
			if(i == numGr)
				i=0;
			for(var j=0; j<numGr; j++){
				if(i==j){
					$(grupos[i]).append("<li class='list-group-item'>"+personas[pp]+"</li>");					
					numPer -= 1;
					i++;
					break;
				}			
			}
			pp ++;
		}

		$("#d_uls ul").remove();
		for(var i=0; i<numGr; i++){
			$("#d_uls").append($(grupos[i]));
		}
	}else{
		alert("Numero de grupos tiene que ser menor o igual el numero de personas.");
		$("#iNumGr").val("");
	}

}

function validar(){
	var bool = false;
	var numPersonas = $("#ulPersonas li").length;
	var numGr = parseInt($("#iNumGr").val());
	if(numPersonas >= numGr)
		bool = true;
	return bool;
}
