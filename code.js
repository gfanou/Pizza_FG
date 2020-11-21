$(document).ready(function()
{
    $("button").click(placeOrder);
    $("input[name=veggies]").change(updateOrder);
    $("input[name=meats]").change(updateOrder);

    function updateOrder()
    {
        // find out how many checkboxes are checked

        var checkedVeggies = $("input[name=veggies]:checked");

        // find out how many boxes that is
        var numVeggies = checkedVeggies.length;


        // ask jquery for all the checked soap boxes
        var checkedMeats = $("input[name=meats]:checked");

        // find out how many boxes that is
        var numMeats = checkedMeats.length;



    }

    function placeOrder(event)
    {
        // stop form from submitting
        event.preventDefault();

        // when the form is submitted

        // calculate the cost of selected veggies
        var subtotal1 = 0;
        var productSummary1 = "";

        var checkedVeggies = $("input[name=veggies]:checked");

        // loop over all checkboxes and add up their data-price value
        checkedVeggies.each(function() {
            // add the price to the total variable
            subtotal1 += $(this).data("veggies");
            // concatenate the value attribute to the string variable
            productSummary1 += $(this).val();
            productSummary2 += " ";
        });

            // calculate the cost of selected meats
            var subtotal2 = 0;
            var productSummary2 = "";

            var checkedMeats = $("input[name=meats]:checked");

            // loop over all checkboxes and add up their data-price value
            checkedMeats.each(function() {
                // add the price to the total variable
                subtotal2 += $(this).data("meats");
                // concatenate the value attribute to the string variable
                productSummary2 += $(this).val();
                productSummary2 += " ";

            });

        // get the selected radio button with name="size"
        var selectedButton = $("input[name=size]:checked");

        // get the data-size value from the selected radio button
        var pizzaCost = selectedButton.data("size");

        // calc grand total
        var orderSubtotal = subtotal1 + subtotal2+ pizzaCost;
        var tax = orderSubtotal*0.051;
        var deliveryFee = 2;

        var orderTotal = orderSubtotal + tax+ deliveryFee;


        var fName = $("#firstName").val();
        var lName = $("#lastName").val();
        var phone = $("#phoneNumber").val();
        var pSize = $("input[name=size]:checked").val();
        var pCrust = $("input[name=crust]:checked").val();

         var output = ` ORDER SUMMARY : <br> <br> Personal information:<br>
                First Name : ${fName} <br>Last Name : ${lName}<br> Phone Number : ${phone}<br><br>
                Order Detail:<br>
                Pizza size: ${pSize}<br>
                Crust : ${pCrust}<br>
                Veggies selected: ${productSummary1}<br>
                Meats selected: ${productSummary2}<br><br> Payment<br>
                Subtotal = $ ${orderSubtotal}<br>
                Pizza tax = $ ${tax.toFixed(2)} <br>
                delivery fee = $ ${deliveryFee} <br>
                 Order Total = $ ${orderTotal.toFixed(2)}<br><br>
                    THANKS FOR YOUR ORDER`;


         $(" #message").html(output);


    }
});
