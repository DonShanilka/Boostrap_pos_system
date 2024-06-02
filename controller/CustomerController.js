import { customers } from "../db/db.js";
import { CustomerModel } from "../model/CustomerModel.js";

var customerIndex;

// clearField
function clearInputFields() {
  $('#customer-id').val('');
  $('#customer-name').val('');
  $('#customer-address').val('');
  $('#customer-email').val('');
}

//  Save Customer
$('#customer_btn>#customer-add').on('click', () => {
  var custId = $('#customer-id').val();
  var custName = $('#customer-name').val();
  var custAddress = $('#customer-address').val();
  var custEmail = $('#customer-email').val();

  let customer = new CustomerModel(custId, custName, custAddress, custEmail);

  customers.push(customer);

  var record = `<tr>
   <th scope="row" class="cust-id">${custId}</th>
   <td class="cust-name">${custName}</td>
   <td class="cust-address">${custAddress}</td>
   <td class="cust-email">${custEmail}</td>
   <td> <button type="button" class="btn btn-danger deleteBtn">Danger</button> </td>
  </tr>`;
  $('#cust-table').append(record);
  clearInputFields();

});


// Delete Data
$(document).on('click', '.deleteBtn', function () {
  var row = $(this).closest('tr');
  var custId = row.data('id');
  customers = customers.filter(cust => cust.id !== custId);
  row.remove();
});
