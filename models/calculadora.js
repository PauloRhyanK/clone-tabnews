function somar(...numbers) {
  if (numbers[0] != undefined) {
    let isNumber = numbers.every((x) => {
      if (typeof x == "number" && x) {
        return true;
      } else {
        return false;
      }
    });

    if (isNumber == true) {
      const resultado = numbers.reduce((acc, value) => {
        return acc + value;
      });
      return resultado;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

exports.somar = somar;
