$(document).ready(function () {
  var counter = 0;
  $("#addrow").on("click", function () {
    var newRow = $("<tr>")
    var cols = "";

    cols += '<td><input type="text" class="form-control" name="dishname' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="produced' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="created_till_now' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" name="predicted' + counter + '"/></td>';
    cols += '<td> <input type="button" class="ibtnDel btn btn-md btn-danger" value="Delete"> </td>';
    newRow.append(cols);
    $("table.order-list").append(newRow);
    counter++;
    });

    $("table.order-list").on("click", ".ibtnDel", function (event) {
      $(this).closest("tr").remove();
      counter -= 1
  });
});

function calculateRow(row) {
    var price = +row.find('input[dishname^="price"]').val();
}
function calculateGrandTotal(){
      var grandTotal = 0;
      $("table.order-list").find('input[dishname^="price"]').each(function () {
        grandTotal += +$(this).val();
      });
      $("#grandTotal").text(grandTotal.toFixed(2));
    }
