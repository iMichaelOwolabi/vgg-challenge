function processData(input) {
  //Enter your code here
const inputArray = input.split('');
const type1 = [], type2 = [], type3 = [], type4 = [], type5 = [], type6 = [];
inputArray.forEach(function (input) {
  switch (input) {
    case '[':
    type1.push('[');
    break;

    case ']':
    type2.push(']');
    break;

    case '{':
    type3.push('{');
    break;

    case '}':
    type4.push('}');
    break;

    case '(':
    type5.push('(');
    break;

    case ')':
    type6.push(')');
    break;
  }
});

if (type1.length !== type2.length || type3.length !== type4.length || type5.length !== type6.length ) {
  console.log(0);
} else {
      console.log(1);
}

}