/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  // ваш код...
  let keySum = 0; 
  for (const key in obj) {
    if (key == undefined) {
      continue;
    } else {
      keySum += 1;
    }
  }
  if (keySum !== 0) {
    return false;
  } else {
    return true;
  }
}
