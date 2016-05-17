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

