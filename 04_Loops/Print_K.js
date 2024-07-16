//PRINT K using loop
let num = 5;
for (let i = 0; i < num; i++) {
    let row = '* ';
    for (let j = 0; j < num; j++) {
      if ( j === num - i - 1) {
        row += '* ';
      } else {
        row += '  ';
      }
    }
    console.log(row);
  }
  for (let i = num; i >= 0; i--) {
    let row = '* ';
    for (let j = 0; j < num; j++) {
      if ( j === num - i - 1) {
        row += '* ';
      } else {
        row += '  ';
      }
    }
    console.log(row);
  }