function createGroceryList() {
    const createList = prompt("Would you like to create a grocery list? (y/n)");

    if (createList.toLowerCase() === 'y') {
        const itemCount = parseInt(prompt("Enter the number of items for your grocery list:"));

        if (!isNaN(itemCount) && itemCount > 0) {
            let groceryList = [];

            for (let i = 0; i < itemCount; i++) {
                let item = prompt(`Enter item ${i + 1}:`);
                groceryList.push(item);
            }

            const groceryList_Sort = [...groceryList].sort();
            const groceryList_Reverse = [...groceryList_Sort].reverse();

            alert(`Original List: ${groceryList.join(", ")}`);
            alert(`Sorted List: ${groceryList_Sort.join(", ")}`);
            alert(`Reversed List: ${groceryList_Reverse.join(", ")}`);
        } else {
            alert("Invalid number of items. Please enter a valid number.");
        }
    } else {
        alert("No grocery list created.");
    }
}

createGroceryList();
