$(document).ready(function () {

  // Al cargar, mostrar solo la sección de inicio
  $("#inicio").show();
  $("#about, #resources, #contact").hide();

  // Botón Inicio
  $("#btnInicio").click(function () {
    $("#inicio").show();
    $("#about, #resources, #contact").hide();
  });

  // Botón Sobre la ludopatía
  $("#btnAbout").click(function () {
    $("#about").show();
    $("#inicio, #resources, #contact").hide();
  });

  // Botón Recursos
  $("#btnResources").click(function () {
    $("#resources").show();
    $("#inicio, #about, #contact").hide();
  });

  // Botón Contacto
  $("#btnContact").click(function () {
    $("#contact").show();
    $("#inicio, #about, #resources").hide();
  });

  // Validar formulario y mostrar modal
  $("#formContacto").submit(function (e) {
    e.preventDefault();
    const correo = $("#correo").val();

    if (/\S+@\S+\.\S+/.test(correo)) {
      $("#modalConfirm").modal("show");
      this.reset();
    } else {
      alert("Por favor, introduce un correo válido.");
    }
  });
});
