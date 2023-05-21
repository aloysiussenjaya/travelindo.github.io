// Pop Up
$("#addNewVendorModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
});

$("#addNewCompanyModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
});

$("#addNewTypeModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
});

// Data Tables
$(document).ready(function () {
  $("#table-list-of-orders").DataTable();
});
