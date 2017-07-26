//console.log('js file is connected!');
//console.log(2 + 2);

function checkout (item1, item2, coupon) {
  var subtotal = item1 + item2;
  var couponValue = subtotal * coupon;
  var grandTotal = subtotal - couponValue;
  return grandTotal;
  //console.log(grandTotal);
}

function helloFunction(name) {
  if(name=== 'Sammy' {
    console.log('Go away. I h8 you.')
  } else {
    console.log('Hello ' + name + '!');
  }
}

helloFunction('sammy');

console.log(checkout(33, 19, .15));

var oneItemResult = checkout(12, 0, 0);

console.log(oneItemResult);

checkout(500, 1000, .05);

var bananaPrice = 1.5;
var cgicikateOyddubg - 6;
var superCoupon = .45;
