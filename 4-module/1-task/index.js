/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

/*План решения
  1 Создать DOM элемент ul списка
  2 Взять friends.firstName и friends.lastName для каждого объекта
  3 Для каждого friends.firstName и friends.lastName создать li
  4 Поместить все li в ul
*/
function makeFriendsList(friends) {
  // ваш код...
  let ulList = document.createElement('ul');
  let initials = friends.map(item => {
    return `${item.firstName} ${item.lastName}`;
  });

  for (const iterator of initials) {
    const li = document.createElement('<li>');
    li.innerHTML = iterator;
    ulList.append('<li>');
  }
  return ulList;
}
