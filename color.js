let Color = [];

for (let i = 0; i < 3; i++) {
    let color = prompt("Enter a color you like:");
    Colors.push(color);  
    console.log("Updated color list:", Colors);  
}

let newColor = prompt("Add another favorite color:");
Colors.push(newColor);
console.log("Final color list:", Colors);