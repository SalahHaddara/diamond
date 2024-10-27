var input = prompt("Enter number of rows: ");
var rows = parseInt(input);

for (var i = 0; i < rows; i++) {
  var spaces = " ".repeat(rows - i - 1);
  var stars = "*".repeat(2 * i + 1);
  console.log(spaces + stars);
}

for (var i = 0; i < rows - 1; i++) {
  var spaces = " ".repeat(i + 1);
  var stars = "*".repeat(2 * (rows - i - 2) + 1);
  console.log(spaces + stars);
}
