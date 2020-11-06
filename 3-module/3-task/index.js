/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str){
  const splittedStr = str.split('');

  for (let item of splittedStr){
    if(item == '-'){
      splittedStr[splittedStr.indexOf(item) + 1].toUpperCase();
    }
  }


}

console.log(camelize('background-color'));
