function pizzaOrder(size, number, topping) {
  this.size = size;
  this.number = number;
  this.topping = topping;
}

pizzaOrder.prototype.totalCost = function() {
  var toppingList = this.topping.split(' ');
  var toppingCost = ((toppingList.length * 1.25) * this.number);
  var costOfSize = 0;

  if (this.size === "Huge") {
    costOfSize = 7;
  } else if (this.size === "Kinda Big") {
    costOfSize = 5;
  } else if (this.size === "Pretty small") {
    costOfSize = 4;
  }

  var totalCost = toppingCost + (costOfSize * (parseInt(this.number)));
  return totalCost;
};

$(document).ready(function() {
  $("form#customerOrder").submit(function(event) {
    var costForAll = 0;
    event.preventDefault();
$(".pizzaCreation").each(function() {
    var pizzaTopping = $("input#topping").val().toString();
    var size = $("select#size").val();
    var number = $("input#numberOfPizzas").val();
    var pizza = new pizzaOrder(size,number,pizzaTopping);
    $("#pizzaTotal").show();
    $("#totalCost").text(number + ' ' + size + ' ' + "pizzas with " + pizzaTopping + " " + "will cost $" + pizza.totalCost());
    costForAll += pizza.totalCost();
  });

    $("#costForAllPizza").text("total cost for all pizza's will be $" + costForAll);
    $("select#size").val("Select Size");
    $("input#topping").val("");
    $("input#numberOfPizzas").val("");

  });

  $("#addNewPizza").click(function(){
    $("#pizzaForms").append("<div class='pizzaCreation'><label for='pizzaSize'>Pizza Size: </label>" + "<select id='size'>" +
    "<option>Select Size</option>" +
    "<option value='Huge'>Large</option>" +
    "<option value='Kinda Big'>Medium</option>" +
    "<option value='Pretty small'>Pretty small</option>" +
    "</select>" +
    "<label for='topping'>Toppings</label>" +
    "<input type='text' id='topping'>" +
    "<label for='numberOfPizzas'>Number of Pizza's:</label>" +
    "<input type='text' id='numberOfPizzas'> </div>");

  });
});
