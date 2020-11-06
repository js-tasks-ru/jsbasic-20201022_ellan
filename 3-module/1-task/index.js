/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  for (let user of users){
    for (let key in user){

      if ('name' in user){
        names.push(user[key]);
        continue;
      }

    }
  }
  return names;
}
