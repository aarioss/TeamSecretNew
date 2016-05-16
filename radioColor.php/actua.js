$(document).ready(function() {
	$("#f_crear_persona").submit(function(event){
		<!--Nombre-->
		$("#s_nombre").empty();
		$("#s_nombre").append($("#i_nombres").val());
		<!--CI-->
		$("#s_ci").empty();
		$("#s_ci").append($("#i_ci").val());
		<!--APELLIDO PATERNO-->
		$("#s_apellido_p").empty();
		$("#s_apellido_p").append($("#i_apellido_p").val());
		<!--APELLIDO MATERNO-->
		$("#s_apellido_m").empty();
		$("#s_apellido_m").append($("#i_apellido_m").val());
		<!--EMAIL CORREO ELECTRONICO-->
		$("#s_email").empty();
		$("#s_email").append($("#i_email").val());
		<!--TELEFONO O CELULAR-->
		$("#s_tel_cel").empty();
		$("#s_tel_cel").append($("#i_tel_cel").val());
		<!--EXPEDIDO CI-->
		$("#s_exp").empty();
		$("#s_exp").append($("#i_exp").val());
		
		event.preventDefault();
		
	})
});
