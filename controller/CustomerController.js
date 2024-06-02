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


// Load Table
function loadTable() {

  $("#customer-table").empty();

  customers.map((item, index) => {
    console.log(item)
    let record = `<tr>
              <td class="cust-id">${item.id}</td>
              <td class="cust-name">${item.firstName}</td>
              <td class="student-lastname-value">${item.lastName}</td>
              <td class="student-address-value">${item.address}</td>
              <td class="student-program-value">${item.program}</td>
          </tr>`;
    $("#student-tbl-tbody").append(record);
  });
}

//  Save Customer
$('#customer_btn>#customer-add').on('click', () => {
  var custId = $('#customer-id').val();
  var custName = $('#customer-name').val();
  var custAddress = $('#customer-address').val();
  var custEmail = $('#customer-email').val();

  let customer = new CustomerModel(custId, custName, custAddress, custEmail);

  customers.push(customer);

  var record = `<tr data-id="${custId}">
   <th scope="row" class="cust-id">${custId}</th>
   <td class="cust-name">${custName}</td>
   <td class="cust-address">${custAddress}</td>
   <td class="cust-email">${custEmail}</td>
   <td> <button type="button" class="btn btn-danger deleteBtn">Danger</button> </td>
  </tr>`;
  $('#cust-table').append(record);
  clearInputFields();

});


$("#customer-update").on('click', () => {
  var cId = $('#customer-id').val();
  var cNAme = $('#customer-name').val();
  var cAddress = $('#customer-address').val();
  var cEmail = $('#customer-email').val();

  let custObj = customers[recordIndex];

  custObj.custId = cId;
  custObj.custName = cNAme;
  custObj.custAddress = cAddress;
  custObj.custEmail = cEmail;

  // console.log("S1: ", studentObj);
  // console.log("S2: ", students[recordIndex]);

  loadTable();
  $("#student-reset").click();
});