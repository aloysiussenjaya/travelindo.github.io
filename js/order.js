$("#addNewVendorModal").on("show.bs.modal", function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var modal = $(this);
  modal.find(".modal-title").text("Add New Vendor");
});

$(document).ready(function () {
    $('#table-list-of-orders').DataTable();
});