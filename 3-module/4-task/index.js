/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
 const result = data.map(item => {

		if (item.age <= age) {
			return filteredUsers = `${item.name}, ${item.balance}`;
		}
	}).join('\n');

	return result;
}
