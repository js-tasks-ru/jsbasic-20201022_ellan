/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const stringWithoutSpaces = str.split(' ').join();
  const separatedNumStr = stringWithoutSpaces.split(',');

  let cleanStr = separatedNumStr.filter(item => 
    !isNaN(item) && Boolean(item) !== false
  );
  
  const numArray = cleanStr.map(item => 
      parseFloat(item)	
  );

  let min = 0, max = 0;

  for (const iterator of numArray) {
    if(iterator < min){
      min = iterator;
    }

    if(iterator > max){
      max = iterator;
    }
  }
  
  return {min, max}
}
