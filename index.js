var customerName = "bob"
const leastFavoriteCustomer = 'james'

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = "not bob"
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'john'
  }





  
//     describe('changeLeastFavoriteCustomer()', function() {
//       it('unsuccessfully tries to reassign the least favorite customer', function() {
//         expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//       });
//     });
//   });
  