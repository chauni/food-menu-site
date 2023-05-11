"use strict";

let menu = {
    drinks : [
       "Water", "Tea", "Sweet Tea",
       "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
       "Hamburger w/ Fries",
       "Grilled Cheese w/ Tater Tots",
       "Grilled Chicken w/ Veggies",
       "Chicken Fried Steak w/ Mashed Potatoes",
       "Fried Shrimp w/ Coleslaw",
       "Veggie Plate"
    ],
    desserts: [
       "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

const memberDisplayEl = document.getElementById('memberDisplay');
const categorySelectorEl = document.getElementById('categorySelector');
categorySelectorEl.onchange = onCategorySelectorChange;

function onCategorySelectorChange() {
    const selectedValue = categorySelectorEl.value

    console.log(selectedValue)

    if (selectedValue == 'drinks') {
        console.log(menu.drinks)
    } if (selectedValue == 'entrees') {
        console.log(menu.entrees)
    } if (selectedValue == 'desserts') {
        console.log(menu.desserts)
    } else if (selectedValue == "") {
        alert("Select a category")
    }

}
