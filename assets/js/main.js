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

    //Contar elementos
	var elementCount = $("#test").find("*").css("border", "3px solid red").length;
	$("#elementos").prepend("<h4>" + elementCount + " elementos encontrados</h3>");
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




// FUNCIONES DE LA TABLA 
function borrarFila(link) {
    var tr = $(link).parent().parent();
    $(tr).remove();

}

function agregarFila(link) {
    $("#t_productos").append(addFila("", "", "", ""));
}

function copiarFila(link) {
    var tr = $(link).parent().parent();
    $("#t_productos").append(addFila(getNombre(tr), getCantidad(tr), getPrecio(tr), getTotal(tr)));
}

function getNombre(tr) {
    return $(tr).find("td").children().val();
}

function getCantidad(tr) {
    return $(tr).find("td").next().children().val();
}

function getPrecio(tr) {
    return $(tr).find("td").next().next().children().val();
}

function getTotal(tr) {
    return $(tr).find("td").next().next().next().children().val();
}

function addFila(nombre, cantidad, precio, total) {

    var html = "<tr>";
    html += "<td><input type='text' value='" + nombre +"'/></td>";
    html += "<td><input type='number' onkeydown='calcularTotalCant(this)' value='"+cantidad+"'/></td>";
    html += "<td><input type='number' onkeydown='calcularTotalPrecio(this)' value='" + precio + "'/></td>"; 
    html += "<td><input type='number' value='" + total + "' readonly/></td>";
    html += "<td><a href='#' onclick = 'copiarFila(this) '><img src ='assets/img/copiar.JPG'/></a>";
    html += "<a href='#' onclick = 'borrarFila(this) '><img src ='assets/img/borrar.JPG'/></a></td>"; 
    html += "</tr>";
    return html;

}

function calcularTotalCant(cant) {
    var cantidad = parseFloat($(cant).val());
    var precio = parseFloat($(cant).parent().parent().find("td").next().next().children().val());
    var total = cantidad * precio;
    $(cant).parent().parent().find("td").next().next().next().children().val(cantidad * precio);
}

function calcularTotalPrecio(prec) {
    var precio = parseFloat($(prec).val());
    var cantidad = parseFloat($(prec).parent().parent().find("td").next().children().val());
    var total = cantidad * precio;
    $(prec).parent().parent().find("td").next().next().next().children().val(cantidad * precio);
}
function celiminaFila(link){
	//alert("Entro a Eliminar");
	var tr =$(link).parent().parent();
	$(tr).remove();
	
}
function ccopiarFila(link){
	//nota las alert tienen Objetivo
	//alert("entro a copiar");
	var tr =$(link).parent().parent();
	//alert($("#t_produtos").append(addFila( getCantidad(tr), getPrecio(tr), getTotal(tr))));
	$("#t_productos").append(caddFila(getNombre(tr),getCantidad(tr),getPrecio(tr),getTotal(tr)));
}
	function getNombre(tr){
		return $(tr).find("td").children().val();
	}
	function getCantidad(tr){
		return $(tr).find("td").next().children().val();
	}
	function getPrecio(tr){
		return $(tr).find("td").next().next().children().val();
	}
	function getTotal(tr){
		return $(tr).find("td").next().next().next().children().val();	
	}
	
function caddFila(nombre, cantidad, precio , total){
	//alert(nombre);
	var html="<tr>";
	html += "<td><input class='c_nombre' typer='text' value='"+nombre+"'/> </td>";
	
	html += "<td> <input class='c_cantidad' type='number' value='"+cantidad+"' /> </td>";
	html += "<td> <input class='c_precio' type='number' value='"+precio+"' /> </td>";
	html += "<td> <input class='c_total' type='number' value='"+total+"' /> </td>";
	html += "<td> <a href='#' onclick='ccopiarFila(this)'>copiar</a>  </td>";
	html += "<td> <a href='#' onClick='celiminaFila(this)'>Eliminar Fila</a> </td>";
	html += "</tr>";
	return html;
}
function ccalcularTotal(cant){
	//revisar aun no suma el total
	var cantidad=parseFloat($(cant).val());
	var precio=parseFloat($(cant).parent().parent().find('.c_precio').val());
	$(cant).parent().parent().find('.c_total').val(candidad*precio);

	}
function cagregarFila(){
	$("#t_productos").append(caddFila("","","",""));
}


















