function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('João', 'User');
usuarios.set('Maria', 'Admin');
usuarios.set('Luiza', 'User');

console.log(getAdmins(usuarios));