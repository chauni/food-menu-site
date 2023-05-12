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


const emptyMessage = new Option("-----")
memberDisplayEl.appendChild(emptyMessage)

function onCategorySelectorChange() {
    const selectedValue = categorySelectorEl.value

    if (selectedValue == 'drinks') {
        getMenuOptions(menu.drinks)
    } if (selectedValue == 'entrees') {
            getMenuOptions(menu.entrees)
    } if (selectedValue == 'desserts') {
        getMenuOptions(menu.desserts)
    } else if (selectedValue == "") {
        memberDisplayEl.options.length = 0;
        memberDisplayEl.size = 0;
        const emptyMessage = new Option("-----")
        memberDisplayEl.appendChild(emptyMessage)
    }
}

/* ^ alternative way

function onCategorySelectorChange() {
    const selectedValue = categorySelectorEl.value

    const categoryMembers = menu[selectedCategory]

    ** possible bc the property values have the same name as the option value (in the HTML)
    ** less error prone and more abstract; gives the ability to potentially add other categories later on
    ** dot notation specifically looks for a property name associated with the array
}

function getMenuOptions(itemsList) {
    memberDisplayEl.size = itemsList.length;
    if (itemsList) {
    memberDisplayEl.options.length = 0;
    for (let i = 0; i < itemsList.length; i++) {
        const memberListbox = new Option(itemsList[i]);
        memberDisplayEl.appendChild(memberListbox);
    }
}
}
    ** clears the 'select a category' listbox to remove previously selected items
*/

function getMenuOptions(itemsList) {
    memberDisplayEl.size = itemsList.length;
    memberDisplayEl.options.length = 0;
    for (let i = 0; i < itemsList.length; i++) {
        const memberListbox = new Option(itemsList[i]);
        memberDisplayEl.appendChild(memberListbox);
    }
}
