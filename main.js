//console.log('js file is connected!');
//console.log(2 + 2);

function checkout (item1, item2, coupon) {
  var subtotal = item1 + item2;
  var couponValue = subtotal * coupon;
  var grandTotal = subtotal - couponValue;
  console.log(grandTotal);
}

checkout(33, 19, .15);

checkout(12, 0, 0);

checkout(500, 1000, .05);
