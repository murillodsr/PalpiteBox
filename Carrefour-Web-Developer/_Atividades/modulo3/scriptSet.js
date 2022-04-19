const Array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);

  return [...mySet]; // Utilizado o argumento rest para que retorne um Array e não um Set.
}

console.log(valoresUnicos(Array));