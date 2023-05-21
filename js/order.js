// Pop Up
$("#addNewVendorModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var modal = $(this);
  modal.find(".modal-title").text("Add New Vendor");
});

$("#addNewCompanyModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var modal = $(this);
  modal.find(".modal-title").text("Add New Vendor");
});

// Data Tables
$(document).ready(function () {
  $("#table-list-of-orders").DataTable();
});
