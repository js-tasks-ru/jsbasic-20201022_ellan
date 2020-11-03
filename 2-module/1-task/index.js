/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let salariesTotal = 0;

  for (let prop in salaries) {
    if (typeof (salaries[prop]) !== 'number') {  
      continue;
    } else {
      salariesTotal += salaries[prop];
    } 
  }
  return salariesTotal;
}
