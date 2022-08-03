var increment_button = document.getElementById('button1');
var decrement_button = document.getElementById('button2');
var quantity_view = document.getElementById('quantity-view');
var order_button = document.getElementById('order_button');
var order_view = document.getElementById('order-view');
var count = 0;


increment_button.addEventListener('click' , function(){
    count = count + 1;
       quantity_view.innerHTML = count + "";
});


decrement_button.addEventListener('click' , function(){
    if(count==0){
// do nothing
    }
    else{
        count = count - 1;
    }

       quantity_view.innerHTML = count + ""; 
});



order_button.addEventListener('click' , function(){

   if(count==0){
    order_view.innerHTML = "";
   }else{
    var price = count * 20;
    var order_details_message = "Thank You for ordering! " + "<br>" + "Quantity: " + count + "<br>" + "Price: " + price + " rupees ";
 //    console.log(count);
 //    console.log(price);
 //    console.log(order_details_message);
    order_view.innerHTML = order_details_message;
   }


 
});