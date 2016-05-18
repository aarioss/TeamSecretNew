$ ( document ).ready(function(){
	$("#f_crear_persona").submit(function(event){
		$("#s_nombres").empty();
		$("#s_nombres").append($("#i_nombres").val());

		$("#s_ci").empty();
		$("#s_ci").append($("#i_ci").val());

		$("#s_exp").empty();
		$("#s_exp").append($("#i_exp").val());

		$("#s_apellido_p").empty();
		$("#s_apellido_p").append($("#i_apellido_p").val());

		$("#s_apellido_m").empty();
		$("#s_apellido_m").append($("#i_apellido_m").val());

		$("#s_email").empty();
		$("#s_email").append($("#i_email").val());

		$("#s_tel_cel").empty();
		$("#s_tel_cel").append($("#i_tel_cel").val());

		event.preventDefault();
	})

});

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

function cambiaColor(){ 
   	 	//fucnion del Archivo RadioColor.htm
   		for (var i=0; i<document.coloreando.color.length;i++){ 
      		if (document.coloreando.color[i].checked) 
         	break; 
   		}
		//aqui solo se esta enviando el id el color encontrado segun el radio que se escogio siguiendo el value que poseen
   		document.getElementById('1').style.backgroundColor = document.coloreando.color[i].value
	} 

function mostrarImagen() {
    $("#my-img").removeClass('hidden')
}

function ocultarImagen() {
    $("#my-img").addClass('hidden')

}
	

