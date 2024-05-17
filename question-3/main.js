/*art 3: Colorful T-Shirts
Challenge:
1. Design a type alias named Product to represent a T-shirt object with properties like name
(string), price (number), and color (string).
2. Include a nested object named inventory within Product. This inventory object
should have two properties:
o stock (number): Represents the number of T-shirts available.
o colorOptions (optional array of strings): Lists available colors (if any).
3. Inside the inventory object, define a function named changeColor. This function
accepts a new color string as an argument. When called, it should:
o Update the color property of the Product object.
o Adjust the price based on the new color (implement your own logic, e.g.,
increase by 10% for red, decrease by 5% for blue)*/
var product = {
    name: "polo-necked",
    price: 800,
    color: "Blue",
    inventory: {
        stock: 10,
        colorOptions: ["Black", "NavyBlue", "Grey"],
        changeColor: function (newColor) {
            //changing the color of property
            product.color = newColor;
            //changing the price according to changed color
            if (newColor == "Black") {
                // increases the price by 10% when black color is selected
                product.price += product.price * 0.1;
            }
            // increases the price by 15% when navyblue is selected
            else if (newColor == "NavyBlue") {
                product.price = +product.price * 0.5;
            }
            // decreases the price by 4% if grey is selected
            else if (newColor == "Grey") {
                product.price = -product.price * 0.04;
            }
            else {
                // if color is out of list
                console.log("".concat(newColor, " sorry! This color is not available"));
            }
            console.log("Your product price is changed according to color selection to ".concat(newColor));
        }
    }
};
console.log(product.inventory.colorOptions);
product.inventory.changeColor("Black");
product.price;
