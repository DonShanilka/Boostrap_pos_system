import { customers } from "../db/db.js";
import { CustomerModel } from "../model/CustomerModel.js";

var customerIndex;

// Details Save Customer
$('#customer-add').on('click', () => {
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
  </tr>`;
  $('#cust-table').append(record);

});