$(document).ready(function () {

  // Al cargar, solo mostramos la sección de inicio
  $("#inicio").show();
  $("#about, #resources, #contact").hide();

  // Botón INICIO
  $("#btnInicio").click(function () {
    $("#inicio").show();
    $("#about, #resources, #contact").hide();
  });

  // Botón ABOUT
  $("#btnAbout").click(function () {
    $("#about").show();
    $("#inicio, #resources, #contact").hide();
  });

  // Botón RESOURCES
  $("#btnResources").click(function () {
    $("#resources").show();
    $("#inicio, #about, #contact").hide();
  });

  // Botón CONTACT
  $("#btnContact").click(function () {
    $("#contact").show();
    $("#inicio, #about, #resources").hide();
  });

});
