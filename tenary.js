const y = 20;

y === 50 ? console.log(`Y is: ${y}`) : console.log(`Y must be: ${y}`);

const colorPallet = 50;

const color = colorPallet > 50 ? "fuchsia pink" : "deepPurpleAccent";

// console.log(color);

switch (color) {
    case "fuchsia pink":
        console.log("color is fuchsia pink");
        break;

    case "deepPurpleAccent":
        console.log("color is deepPurpleAccent");
        break;

    default:
        console.log("color pallet does not correspond");
        break;
}

